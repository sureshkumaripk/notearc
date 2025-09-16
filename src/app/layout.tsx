import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NoteArc - Modern Note-Taking Platform",
  description: "A modern note-taking and document management platform built with Next.js, featuring educational content, tools, and insights for developers and content creators.",
  keywords: "note-taking, document management, next.js, web development, content creation, modern web",
  authors: [{ name: "NoteArc Team" }],
  openGraph: {
    title: "NoteArc - Modern Note-Taking Platform",
    description: "A modern note-taking and document management platform built with Next.js, featuring educational content, tools, and insights.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <div className="min-h-screen bg-gray-50">
          {children}
        </div>
      </body>
    </html>
  );
}
