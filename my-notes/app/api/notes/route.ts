import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Note from "@/models/Note";

export async function GET() {
  await dbConnect();
  const notes = await Note.find().sort({ createdAt: -1 });
  return NextResponse.json(notes);
}

export async function POST(req: NextRequest) {
  await dbConnect();
  const { title, content } = await req.json();
  const note = await Note.create({ title, content });
  return NextResponse.json(note, { status: 201 });
}
