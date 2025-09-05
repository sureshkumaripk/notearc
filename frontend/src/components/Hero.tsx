import Link from 'next/link';
import NoteArcLogo from './NoteArcLogo';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-orange-50 via-white to-orange-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          {/* <div className="flex justify-center mb-6">
            <NoteArcLogo size="lg" />
          </div> */}
          {/* <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Welcome to */}
            {/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500"> NoteArc</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 leading-relaxed">
            A modern note-taking and document management platform built with Next.js, featuring educational content, 
            tools, and insights for developers and content creators. */}
          {/* </p> */}
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center items-center"> */}
           {/* <Link
              href="/try-free"
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Try for Free
            </Link>  */}
            {/* <Link
              href="/blog"
              className="bg-white hover:bg-gray-50 text-orange-600 border-2 border-orange-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Explore Articles
            </Link> */}
          </div>
        {/* </div>
        
        {/* Stats */}
        {/* <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">500+</div>
            <div className="text-gray-600">Articles Published</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-500 mb-2">50K+</div>
            <div className="text-gray-600">Users Helped</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-400 mb-2">95%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
        </div> */} 
      </div>
    </section>
  );
}
