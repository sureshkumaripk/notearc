'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, Filter, Calendar, Clock, User, Tag } from 'lucide-react';

// Extended blog data with more posts
const allBlogPosts = [
  {
    id: 1,
    title: "Think Multiplication: A Smarter Way to Learn Division",
    excerpt: "Division facts can be tricky for many kids, but there's a simple trick: teach them to 'think multiplication.' By leveraging the close relations between multiplication and division, children can develop a deeper understanding of both operations.",
    author: "Roopesh Shenoy",
    date: "Aug 7, 2025",
    readTime: "10 min read",
    category: "Pedagogy",
    slug: "think-multiplication-smarter-way-learn-division",
    tags: ["division", "multiplication", "strategies"]
  },
  {
    id: 2,
    title: "From Counting to Adding: What Most Parents Miss",
    excerpt: "The journey from counting to addition is more complex than it seems. Discover the crucial steps that many parents overlook when teaching their children basic arithmetic.",
    author: "Roopesh Shenoy",
    date: "Aug 6, 2025",
    readTime: "8 min read",
    category: "Pedagogy",
    slug: "from-counting-to-adding-what-parents-miss",
    tags: ["counting", "addition", "early math"]
  },
  {
    id: 3,
    title: "How to Reduce Math Cognitive Load Without Dumbing It Down",
    excerpt: "Learn effective strategies to simplify complex math concepts while maintaining their educational value. Discover how to make challenging topics accessible without losing depth.",
    author: "Roopesh Shenoy",
    date: "Aug 5, 2025",
    readTime: "13 min read",
    category: "Pedagogy",
    slug: "reduce-math-cognitive-load-without-dumbing-down",
    tags: ["cognitive load", "teaching strategies", "complex concepts"]
  },
  {
    id: 4,
    title: "How Rekenreks Build Number Sense in Early Learners",
    excerpt: "Discover how this ancient counting tool can transform your child's understanding of numbers and basic operations. Learn practical activities and games to use with rekenreks.",
    author: "Roopesh Shenoy",
    date: "Jul 29, 2025",
    readTime: "7 min read",
    category: "Tools",
    slug: "how-rekenreks-build-number-sense-early-learners",
    tags: ["rekenreks", "number sense", "counting tools"]
  },
  {
    id: 5,
    title: "Number Paths vs Number Lines – Which One For Your Child?",
    excerpt: "Understanding the difference between these two visual representations can make a huge impact on learning. Discover when and how to use each tool effectively.",
    author: "Roopesh Shenoy",
    date: "Jul 28, 2025",
    readTime: "6 min read",
    category: "Pedagogy",
    slug: "number-paths-vs-number-lines-which-one-for-child",
    tags: ["number paths", "number lines", "visual learning"]
  },
  {
    id: 6,
    title: "Task Switching in Math: Helping ADHD Kids Jump Between Concepts",
    excerpt: "Practical strategies to help children with ADHD navigate the challenges of switching between different math concepts. Learn how to create smooth transitions and maintain focus.",
    author: "Roopesh Shenoy",
    date: "Jul 21, 2025",
    readTime: "18 min read",
    category: "ADHD",
    slug: "task-switching-math-helping-adhd-kids",
    tags: ["ADHD", "task switching", "focus strategies"]
  },
  {
    id: 7,
    title: "Why Skip Counting Can Be a Lifeline for Dyscalculia Learners",
    excerpt: "Discover how skip counting can provide a crucial foundation for children with dyscalculia. Learn specific techniques and activities that make this skill accessible.",
    author: "Roopesh Shenoy",
    date: "Jul 17, 2025",
    readTime: "18 min read",
    category: "Dyscalculia",
    slug: "why-skip-counting-can-be-lifeline-dyscalculia-learners",
    tags: ["dyscalculia", "skip counting", "learning disabilities"]
  },
  {
    id: 8,
    title: "10 Low-Prep Math Games for Parents Too Tired to Teach",
    excerpt: "When you're exhausted but want to keep your child learning, these simple math games require minimal preparation and maximum engagement.",
    author: "Roopesh Shenoy",
    date: "Jul 16, 2025",
    readTime: "23 min read",
    category: "Math Games",
    slug: "10-low-prep-math-games-parents-too-tired-to-teach",
    tags: ["math games", "low prep", "parenting"]
  }
];

const categories = ["All", "Pedagogy", "Tools", "ADHD", "Dyscalculia", "Math Games"];

export default function BlogListing() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Filter posts based on search and category
  const filteredPosts = allBlogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentPage(1);
  };

  return (
    <div className="space-y-8">
      {/* Search and Filter */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search */}
          <form onSubmit={handleSearch} className="flex-1 relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
          </form>
          
          {/* Category Filter */}
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-gray-400" />
            <select
              value={selectedCategory}
              onChange={(e) => {
                setSelectedCategory(e.target.value);
                setCurrentPage(1);
              }}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="text-gray-600">
        Showing {filteredPosts.length} of {allBlogPosts.length} articles
      </div>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {currentPosts.map(post => (
          <article key={post.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-48 flex items-center justify-center">
              <span className="text-4xl">📖</span>
            </div>
            <div className="p-6">
              <div className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-3">
                {post.category}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                <Link href={`/blog/${post.slug}`} className="hover:text-blue-600 transition-colors">
                  {post.title}
                </Link>
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.slice(0, 3).map(tag => (
                  <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  {post.author}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center space-x-2">
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
          >
            Previous
          </button>
          
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-4 py-2 rounded-lg ${
                currentPage === page
                  ? 'bg-blue-600 text-white'
                  : 'border border-gray-300 hover:bg-gray-50'
              }`}
            >
              {page}
            </button>
          ))}
          
          <button
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

