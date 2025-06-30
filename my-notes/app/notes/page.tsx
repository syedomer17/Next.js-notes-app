// app/notes/page.tsx
import Link from "next/link";
import NoteCard from "@/components/NoteCard";
import ThemeToggle from "@/components/ThemeToggle";

interface Note {
  _id: string;
  title: string;
  content: string;
}

export const dynamic = "force-dynamic";

export default async function NotesPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/notes`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch notes: ${res.status} ${res.statusText}`);
  }

  const notes: Note[] = await res.json();

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Your Notes</h1>
        <Link
          href="/notes/new"
          className="bg-brand text-white px-4 py-2 rounded-md font-medium hover:bg-indigo-500 transition"
        >
          + Add Note
        </Link>
      </header>
      {notes.length === 0 ? (
        <div className="text-center py-16 text-gray-500">
          No notes yet. Click &quot;+ Add Note&quot; to create one!
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {notes.map((note) => (
            <NoteCard key={note._id} note={note} />
          ))}
        </div>
      )}
      <ThemeToggle />
    </main>
  );
}
