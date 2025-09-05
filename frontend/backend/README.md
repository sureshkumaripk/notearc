# NoteArc Backend API

A Node.js/Express backend API for the NoteArc platform with Sequelize ORM and PostgreSQL database.

## Features

- RESTful API endpoints for blog management
- PostgreSQL database with Sequelize ORM
- Input validation and error handling
- CORS enabled for frontend integration
- Sample data seeding

## Prerequisites

- Node.js (v16 or higher)
- PostgreSQL database
- npm or yarn

## Setup Instructions

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Database Setup

1. Create a PostgreSQL database:
```sql
CREATE DATABASE notearc_db;
```

2. Update the database configuration in `config.env`:
```env
DB_HOST=localhost
DB_PORT=5432
DB_NAME=notearc_db
DB_USER=your_username
DB_PASSWORD=your_password
DB_DIALECT=postgres
```

### 3. Run the Application

#### Development Mode
```bash
npm run dev
```

#### Production Mode
```bash
npm start
```

The server will start on `http://localhost:5000`

## API Endpoints

### Blogs

- `GET /api/blogs` - Get all published blogs (with pagination, filtering, and search)
- `GET /api/blogs/:slug` - Get blog by slug
- `POST /api/blogs` - Create new blog
- `PUT /api/blogs/:id` - Update blog
- `DELETE /api/blogs/:id` - Delete blog

### Query Parameters for GET /api/blogs

- `page` - Page number (default: 1)
- `limit` - Items per page (default: 10)
- `category` - Filter by category
- `tag` - Filter by tag
- `search` - Search in title, content, and excerpt

## Database Schema

### Blogs Table

| Column | Type | Description |
|--------|------|-------------|
| id | INTEGER | Primary key, auto-increment |
| title | STRING(255) | Blog title |
| slug | STRING(255) | URL-friendly slug (unique) |
| content | TEXT | Blog content |
| excerpt | TEXT | Blog excerpt |
| featured_image | STRING(500) | Featured image URL |
| author | STRING(100) | Author name |
| tags | ARRAY(STRING) | Array of tags |
| category | STRING(50) | Blog category |
| status | ENUM | 'draft', 'published', 'archived' |
| read_time | INTEGER | Estimated reading time in minutes |
| view_count | INTEGER | Number of views |
| published_at | DATE | Publication date |
| created_at | DATE | Creation timestamp |
| updated_at | DATE | Last update timestamp |

## Environment Variables

Create a `config.env` file in the backend directory:

```env
NODE_ENV=development
PORT=5000
DB_HOST=localhost
DB_PORT=5432
DB_NAME=notearc_db
DB_USER=postgres
DB_PASSWORD=password
DB_DIALECT=postgres
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
```

## Sample Data

The application automatically seeds sample blog data in development mode. You can also manually seed the database:

```bash
node src/seeders/sample-blogs.js
```

## Development

### Project Structure

```
backend/
├── src/
│   ├── models/
│   │   ├── index.js
│   │   └── Blog.js
│   ├── routes/
│   │   └── blogs.js
│   ├── seeders/
│   │   └── sample-blogs.js
│   └── index.js
├── config.env
├── package.json
└── README.md
```

### Adding New Models

1. Create a new model file in `src/models/`
2. Import and register the model in `src/models/index.js`
3. Create corresponding routes in `src/routes/`
4. Add the route to the main server file

## API Response Format

All API responses follow this format:

```json
{
  "success": true,
  "data": {
    // Response data
  },
  "message": "Optional message"
}
```

Error responses:

```json
{
  "success": false,
  "message": "Error message",
  "error": "Detailed error (development only)"
}
```

