import { connectDB, collectionName } from '@/lib/mongodb';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const db = await connectDB();
    const booklet = db.collection(collectionName);

    const notes = await booklet
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    return NextResponse.json({ notes });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error('Error fetching notes:', message);
    return NextResponse.json(
      { error: 'Failed to fetch notes', details: message },
      { status: 500 }
    );
  }
}
