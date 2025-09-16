"use client";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useState, useEffect, useState as ReactUseState } from "react";

export default function EditPage() {
  const [header, setHeader] = useState("Hi Hintword!");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p> Welcome to hintword -Thanks for trying out HintWord - Your AI powered notrpad for smarter writing , brainstroming and productivity   </p>",
    immediatelyRender: false, 
  });

  if (!isMounted) {
    return <p className="p-4">Loading editor...</p>;
  }

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <div className="max-w-3xl mx-auto space-y-6">
        {/* Editable Header */}
        <input
          type="text"
          value={header}
          onChange={(e) => setHeader(e.target.value)}
          placeholder="Hi Hintword!"
          className="w-full p-3 text-2xl font-bold border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Rich Text Body Editor */}
        <div className="p-4 bg-white border rounded-lg shadow-sm">
          {editor ? (
            <EditorContent editor={editor} />
          ) : (
            <p>Welcome to  Hintword! Thanks for  Trying out 
              your AI-powered notepad for smarter writing, brainstorming, and productivity.
              Whether you're capturing quick ideas, summarizing a meeting, or drafting long-form content, 
              Hintword is here to assist with intelligent suggestions and seamless formatting. </p>
          )}
        </div>

        {/* Preview Section */}
        {/* <div className="p-4 bg-white border rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Preview</h2>
          <h1 className="text-2xl font-bold mb-4">{header}</h1>
          <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: editor?.getHTML() || "" }}
          /> */}
        {/* </div> */}
      </div>
    </div>
  );
}
