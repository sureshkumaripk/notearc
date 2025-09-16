import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogListing from '@/components/BlogListing';
import BlogSidebar from '@/components/BlogSidebar';

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Monster Math Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover proven strategies, innovative tools, and expert insights to make math learning 
              engaging and effective for every child.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <BlogListing />
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

