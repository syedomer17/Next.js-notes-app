import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Note from "@/models/Note";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  await dbConnect();
  const note = await Note.findById(params.id);
  if (!note) return NextResponse.json({ message: "Note not found" }, { status: 404 });
  return NextResponse.json(note);
}

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  await dbConnect();
  const { title, content } = await req.json();
  const note = await Note.findByIdAndUpdate(params.id, { title, content }, { new: true });
  if (!note) return NextResponse.json({ message: "Note not found" }, { status: 404 });
  return NextResponse.json(note);
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  await dbConnect();
  await Note.findByIdAndDelete(params.id);
  return NextResponse.json({ message: "Note deleted" });
}
