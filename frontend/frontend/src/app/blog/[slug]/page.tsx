import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RelatedPosts from '@/components/RelatedPosts';
import { Calendar, Clock, User, Tag, Share2, BookOpen, Facebook, Twitter, Linkedin, Link as LinkIcon } from 'lucide-react';

// Sample blog data - in a real app, this would come from a CMS or API
const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Next.js 15: A Complete Guide",
    content: `
      <p>Next.js 15 brings exciting new features and improvements that make building modern web applications even more powerful and efficient. In this comprehensive guide, we'll explore everything you need to know to get started.</p>
      
      <h2 id="new-features">What's New in Next.js 15</h2>
      <p>Next.js 15 introduces several groundbreaking features that enhance developer experience and application performance. The most notable improvements include enhanced server components, improved routing, and better performance optimizations.</p>
      
      <p>The new version focuses on making React Server Components more accessible and powerful, while also improving the overall developer experience with better tooling and debugging capabilities.</p>
      
      <h2 id="installation">Installation and Setup</h2>
      <p>Getting started with Next.js 15 is straightforward. You can create a new project using the create-next-app command with the latest version:</p>
      
      <pre><code>npx create-next-app@latest my-app --typescript --tailwind --eslint</code></pre>
      
      <p>This command will set up a new Next.js 15 project with TypeScript, Tailwind CSS, and ESLint configured out of the box.</p>
      
      <h2 id="app-router">Understanding the App Router</h2>
      <p>The App Router is the recommended way to build applications in Next.js 15. It provides a more intuitive file-system based routing system with built-in support for layouts, loading states, and error boundaries.</p>
      
      <p>Key benefits of the App Router include:</p>
      <ul>
        <li><strong>File-system based routing:</strong> Create routes by adding files to your app directory</li>
        <li><strong>Built-in layouts:</strong> Share UI between routes while preserving state</li>
        <li><strong>Server Components:</strong> Reduce client-side JavaScript by default</li>
        <li><strong>Streaming:</strong> Show loading states and stream in content</li>
      </ul>
      
      <h2 id="server-components">Working with Server Components</h2>
      <p>Server Components are a fundamental feature in Next.js 15 that allows you to write UI that can be rendered and cached on the server. This approach reduces the amount of JavaScript sent to the client and improves performance.</p>
      
      <p>Here are some best practices for using Server Components:</p>
      <ol>
        <li><strong>Use Server Components by default:</strong> Only use Client Components when you need interactivity</li>
        <li><strong>Keep data fetching close to where it's used:</strong> Fetch data in the component that needs it</li>
        <li><strong>Leverage caching:</strong> Use Next.js caching mechanisms to improve performance</li>
        <li><strong>Handle loading and error states:</strong> Provide good user experience with proper loading and error handling</li>
      </ol>
      
      <h2 id="data-fetching">Data Fetching Patterns</h2>
      <p>Next.js 15 provides several patterns for data fetching that work seamlessly with Server Components:</p>
      
      <p><strong>Server Components:</strong> You can use async/await directly in Server Components to fetch data. This data is fetched on the server and the component is rendered with the data already available.</p>
      
      <p><strong>Route Handlers:</strong> Create API routes using the new Route Handlers API, which provides a more flexible way to handle HTTP requests compared to the older API Routes.</p>
      
      <h2 id="deployment">Deployment and Optimization</h2>
      <p>Deploying Next.js 15 applications is straightforward with platforms like Vercel, Netlify, or any Node.js hosting provider. The framework includes many optimizations out of the box:</p>
      
      <ul>
        <li>Automatic code splitting</li>
        <li>Image optimization</li>
        <li>Font optimization</li>
        <li>Static generation and server-side rendering</li>
      </ul>
      
      <p>By following these patterns and best practices, you'll be well on your way to building fast, scalable applications with Next.js 15.</p>
    `,
    excerpt: "Next.js 15 brings exciting new features and improvements. Learn how to get started with the latest version and build modern web applications with enhanced performance and developer experience.",
    author: "John Doe",
    date: "Aug 7, 2025",
    readTime: "10 min read",
    category: "Development",
    slug: "getting-started-nextjs-15-complete-guide",
    tags: ["next.js", "react", "web development", "tutorial", "javascript"]
  },
  {
    id: 2,
    title: "Building Modern UIs with Tailwind CSS",
    content: `
      <p>Tailwind CSS has revolutionized the way we build user interfaces. In this comprehensive guide, we'll explore how to create beautiful, responsive designs using Tailwind's utility-first approach.</p>
      
      <h2 id="utility-first">Understanding Utility-First CSS</h2>
      <p>Tailwind CSS takes a utility-first approach, which means you style elements by applying pre-defined utility classes rather than writing custom CSS. This approach provides several benefits:</p>
      
      <ul>
        <li>Faster development with pre-built components</li>
        <li>Consistent design system</li>
        <li>Smaller bundle sizes in production</li>
        <li>Better maintainability</li>
      </ul>
      
      <h2 id="responsive-design">Responsive Design Patterns</h2>
      <p>Creating responsive designs with Tailwind CSS is straightforward using the responsive prefixes. Here are some common patterns:</p>
      
      <p>Use responsive prefixes like <code>sm:</code>, <code>md:</code>, <code>lg:</code>, and <code>xl:</code> to apply styles at different breakpoints. For example, <code>md:flex</code> will only apply the flex display property on medium screens and larger.</p>
      
      <h2 id="components">Building Reusable Components</h2>
      <p>While Tailwind encourages utility-first development, you can still create reusable components using the <code>@apply</code> directive or by extracting common patterns into component classes.</p>
      
      <p>This approach gives you the best of both worlds: the flexibility of utility classes and the reusability of component-based development.</p>
    `,
    excerpt: "Discover how to create beautiful, responsive user interfaces using Tailwind CSS. From basic styling to advanced components, learn the best practices for modern web design.",
    author: "Jane Smith",
    date: "Aug 6, 2025",
    readTime: "8 min read",
    category: "Design",
    slug: "building-modern-uis-tailwind-css",
    tags: ["tailwind css", "css", "design", "ui/ux", "frontend"]
  },
  {
    id: 3,
    title: "TypeScript Best Practices for React Developers",
    content: `
      <p>TypeScript has become an essential tool for building robust React applications. In this guide, we'll explore the best practices that will help you write more maintainable and type-safe code.</p>
      
      <h2 id="type-definitions">Proper Type Definitions</h2>
      <p>One of the most important aspects of TypeScript in React is defining proper types for your components and props. Here are some key practices:</p>
      
      <ul>
        <li>Always define interfaces for your component props</li>
        <li>Use generic types for reusable components</li>
        <li>Leverage utility types like Partial, Pick, and Omit</li>
        <li>Define strict types for API responses</li>
      </ul>
      
      <h2 id="component-patterns">Component Patterns</h2>
      <p>There are several patterns you can use to make your React components more type-safe:</p>
      
      <p><strong>Function Components:</strong> Use React.FC for function components, but be aware of its limitations with generic props.</p>
      
      <p><strong>Generic Components:</strong> Create flexible components that can work with different data types while maintaining type safety.</p>
      
      <h2 id="state-management">State Management with TypeScript</h2>
      <p>When working with state management libraries like Redux or Zustand, TypeScript can help ensure type safety across your entire application state.</p>
      
      <p>Define strict types for your state, actions, and selectors to catch errors at compile time rather than runtime.</p>
    `,
    excerpt: "Learn essential TypeScript patterns and best practices that will make your React applications more robust and maintainable.",
    author: "Mike Johnson",
    date: "Aug 5, 2025",
    readTime: "13 min read",
    category: "Development",
    slug: "typescript-best-practices-react-developers",
    tags: ["typescript", "react", "development", "best practices", "frontend"]
  },
  {
    id: 4,
    title: "SEO Optimization for Next.js Applications",
    content: `
      <p>Search Engine Optimization is crucial for any web application. Next.js provides excellent built-in SEO features that can help your application rank better in search results.</p>
      
      <h2 id="meta-tags">Meta Tags and Head Management</h2>
      <p>Next.js provides several ways to manage meta tags and head elements:</p>
      
      <ul>
        <li>Use the Head component for dynamic meta tags</li>
        <li>Configure static metadata in layout files</li>
        <li>Implement Open Graph tags for social sharing</li>
        <li>Add structured data for rich snippets</li>
      </ul>
      
      <h2 id="performance">Performance Optimization</h2>
      <p>Performance is a key factor in SEO rankings. Next.js provides several optimization features:</p>
      
      <p><strong>Image Optimization:</strong> Use the Next.js Image component for automatic optimization and lazy loading.</p>
      
      <p><strong>Code Splitting:</strong> Next.js automatically splits your code into smaller chunks for faster loading.</p>
      
      <h2 id="structured-data">Structured Data</h2>
      <p>Implementing structured data helps search engines understand your content better and can lead to rich snippets in search results.</p>
      
      <p>Use JSON-LD format to add structured data to your pages, including information about articles, products, and organizations.</p>
    `,
    excerpt: "Master the art of SEO optimization for your Next.js applications. Learn about meta tags, structured data, and performance optimization.",
    author: "Sarah Wilson",
    date: "Jul 29, 2025",
    readTime: "7 min read",
    category: "SEO",
    slug: "seo-optimization-nextjs-applications",
    tags: ["seo", "next.js", "optimization", "meta tags", "structured data"]
  },
  {
    id: 5,
    title: "State Management in React: Redux vs Zustand",
    content: `
      <p>Choosing the right state management solution is crucial for building scalable React applications. In this comparison, we'll explore Redux and Zustand to help you make an informed decision.</p>
      
      <h2 id="redux-overview">Redux Overview</h2>
      <p>Redux is a predictable state container for JavaScript applications. It follows a strict unidirectional data flow and is well-suited for large applications with complex state requirements.</p>
      
      <ul>
        <li>Predictable state updates</li>
        <li>Excellent developer tools</li>
        <li>Large ecosystem and community</li>
        <li>Steep learning curve</li>
      </ul>
      
      <h2 id="zustand-overview">Zustand Overview</h2>
      <p>Zustand is a small, fast, and scalable state management solution. It has a minimal API and is easy to learn, making it perfect for smaller to medium-sized applications.</p>
      
      <p><strong>Key Features:</strong></p>
      <ul>
        <li>Simple and intuitive API</li>
        <li>No boilerplate code</li>
        <li>TypeScript support out of the box</li>
        <li>Small bundle size</li>
      </ul>
      
      <h2 id="comparison">When to Use Each</h2>
      <p><strong>Choose Redux when:</strong></p>
      <ul>
        <li>Building large, complex applications</li>
        <li>Need advanced debugging tools</li>
        <li>Require strict state management patterns</li>
        <li>Working with a team familiar with Redux</li>
      </ul>
      
      <p><strong>Choose Zustand when:</strong></p>
      <ul>
        <li>Building smaller to medium applications</li>
        <li>Want minimal boilerplate</li>
        <li>Need quick setup and learning</li>
        <li>Prefer simplicity over strict patterns</li>
      </ul>
    `,
    excerpt: "Compare different state management solutions for React applications. Understand when to use Redux, Zustand, or other alternatives.",
    author: "Alex Brown",
    date: "Jul 28, 2025",
    readTime: "6 min read",
    category: "Development",
    slug: "state-management-react-redux-vs-zustand",
    tags: ["react", "redux", "zustand", "state management", "frontend"]
  },
  {
    id: 6,
    title: "Performance Optimization Techniques for Web Apps",
    content: `
      <p>Performance optimization is crucial for providing a great user experience. In this comprehensive guide, we'll explore various techniques to improve your web application's performance.</p>
      
      <h2 id="code-splitting">Code Splitting</h2>
      <p>Code splitting is a technique that allows you to split your code into smaller chunks that can be loaded on demand. This reduces the initial bundle size and improves loading times.</p>
      
      <ul>
        <li>Route-based code splitting</li>
        <li>Component-based code splitting</li>
        <li>Dynamic imports</li>
        <li>Preloading strategies</li>
      </ul>
      
      <h2 id="lazy-loading">Lazy Loading</h2>
      <p>Lazy loading is a technique that defers the loading of non-critical resources until they are needed. This can significantly improve initial page load times.</p>
      
      <p><strong>Image Lazy Loading:</strong> Use the loading="lazy" attribute or Intersection Observer API to lazy load images.</p>
      
      <p><strong>Component Lazy Loading:</strong> Use React.lazy() and Suspense to lazy load components.</p>
      
      <h2 id="caching">Caching Strategies</h2>
      <p>Implementing proper caching strategies can dramatically improve performance by reducing the number of network requests.</p>
      
      <p><strong>Browser Caching:</strong> Set appropriate cache headers for static assets.</p>
      
      <p><strong>Service Worker Caching:</strong> Use service workers to cache API responses and static assets.</p>
      
      <h2 id="optimization-tools">Performance Monitoring</h2>
      <p>Regular monitoring of your application's performance is essential for identifying and fixing performance issues.</p>
      
      <p>Use tools like Lighthouse, WebPageTest, and browser DevTools to measure and analyze your application's performance.</p>
    `,
    excerpt: "Learn advanced techniques to optimize the performance of your web applications. From code splitting to lazy loading, discover strategies that will make your apps faster.",
    author: "Emily Davis",
    date: "Jul 21, 2025",
    readTime: "18 min read",
    category: "Performance",
    slug: "performance-optimization-techniques-web-apps",
    tags: ["performance", "optimization", "web development", "lazy loading", "caching"]
  }
];

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);

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
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
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
      <RelatedPosts currentPost={post} allPosts={blogPosts} />
      
      <Footer />
    </main>
  );
}
