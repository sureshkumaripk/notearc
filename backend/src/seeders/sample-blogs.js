const { Blog } = require('../models');

const sampleBlogs = [
  {
    title: 'Getting Started with Next.js 14',
    slug: 'getting-started-with-nextjs-14',
    content: `Next.js 14 introduces several exciting new features that make building React applications even more powerful and efficient. In this comprehensive guide, we'll explore the key improvements and how to leverage them in your projects.

## Key Features

### 1. App Router
The new App Router provides a more intuitive way to organize your application structure with file-based routing and improved performance.

### 2. Server Components
React Server Components allow you to write components that run on the server, reducing client-side JavaScript and improving performance.

### 3. Streaming
Built-in streaming support enables faster page loads and better user experience.

## Getting Started

To create a new Next.js 14 project:

\`\`\`bash
npx create-next-app@latest my-app
cd my-app
npm run dev
\`\`\`

This will set up a new project with all the latest features enabled by default.`,
    excerpt: 'Learn about the latest features in Next.js 14 and how to get started with this powerful React framework.',
    featuredImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop',
    author: 'NoteArc Team',
    tags: ['Next.js', 'React', 'JavaScript', 'Web Development'],
    category: 'Development',
    status: 'published',
    readTime: 8
  },
  {
    title: 'The Future of Note-Taking Apps',
    slug: 'future-of-note-taking-apps',
    content: `Note-taking has evolved significantly over the past decade, from simple text editors to sophisticated platforms that integrate AI, collaboration, and multimedia support. Let's explore what the future holds for note-taking applications.

## Current Trends

### AI Integration
Modern note-taking apps are increasingly incorporating AI features like:
- Smart summarization
- Automatic tagging
- Content suggestions
- Voice-to-text transcription

### Collaboration Features
Real-time collaboration has become essential, with features like:
- Live editing
- Comments and annotations
- Version control
- Team workspaces

## Future Predictions

### 1. Enhanced AI Capabilities
We'll see more advanced AI features that can:
- Generate content based on context
- Automatically organize notes
- Provide intelligent search
- Create visual summaries

### 2. Cross-Platform Integration
Seamless integration across devices and platforms will become standard, with cloud synchronization and offline capabilities.

### 3. Multimedia Support
Enhanced support for various content types including:
- Voice notes
- Handwritten notes
- Images and diagrams
- Video annotations`,
    excerpt: 'Explore the evolving landscape of note-taking applications and discover what the future holds for digital note-taking.',
    featuredImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop',
    author: 'NoteArc Team',
    tags: ['Productivity', 'AI', 'Technology', 'Digital Tools'],
    category: 'Technology',
    status: 'published',
    readTime: 6
  },
  {
    title: 'Building Scalable APIs with Express and Sequelize',
    slug: 'building-scalable-apis-express-sequelize',
    content: `Building scalable APIs is crucial for modern web applications. In this guide, we'll explore how to create robust and scalable APIs using Express.js and Sequelize ORM.

## Architecture Overview

### 1. Express.js Framework
Express provides a minimal and flexible Node.js web application framework that's perfect for building APIs.

### 2. Sequelize ORM
Sequelize is a powerful ORM for Node.js that supports multiple databases and provides excellent features for data modeling and querying.

## Best Practices

### Database Design
- Use proper indexing
- Implement data validation
- Design efficient relationships
- Consider database migrations

### API Design
- Follow RESTful conventions
- Implement proper error handling
- Use middleware for common functionality
- Implement rate limiting

### Security
- Validate all inputs
- Use HTTPS in production
- Implement authentication and authorization
- Sanitize data

## Example Implementation

Here's a basic example of setting up an Express API with Sequelize:

\`\`\`javascript
const express = require('express');
const { Sequelize } = require('sequelize');

const app = express();
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'postgres'
});

app.use(express.json());

// Routes
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
\`\`\``,
    excerpt: 'Learn how to build scalable and maintainable APIs using Express.js and Sequelize ORM with best practices and examples.',
    featuredImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop',
    author: 'NoteArc Team',
    tags: ['API', 'Express', 'Sequelize', 'Node.js', 'Backend'],
    category: 'Development',
    status: 'published',
    readTime: 10
  },
  {
    title: 'Modern CSS Techniques for Better User Experience',
    slug: 'modern-css-techniques-better-ux',
    content: `CSS has evolved significantly over the years, providing developers with powerful tools to create exceptional user experiences. Let's explore some modern CSS techniques that can enhance your web applications.

## CSS Grid Layout

CSS Grid is a powerful layout system that allows you to create complex two-dimensional layouts with ease.

\`\`\`css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
}
\`\`\`

## Flexbox for Responsive Design

Flexbox is perfect for creating flexible and responsive layouts:

\`\`\`css
.flex-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
\`\`\`

## CSS Custom Properties

CSS custom properties (variables) make your styles more maintainable:

\`\`\`css
:root {
  --primary-color: #3b82f6;
  --secondary-color: #1f2937;
  --border-radius: 0.5rem;
}

.button {
  background-color: var(--primary-color);
  border-radius: var(--border-radius);
}
\`\`\`

## Modern Animations

CSS animations and transitions can significantly improve user experience:

\`\`\`css
.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}
\`\`\``,
    excerpt: 'Discover modern CSS techniques that can enhance your web applications and provide better user experiences.',
    featuredImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop',
    author: 'NoteArc Team',
    tags: ['CSS', 'Frontend', 'Design', 'UX'],
    category: 'Design',
    status: 'published',
    readTime: 7
  },
  {
    title: 'The Rise of TypeScript in Modern Development',
    slug: 'rise-of-typescript-modern-development',
    content: `TypeScript has become an essential tool in modern web development, offering type safety and enhanced developer experience. Let's explore why TypeScript is gaining popularity and how to get started.

## Why TypeScript?

### 1. Type Safety
TypeScript provides static type checking, helping catch errors at compile time rather than runtime.

### 2. Better IDE Support
Enhanced IntelliSense and refactoring capabilities make development more efficient.

### 3. Improved Code Quality
Type annotations serve as documentation and help maintain code quality.

## Getting Started

### Installation
\`\`\`bash
npm install -g typescript
npm install --save-dev typescript @types/node
\`\`\`

### Basic Configuration
Create a \`tsconfig.json\` file:

\`\`\`json
{
  "compilerOptions": {
    "target": "es2020",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}
\`\`\`

### Example TypeScript Code
\`\`\`typescript
interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

function createUser(userData: Partial<User>): User {
  return {
    id: Date.now(),
    name: userData.name || '',
    email: userData.email || '',
    isActive: userData.isActive ?? true
  };
}
\`\`\``,
    excerpt: 'Explore the benefits of TypeScript and learn how to integrate it into your development workflow for better code quality and developer experience.',
    featuredImage: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=400&fit=crop',
    author: 'NoteArc Team',
    tags: ['TypeScript', 'JavaScript', 'Development', 'Programming'],
    category: 'Development',
    status: 'published',
    readTime: 9
  }
];

async function seedBlogs() {
  try {
    // Clear existing blogs
    await Blog.destroy({ where: {} });
    
    // Insert sample blogs
    await Blog.bulkCreate(sampleBlogs);
    
    console.log('✅ Sample blogs seeded successfully!');
  } catch (error) {
    console.error('❌ Error seeding blogs:', error);
  }
}

module.exports = { seedBlogs };
