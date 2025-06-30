"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function NewNotePage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("/api/notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content }),
    });
    router.push("/notes");
    router.refresh();
  };

  return (
    <main className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Add New Note</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Title</label>
          <input
            type="text"
            className="w-full border-2 border-gray-200 dark:border-zinc-700 rounded-md p-3 bg-gray-50 dark:bg-zinc-700 focus:border-brand focus:outline-none"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Content</label>
          <textarea
            className="w-full border-2 border-gray-200 dark:border-zinc-700 rounded-md p-3 bg-gray-50 dark:bg-zinc-700 focus:border-brand focus:outline-none min-h-[120px]"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <div className="flex justify-end gap-3">
          <button
            type="button"
            onClick={() => router.back()}
            className="bg-gray-100 dark:bg-zinc-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-zinc-600 transition"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-brand text-white px-4 py-2 rounded-md hover:bg-indigo-500 transition"
          >
            Save Note
          </button>
        </div>
      </form>
    </main>
  );
}
