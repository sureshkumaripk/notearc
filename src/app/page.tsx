import Header from '@/components/Header';
import BlogGrid from '@/components/BlogGrid';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <BlogGrid />
      <Footer />
    </main>
  );
}
