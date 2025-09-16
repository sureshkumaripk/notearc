import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';
import NoteArcLogo from './NoteArcLogo';



export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-900 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <NoteArcLogo size="md" />
            </div>
            <p className="text-gray-600 mb-6 max-w-md">
              A modern note-taking and document management platform built with Next.js, featuring educational content, 
              tools, and insights for developers and content creators.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-orange-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-orange-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-orange-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-orange-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-600 mb-4">
              Get the latest articles and tutorials delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-lg transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Quick Links
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-orange-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-orange-600 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/tools" className="text-gray-600 hover:text-orange-600 transition-colors">
                  Tools
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-orange-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-orange-600 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div> */}

          {/* Resources
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/tutorials" className="text-gray-600 hover:text-orange-600 transition-colors">
                  Tutorials
                </Link>
              </li>
              <li>
                <Link href="/documentation" className="text-gray-600 hover:text-orange-600 transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/examples" className="text-gray-600 hover:text-orange-600 transition-colors">
                  Code Examples
                </Link>
              </li>
              <li>
                <Link href="/guides" className="text-gray-600 hover:text-orange-600 transition-colors">
                  Guides
                </Link>
              </li>
              <li>
                <Link href="/api" className="text-gray-600 hover:text-orange-600 transition-colors">
                  API Reference
                </Link>
              </li>
            </ul>
          </div> */}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © 2025 NoteArc. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-500 hover:text-orange-600 text-sm transition-colors">
              Privacy Policy  
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-orange-600 text-sm transition-colors">
              Terms And Condition
            </Link>
            {/* <Link href="/editor" className="text-gray-500 hover:text-orange-600 text-sm transition-colors">
              Editors Page
            </Link> */}
            {/* <Link href="/about" className="text-gray-500 hover:text-orange-600 text-sm transition-colors">
              About 
            </Link>  */}
             
          </div>
        </div>
      </div>
      
    </footer>
  );
}
