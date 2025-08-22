import Link from 'next/link';
import { TrendingUp, BookOpen, Mail } from 'lucide-react';

const popularPosts = [
  {
    title: "Think Multiplication: A Smarter Way to Learn Division",
    slug: "think-multiplication-smarter-way-learn-division",
    readTime: "10 min read"
  },
  {
    title: "From Counting to Adding: What Most Parents Miss",
    slug: "from-counting-to-adding-what-parents-miss",
    readTime: "8 min read"
  },
  {
    title: "How Rekenreks Build Number Sense in Early Learners",
    slug: "how-rekenreks-build-number-sense-early-learners",
    readTime: "7 min read"
  }
];

const categories = [
  { name: "Pedagogy", count: 4, color: "bg-blue-100 text-blue-800" },
  { name: "Tools", count: 1, color: "bg-green-100 text-green-800" },
  { name: "ADHD", count: 1, color: "bg-purple-100 text-purple-800" },
  { name: "Dyscalculia", count: 1, color: "bg-orange-100 text-orange-800" },
  { name: "Math Games", count: 1, color: "bg-pink-100 text-pink-800" }
];

export default function BlogSidebar() {
  return (
    <div className="space-y-8">
      {/* Popular Posts */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-blue-600" />
          Popular Posts
        </h3>
        <div className="space-y-4">
          {popularPosts.map((post, index) => (
            <div key={index} className="border-b border-gray-100 pb-3 last:border-b-0">
              <Link 
                href={`/blog/${post.slug}`}
                className="text-sm font-medium text-gray-900 hover:text-blue-600 transition-colors line-clamp-2"
              >
                {post.title}
              </Link>
              <p className="text-xs text-gray-500 mt-1">{post.readTime}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-green-600" />
          Categories
        </h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={`/blog?category=${category.name}`}
              className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <span className="text-gray-700">{category.name}</span>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${category.color}`}>
                {category.count}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6 border border-blue-200">
        <div className="text-center">
          <Mail className="h-8 w-8 text-blue-600 mx-auto mb-3" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Stay Updated
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Get the latest math teaching tips and resources delivered to your inbox.
          </p>
          <form className="space-y-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Quick Links */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
        <div className="space-y-2">
          <Link href="/tools" className="block text-gray-600 hover:text-blue-600 transition-colors">
            Math Tools
          </Link>
          <Link href="/worksheets" className="block text-gray-600 hover:text-blue-600 transition-colors">
            Free Worksheets
          </Link>
          <Link href="/videos" className="block text-gray-600 hover:text-blue-600 transition-colors">
            Video Lessons
          </Link>
          <Link href="/contact" className="block text-gray-600 hover:text-blue-600 transition-colors">
            Get Help
          </Link>
        </div>
      </div>
    </div>
  );
}

