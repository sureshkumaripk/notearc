'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Calendar, Clock, User, Tag } from 'lucide-react';
import { apiService } from '../services/api';

interface Blog {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  publishedAt: string | null;
  
  readTime: number;
  category: string;
  slug: string;
  featuredImage?: string;
  tags?: string[];
  viewCount?: number;
  createdAt?: string;
}

export default function BlogGrid() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const response = await apiService.getBlogs({ limit: 6 });
        // Handle the backend API response structure
        if (response.success && response.data && response.data.blogs) {
          setBlogs(response.data.blogs);
        } else {
          throw new Error('Invalid response format from API');
        }
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
        setError(errorMessage);
        console.error('Error fetching blogs:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'Not published';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading blogs...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <p className="text-red-600">Error loading blogs: {error}</p>
          </div>
        </div>
      </section>
    );
  }

  const featuredBlog = blogs[0];
  const regularBlogs = blogs.slice(1);
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Featured Post */}
        {featuredBlog && (
          <div className="mb-16">
            <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-800 mb-4">
                    {featuredBlog.category}
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                    <Link href={`/blog/${featuredBlog.slug}`} className="hover:text-orange-600 transition-colors">
                      {featuredBlog.title}
                    </Link>
                  </h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {featuredBlog.excerpt}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      {featuredBlog.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {formatDate(featuredBlog.publishedAt)}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      {featuredBlog.readTime} min read
                    </div>
                  </div>
                  <Link
                    href={`/blog/${featuredBlog.slug}`}
                    className="inline-flex items-center px-6 py-3 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700 transition-colors"
                  >
                    Read Full Article
                  </Link>
                </div>
                <div className="bg-gradient-to-br from-orange-400 to-orange-500 rounded-xl h-64 lg:h-80 flex items-center justify-center">
                  {featuredBlog.featuredImage ? (
                    <img 
                      src={featuredBlog.featuredImage} 
                      alt={featuredBlog.title}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  ) : (
                    <span className="text-white text-4xl font-bold">📚</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Regular Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularBlogs.map(blog => (
            <article key={blog.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-48 flex items-center justify-center">
                {blog.featuredImage ? (
                  <img 
                    src={blog.featuredImage} 
                    alt={blog.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-4xl">📖</span>
                )}
              </div>
              <div className="p-6">
                <div className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800 mb-3">
                  {blog.category}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  <Link href={`/blog/${blog.slug}`} className="hover:text-orange-600 transition-colors">
                    {blog.title}
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {blog.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    {blog.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {blog.readTime} min read
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Posts Button */}
        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center px-8 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
          >
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  );
}
