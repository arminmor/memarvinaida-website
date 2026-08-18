import { connectDB } from '@/lib/mongodb';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, relation, message } = body;

    if (!name || !message) {
      return NextResponse.json(
        { error: 'Name and message are required' },
        { status: 400 }
      );
    }

    const db = await connectDB();
    const booklet = db.collection('booklet');

    const result = await booklet.insertOne({
      name,
      relation: relation || '',
      message,
      createdAt: new Date(),
    });

    return NextResponse.json({ success: true, id: result.insertedId });
  } catch (error) {
    console.error('Error submitting note:', error);
    return NextResponse.json(
      { error: 'Failed to submit note' },
      { status: 500 }
    );
  }
}
