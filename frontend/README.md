<<<<<<< HEAD
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
=======
# NoteArc - Modern Note-Taking Platform

A full-stack web application built with Next.js frontend and Node.js/Express backend, featuring a modern blog platform with NoteArc branding.

## 🚀 Features

- **Modern Frontend**: Built with Next.js 14, TypeScript, and Tailwind CSS
- **RESTful API**: Node.js/Express backend with Sequelize ORM
- **Database**: PostgreSQL with comprehensive blog management
- **Responsive Design**: Mobile-first approach with beautiful UI
- **Blog System**: Complete CRUD operations for blog posts
- **Search & Filter**: Advanced search and filtering capabilities
- **SEO Optimized**: Meta tags, structured data, and performance optimization

## 📁 Project Structure

```
blogcrud-frontend/
├── frontend/                 # Next.js frontend application
│   ├── src/
│   │   ├── app/             # Next.js app router
│   │   ├── components/      # React components
│   │   └── services/        # API services
│   ├── public/              # Static assets
│   └── package.json
├── backend/                  # Node.js/Express backend API
│   ├── src/
│   │   ├── models/          # Sequelize models
│   │   ├── routes/          # API routes
│   │   ├── seeders/         # Database seeders
│   │   └── index.js         # Server entry point
│   ├── config.env           # Environment variables
│   └── package.json
└── README.md
```

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icons

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **Sequelize** - ORM for database management
- **PostgreSQL** - Relational database
- **Express Validator** - Input validation

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- PostgreSQL database
- npm or yarn

### 1. Clone the Repository

```bash
git clone <repository-url>
cd blogcrud-frontend
```

### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create PostgreSQL database
createdb notearc_db

# Update database configuration in config.env
# Edit config.env with your database credentials

# Start the backend server
npm run dev
```

The backend will start on `http://localhost:5000`

### 3. Frontend Setup

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```

The frontend will start on `http://localhost:3000`

## 📚 API Documentation

### Blog Endpoints

- `GET /api/blogs` - Get all published blogs
- `GET /api/blogs/:slug` - Get blog by slug
- `POST /api/blogs` - Create new blog
- `PUT /api/blogs/:id` - Update blog
- `DELETE /api/blogs/:id` - Delete blog

### Query Parameters

- `page` - Page number (default: 1)
- `limit` - Items per page (default: 10)
- `category` - Filter by category
- `tag` - Filter by tag
- `search` - Search in title, content, and excerpt

## 🎨 Design System

The application uses a consistent design system with:

- **Primary Color**: Orange (#f97316)
- **Typography**: Modern sans-serif fonts
- **Spacing**: Consistent 8px grid system
- **Components**: Reusable UI components
- **Responsive**: Mobile-first responsive design

## 🔧 Development

### Backend Development

```bash
cd backend
npm run dev          # Start development server
npm run db:migrate   # Run database migrations
npm run db:seed      # Seed sample data
```

### Frontend Development

```bash
cd frontend
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
```

### Environment Variables

#### Backend (.env)
```env
NODE_ENV=development
PORT=5000
DB_HOST=localhost
DB_PORT=5432
DB_NAME=notearc_db
DB_USER=postgres
DB_PASSWORD=password
DB_DIALECT=postgres
JWT_SECRET=your-super-secret-jwt-key
```

#### Frontend (.env.local)
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

## 📊 Database Schema

### Blogs Table

| Column | Type | Description |
|--------|------|-------------|
| id | INTEGER | Primary key |
| title | STRING(255) | Blog title |
| slug | STRING(255) | URL-friendly slug |
| content | TEXT | Blog content |
| excerpt | TEXT | Blog excerpt |
| featured_image | STRING(500) | Featured image URL |
| author | STRING(100) | Author name |
| tags | ARRAY(STRING) | Array of tags |
| category | STRING(50) | Blog category |
| status | ENUM | Publication status |
| read_time | INTEGER | Reading time in minutes |
| view_count | INTEGER | Number of views |
| published_at | DATE | Publication date |
| created_at | DATE | Creation timestamp |
| updated_at | DATE | Update timestamp |

## 🚀 Deployment

### Backend Deployment

1. Set up a PostgreSQL database (e.g., on Heroku, AWS RDS)
2. Configure environment variables
3. Deploy to your preferred platform (Heroku, Vercel, AWS, etc.)

### Frontend Deployment

1. Build the application: `npm run build`
2. Deploy to Vercel, Netlify, or your preferred platform
3. Configure environment variables for production

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions, please open an issue in the repository or contact the development team.

---

Built with ❤️ by the NoteArc Team

>>>>>>> dc75193edc55ab0bde66d2297d08faed0d8d5773
