"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

interface Note {
  _id: string;
  title: string;
  content: string;
}

export default function NoteCard({ note }: { note: Note }) {
  const router = useRouter();
  const [confirmOpen, setConfirmOpen] = useState(false);

  const handleDelete = async () => {
    await fetch(`/api/notes/${note._id}`, { method: "DELETE" });
    router.refresh();
  };

  return (
    <div className="bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 p-4 rounded-lg shadow relative transition hover:shadow-lg">
      <h3 className="text-lg font-semibold mb-2">{note.title}</h3>
      <p className="text-gray-600 dark:text-gray-300 whitespace-pre-wrap mb-4">{note.content}</p>
      <div className="flex gap-2">
        <button
          onClick={() => setConfirmOpen(true)}
          className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-400"
        >
          Delete
        </button>
        <Link
          href={`/notes/${note._id}/edit`}
          className="bg-gray-300 dark:bg-zinc-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded text-sm hover:bg-gray-400 dark:hover:bg-zinc-600"
        >
          Edit
        </Link>
      </div>

      {confirmOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-zinc-800 p-6 rounded max-w-sm w-full">
            <h2 className="text-lg font-semibold mb-4">Confirm Delete</h2>
            <p className="mb-4">Delete this note?</p>
            <div className="flex gap-2">
              <button
                onClick={handleDelete}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Yes, Delete
              </button>
              <button
                onClick={() => setConfirmOpen(false)}
                className="bg-gray-200 dark:bg-zinc-700 px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
