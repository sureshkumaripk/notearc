import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RelatedPosts from '@/components/RelatedPosts';
import { Calendar, Clock, User, Tag, Share2, BookOpen, Facebook, Twitter, Linkedin, Link as LinkIcon } from 'lucide-react';
import { apiService } from '@/services/api';

interface BlogPost {
  id: number;
  title: string;
  content: string;
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

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  let post: BlogPost | null = null;
  
  try {
    const response = await apiService.getBlogBySlug(slug);
    if (response.success && response.data) {
      post = response.data;
    }
  } catch (error) {
    console.error('Error fetching blog post:', error);
  }

  if (!post) {
    notFound();
  }

  // Extract headings for table of contents
  const headings = post.content.match(/<h2[^>]*id="([^"]*)"[^>]*>(.*?)<\/h2>/g)?.map(heading => {
    const idMatch = heading.match(/id="([^"]*)"/);
    const textMatch = heading.match(/>([^<]*)</);
    return {
      id: idMatch ? idMatch[1] : '',
      text: textMatch ? textMatch[1] : '',
      slug: idMatch ? idMatch[1] : ''
    };
  }) || [];

  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'Not published';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <main className="min-h-screen">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Table of Contents Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-lg p-6 sticky top-24">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Contents</h3>
              <nav className="space-y-3">
                {headings.map((heading) => (
                  <a
                    key={heading.id}
                    href={`#${heading.slug}`}
                    className="block text-gray-700 hover:text-orange-600 transition-colors text-sm"
                  >
                    {heading.text}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Article Content */}
          <div className="lg:col-span-3">
            <article className="max-w-4xl">
              {/* Article Header */}
              <div className="mb-8 text-center">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  {post.title}
                </h1>
                
                {/* Author & Metadata */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-600 mb-6">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <a href="#" className="text-orange-600 hover:text-orange-700 font-medium">
                      {post.author}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{formatDate(post.publishedAt)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime} min read</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4" />
                    <a href="#" className="text-orange-600 hover:text-orange-700 font-medium">
                      {post.category}
                    </a>
                  </div>
                </div>

                {/* Social Share Icons */}
                <div className="flex justify-center items-center gap-3 mb-8">
                  <a href="#" className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                    <Facebook className="h-4 w-4" />
                  </a>
                  <a href="#" className="w-8 h-8 bg-sky-500 rounded flex items-center justify-center text-white hover:bg-sky-600 transition-colors">
                    <Twitter className="h-4 w-4" />
                  </a>
                  <a href="#" className="w-8 h-8 bg-blue-700 rounded flex items-center justify-center text-white hover:bg-blue-800 transition-colors">
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a href="#" className="w-8 h-8 bg-orange-600 rounded flex items-center justify-center text-white hover:bg-orange-700 transition-colors">
                    <LinkIcon className="h-4 w-4" />
                  </a>
                </div>

                {/* TL;DR Section */}
                <div className="bg-orange-50 p-6 rounded-lg mb-8 text-left">
                  <h3 className="font-bold text-gray-900 mb-3">TL;DR:</h3>
                  <p className="text-lg text-gray-700 italic leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>

              {/* Author Bio */}
              <div className="mt-12 p-6 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">About the Author</h3>
                <p className="text-gray-600">
                  {post.author} is an experienced developer and content creator with expertise in modern web technologies. 
                  They specialize in Next.js, React, and frontend development, helping developers build better applications 
                  through tutorials and best practices.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>

      {/* Related Posts */}
      <RelatedPosts currentPost={post} />
      
      <Footer />
    </main>
  );
}
