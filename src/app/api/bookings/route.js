import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import clientPromise from '@/lib/mongodb';
import { authOptions } from '../auth/[...nextauth]/route';

export async function POST(request) {
  try {
    const booking = await request.json();
    const client = await clientPromise;
    const db = client.db("explorebhutan");
    
    const bookingData = {
      ...booking,
      bookingRef: `BT${Date.now()}${Math.floor(Math.random() * 1000)}`,
      status: 'pending',
      createdAt: new Date(),
      updatedAt: new Date()
    };

    const result = await db.collection("bookings").insertOne(bookingData);

    return NextResponse.json({ 
      success: true, 
      message: 'Booking created successfully',
      bookingRef: bookingData.bookingRef
    });

  } catch (error) {
    console.error('Booking error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to create booking' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    // Only check auth for admin routes
    const session = await getServerSession(authOptions);
    
    const client = await clientPromise;
    const db = client.db("explorebhutan");
    
    const bookings = await db.collection("bookings")
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    return NextResponse.json(bookings);
  } catch (error) {
    console.error('Fetch error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch bookings' },
      { status: 500 }
    );
  }
}