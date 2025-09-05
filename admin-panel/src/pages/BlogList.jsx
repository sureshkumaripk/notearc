import React, { useState, useEffect } from 'react'
import axios from 'axios'

const BlogList = () => {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')

  useEffect(() => {
    fetchBlogs()
  }, [])

  const fetchBlogs = async () => {
    try {
      const response = await axios.get('/api/admin/blogs')
      setBlogs(response.data)
    } catch (error) {
      console.error('Failed to fetch blogs:', error)
      // Set demo data for development
      setBlogs([
        {
          id: 1,
          title: 'Getting Started with NoteArc',
          slug: 'getting-started-with-notearc',
          status: 'published',
          author: 'Admin User',
          publishedAt: '2024-01-15T10:00:00Z',
          views: 1250,
          likes: 45
        },
        {
          id: 2,
          title: 'Advanced Features Guide',
          slug: 'advanced-features-guide',
          status: 'published',
          author: 'Admin User',
          publishedAt: '2024-01-10T14:30:00Z',
          views: 890,
          likes: 32
        },
        {
          id: 3,
          title: 'API Documentation',
          slug: 'api-documentation',
          status: 'draft',
          author: 'Admin User',
          publishedAt: null,
          views: 0,
          likes: 0
        },
        {
          id: 4,
          title: 'User Management Tips',
          slug: 'user-management-tips',
          status: 'published',
          author: 'Admin User',
          publishedAt: '2024-01-05T09:15:00Z',
          views: 567,
          likes: 18
        }
      ])
    } finally {
      setLoading(false)
    }
  }

  const handleStatusChange = async (blogId, newStatus) => {
    try {
      await axios.patch(`/api/admin/blogs/${blogId}/status`, { status: newStatus })
      setBlogs(blogs.map(blog => 
        blog.id === blogId ? { ...blog, status: newStatus } : blog
      ))
    } catch (error) {
      console.error('Failed to update blog status:', error)
    }
  }

  const handleDelete = async (blogId) => {
    if (window.confirm('Are you sure you want to delete this blog?')) {
      try {
        await axios.delete(`/api/admin/blogs/${blogId}`)
        setBlogs(blogs.filter(blog => blog.id !== blogId))
      } catch (error) {
        console.error('Failed to delete blog:', error)
      }
    }
  }

  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === 'all' || blog.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const getStatusBadge = (status) => {
    const statusConfig = {
      published: { color: 'bg-green-100 text-green-800', text: 'Published' },
      draft: { color: 'bg-yellow-100 text-yellow-800', text: 'Draft' },
      archived: { color: 'bg-gray-100 text-gray-800', text: 'Archived' }
    }
    
    const config = statusConfig[status] || statusConfig.draft
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${config.color}`}>
        {config.text}
      </span>
    )
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Blog Management</h1>
          <p className="text-gray-600">Manage all your blog posts</p>
        </div>
        <button className="btn-primary">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Create New Blog
        </button>
      </div>

      {/* Filters */}
      <div className="card">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
              Search Blogs
            </label>
            <input
              type="text"
              id="search"
              placeholder="Search by title..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input-field"
            />
          </div>
          <div>
            <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
              Status Filter
            </label>
            <select
              id="status"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="input-field"
            >
              <option value="all">All Status</option>
              <option value="published">Published</option>
              <option value="draft">Draft</option>
              <option value="archived">Archived</option>
            </select>
          </div>
        </div>
      </div>

      {/* Blogs Table */}
      <div className="card">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Author
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Published
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Views
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredBlogs.map((blog) => (
                <tr key={blog.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{blog.title}</div>
                      <div className="text-sm text-gray-500">{blog.slug}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {getStatusBadge(blog.status)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {blog.author}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {blog.publishedAt ? new Date(blog.publishedAt).toLocaleDateString() : 'Not published'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {blog.views.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleStatusChange(blog.id, blog.status === 'published' ? 'draft' : 'published')}
                        className="text-primary-600 hover:text-primary-900"
                      >
                        {blog.status === 'published' ? 'Unpublish' : 'Publish'}
                      </button>
                      <button className="text-blue-600 hover:text-blue-900">
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(blog.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {filteredBlogs.length === 0 && (
          <div className="text-center py-12">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900">No blogs found</h3>
            <p className="mt-1 text-sm text-gray-500">
              {searchTerm || statusFilter !== 'all' 
                ? 'Try adjusting your search or filter criteria.'
                : 'Get started by creating a new blog post.'
              }
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default BlogList

