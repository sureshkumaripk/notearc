const express = require('express');
const router = express.Router();
const { Blog } = require('../models');
const { body, validationResult } = require('express-validator');

// GET /api/blogs - Get all published blogs
router.get('/', async (req, res) => {
  try {
    const { page = 1, limit = 10, category, tag, search } = req.query;
    const offset = (page - 1) * limit;
    
    let whereClause = { status: 'published' };
    
    // Add category filter
    if (category) {
      whereClause.category = category;
    }
    
    // Add tag filter
    if (tag) {
      whereClause.tags = { [require('sequelize').Op.contains]: [tag] };
    }
    
    // Add search filter
    if (search) {
      whereClause[require('sequelize').Op.or] = [
        { title: { [require('sequelize').Op.iLike]: `%${search}%` } },
        { content: { [require('sequelize').Op.iLike]: `%${search}%` } },
        { excerpt: { [require('sequelize').Op.iLike]: `%${search}%` } }
      ];
    }
    
    const blogs = await Blog.findAndCountAll({
      where: whereClause,
      order: [['publishedAt', 'DESC']],
      limit: parseInt(limit),
      offset: parseInt(offset),
      attributes: [
        'id', 'title', 'slug', 'excerpt', 'featuredImage', 
        'author', 'tags', 'category', 'readTime', 'viewCount', 
        'publishedAt', 'createdAt'
      ]
    });
    
    res.json({
      success: true,
      data: {
        blogs: blogs.rows,
        pagination: {
          currentPage: parseInt(page),
          totalPages: Math.ceil(blogs.count / limit),
          totalItems: blogs.count,
          itemsPerPage: parseInt(limit)
        }
      }
    });
  } catch (error) {
    console.error('Error fetching blogs:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching blogs',
      error: process.env.NODE_ENV === 'development' ? error.message : {}
    });
  }
});

// GET /api/blogs/:slug - Get blog by slug
router.get('/:slug', async (req, res) => {
  try {
    const { slug } = req.params;
    
    const blog = await Blog.findOne({
      where: { 
        slug: slug,
        status: 'published'
      }
    });
    
    if (!blog) {
      return res.status(404).json({
        success: false,
        message: 'Blog not found'
      });
    }
    
    // Increment view count
    await blog.incrementViewCount();
    
    res.json({
      success: true,
      data: blog
    });
  } catch (error) {
    console.error('Error fetching blog:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching blog',
      error: process.env.NODE_ENV === 'development' ? error.message : {}
    });
  }
});

// POST /api/blogs - Create new blog
router.post('/', [
  body('title').notEmpty().withMessage('Title is required'),
  body('content').notEmpty().withMessage('Content is required'),
  body('slug').notEmpty().withMessage('Slug is required')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation errors',
        errors: errors.array()
      });
    }

    const { title, content, slug, excerpt, featuredImage, author, tags, category, status, readTime } = req.body;
    
    const blog = await Blog.create({
      title,
      content,
      slug,
      excerpt,
      featuredImage,
      author: author || 'NoteArc Team',
      tags: tags || [],
      category: category || 'General',
      status: status || 'published',
      readTime
    });
    
    res.status(201).json({
      success: true,
      message: 'Blog created successfully',
      data: blog
    });
  } catch (error) {
    console.error('Error creating blog:', error);
    res.status(500).json({
      success: false,
      message: 'Error creating blog',
      error: process.env.NODE_ENV === 'development' ? error.message : {}
    });
  }
});

// PUT /api/blogs/:id - Update blog
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    
    const blog = await Blog.findByPk(id);
    
    if (!blog) {
      return res.status(404).json({
        success: false,
        message: 'Blog not found'
      });
    }
    
    await blog.update(updateData);
    
    res.json({
      success: true,
      message: 'Blog updated successfully',
      data: blog
    });
  } catch (error) {
    console.error('Error updating blog:', error);
    res.status(500).json({
      success: false,
      message: 'Error updating blog',
      error: process.env.NODE_ENV === 'development' ? error.message : {}
    });
  }
});

// DELETE /api/blogs/:id - Delete blog
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    const blog = await Blog.findByPk(id);
    
    if (!blog) {
      return res.status(404).json({
        success: false,
        message: 'Blog not found'
      });
    }
    
    await blog.destroy();
    
    res.json({
      success: true,
      message: 'Blog deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting blog:', error);
    res.status(500).json({
      success: false,
      message: 'Error deleting blog',
      error: process.env.NODE_ENV === 'development' ? error.message : {}
    });
  }
});

module.exports = router;
