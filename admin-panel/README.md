# NoteArc Admin Panel

A modern, responsive admin panel for managing NoteArc content with authentication and dashboard functionality.

## Features

- 🔐 **Secure Authentication** - JWT-based login system
- 📊 **Dashboard** - Overview statistics and quick actions
- 📝 **Blog Management** - CRUD operations for blog posts
- 🎨 **Modern UI** - Built with Tailwind CSS and React
- 📱 **Responsive Design** - Works on all device sizes
- 🔒 **Protected Routes** - Authentication required for admin access

## Pages

1. **Login Page** (`/login`) - Admin authentication
2. **Dashboard** (`/`) - Overview and statistics
3. **Blog List** (`/blogs`) - Manage all blog posts

## API Endpoints

The admin panel expects the following backend API endpoints:

### Authentication
- `POST /api/auth/login` - Admin login
- `GET /api/auth/me` - Get current user info

### Dashboard
- `GET /api/admin/dashboard/stats` - Get dashboard statistics

### Blog Management
- `GET /api/admin/blogs` - Get all blogs
- `PATCH /api/admin/blogs/:id/status` - Update blog status
- `DELETE /api/admin/blogs/:id` - Delete blog

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## Development

The admin panel runs on port 3001 by default and proxies API requests to `http://localhost:5000`.

### Project Structure
```
src/
├── components/     # Reusable UI components
├── pages/         # Page components
├── styles/        # CSS and Tailwind styles
├── utils/         # Utility functions and contexts
├── App.jsx        # Main app component with routing
└── main.jsx       # React entry point
```

### Key Components

- **AuthContext** - Manages authentication state
- **Layout** - Main layout with sidebar navigation
- **Login** - Authentication form
- **Dashboard** - Overview statistics and quick actions
- **BlogList** - Blog management interface

## Styling

The admin panel uses Tailwind CSS for styling with custom component classes:

- `.btn-primary` - Primary button styles
- `.btn-secondary` - Secondary button styles
- `.input-field` - Form input styles
- `.card` - Card container styles

## Authentication Flow

1. User visits `/login`
2. Enters credentials
3. Backend validates and returns JWT token
4. Token stored in localStorage
5. User redirected to dashboard
6. Protected routes check authentication status
7. Logout clears token and redirects to login

## Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_BASE_URL=http://localhost:5000
```

## Contributing

1. Follow the existing code style
2. Add proper error handling
3. Test authentication flows
4. Ensure responsive design works
5. Update API documentation as needed

## License

MIT License - see LICENSE file for details
