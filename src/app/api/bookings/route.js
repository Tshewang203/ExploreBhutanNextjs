import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import clientPromise from '@/lib/mongodb';
import { authOptions } from '../auth/[...nextauth]/route';
import dbConnect from '@/lib/dbConnect';
import Booking from '@/models/Booking';
import TourPackage from '@/models/TourPackage';

export async function POST(request) {
  try {
    await dbConnect();
    const data = await request.json();

    // Validate required fields
    const requiredFields = ['firstName', 'lastName', 'email', 'nationality', 'passportNumber', 'tourPackage', 'arrivalDate', 'departureDate', 'adults'];
    const missingFields = requiredFields.filter(field => !data[field]);
    if (missingFields.length > 0) {
      return NextResponse.json({
        success: false,
        error: `Missing required fields: ${missingFields.join(', ')}`
      }, { status: 400 });
    }

    // Verify that the tour package exists
    const tourPackage = await TourPackage.findById(data.tourPackage);
    if (!tourPackage) {
      return NextResponse.json({
        success: false,
        error: 'Selected tour package not found'
      }, { status: 404 });
    }

    // Create the booking
    const booking = await Booking.create({
      ...data,
      arrivalDate: new Date(data.arrivalDate),
      departureDate: new Date(data.departureDate)
    });

    // Populate the tour package details in the response
    await booking.populate('tourPackage');

    return NextResponse.json({
      success: true,
      data: booking
    }, { status: 201 });
  } catch (error) {
    console.error('Booking error:', error);
    return NextResponse.json({
      success: false,
      error: error.message || 'Failed to create booking'
    }, { status: 500 });
  }
}

export async function GET() {
  try {
    await dbConnect();
    const bookings = await Booking.find({})
      .populate('tourPackage')
      .sort({ bookingDate: -1 });
    return NextResponse.json(bookings);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(request) {
  try {
    await dbConnect();
    const data = await request.json();
    const { id, ...updateData } = data;

    if (updateData.tourPackage) {
      // Verify that the tour package exists if it's being updated
      const tourPackage = await TourPackage.findById(updateData.tourPackage);
      if (!tourPackage) {
        return NextResponse.json(
          { error: 'Selected tour package not found' },
          { status: 404 }
        );
      }
    }

    const booking = await Booking.findByIdAndUpdate(
      id,
      {
        ...updateData,
        arrivalDate: updateData.arrivalDate ? new Date(updateData.arrivalDate) : undefined,
        departureDate: updateData.departureDate ? new Date(updateData.departureDate) : undefined
      },
      { new: true, runValidators: true }
    ).populate('tourPackage');

    if (!booking) {
      return NextResponse.json({ error: 'Booking not found' }, { status: 404 });
    }

    return NextResponse.json(booking);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    await dbConnect();
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    const booking = await Booking.findByIdAndDelete(id);
    if (!booking) {
      return NextResponse.json({ error: 'Booking not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Booking deleted successfully' });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}