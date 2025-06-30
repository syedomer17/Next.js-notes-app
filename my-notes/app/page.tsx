import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Quick Notes</h1>
      {/* <ThemeToggle /> */}
      <p className="text-gray-600 mb-8">
         Start by creating a new note or exploring your existing notes.
      </p>
      <div className="flex gap-4">
        <Link
          href="/notes"
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-500"
        >
          View Notes
        </Link>
        <Link
          href="/notes/new"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500"
        >
          + Add Note
        </Link>
      </div>
    </main>
  );
}
