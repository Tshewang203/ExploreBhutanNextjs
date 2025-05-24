import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import clientPromise from '@/lib/mongodb';
import { authOptions } from '../auth/[...nextauth]/route';

export async function GET() {
  try {
    // Only check auth for admin routes
    const session = await getServerSession(authOptions);
    
    const client = await clientPromise;
    const db = client.db("explorebhutan");
    
    const messages = await db.collection("contacts")
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    return NextResponse.json(messages);
  } catch (error) {
    console.error('Fetch error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch messages' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const message = await request.json();
    
    // Validate required fields
    if (!message.name || !message.email || !message.message) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("explorebhutan");
    
    const messageData = {
      ...message,
      status: 'unread',
      createdAt: new Date(),
      updatedAt: new Date()
    };

    await db.collection("contacts").insertOne(messageData);

    return NextResponse.json({ 
      success: true, 
      message: 'Message sent successfully' 
    });

  } catch (error) {
    console.error('Contact error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send message' },
      { status: 500 }
    );
  }
}