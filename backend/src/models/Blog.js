module.exports = (sequelize, DataTypes) => {
  const Blog = sequelize.define('Blog', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [1, 255]
      }
    },
    slug: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true
      }
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    excerpt: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    featuredImage: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    author: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: 'NoteArc Team'
    },
    tags: {
      type: DataTypes.JSON,
      allowNull: true,
      defaultValue: []
    },
    category: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: 'General'
    },
    status: {
      type: DataTypes.ENUM('draft', 'published', 'archived'),
      allowNull: false,
      defaultValue: 'published'
    },
    readTime: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: 'Estimated reading time in minutes'
    },
    viewCount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    publishedAt: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'blogs',
    timestamps: true,
    underscored: true,
    hooks: {
      beforeCreate: (blog) => {
        if (blog.status === 'published' && !blog.publishedAt) {
          blog.publishedAt = new Date();
        }
      },
      beforeUpdate: (blog) => {
        if (blog.changed('status') && blog.status === 'published' && !blog.publishedAt) {
          blog.publishedAt = new Date();
        }
      }
    }
  });

  // Instance methods
  Blog.prototype.incrementViewCount = function() {
    return this.increment('viewCount');
  };

  // Class methods
  Blog.findPublished = function() {
    return this.findAll({
      where: { status: 'published' },
      order: [['publishedAt', 'DESC']]
    });
  };

  Blog.findBySlug = function(slug) {
    return this.findOne({
      where: { 
        slug: slug,
        status: 'published'
      }
    });
  };

  return Blog;
};
