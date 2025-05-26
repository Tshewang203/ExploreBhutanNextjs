import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import TourPackage from '@/models/TourPackage';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

// GET all tour packages
export async function GET() {
  try {
    await dbConnect();
    const packages = await TourPackage.find({}).sort({ createdAt: -1 });
    return NextResponse.json(packages);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// POST new tour package
export async function POST(request) {
  try {
    // Check authentication
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await dbConnect();
    const data = await request.json();
    
    const tourPackage = await TourPackage.create(data);
    return NextResponse.json(tourPackage, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// PUT update tour package
export async function PUT(request) {
  try {
    // Check authentication
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await dbConnect();
    const data = await request.json();
    const { id, ...updateData } = data;
    
    const tourPackage = await TourPackage.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true }
    );
    
    if (!tourPackage) {
      return NextResponse.json({ error: 'Tour package not found' }, { status: 404 });
    }
    
    return NextResponse.json(tourPackage);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// DELETE tour package
export async function DELETE(request) {
  try {
    // Check authentication
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await dbConnect();
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    const tourPackage = await TourPackage.findByIdAndDelete(id);
    
    if (!tourPackage) {
      return NextResponse.json({ error: 'Tour package not found' }, { status: 404 });
    }
    
    return NextResponse.json({ message: 'Tour package deleted successfully' });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
} 