import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import dbConnect from '@/lib/dbConnect'; // ensure this utility exists
import Registration from '@/models/Registration';

export async function POST(req) {
  try {
    await dbConnect();

    const body = await req.json();

    // Check if user already exists using email only
    const existingUser = await Registration.findOne({ email: body.email });
    if (existingUser) {
      return NextResponse.json(
        { error: 'User already exists' },
        { status: 400 }
      );
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(body.password, 10);

    // Create new user
    const newUser = await Registration.create({
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      password: hashedPassword,
    });

    // Convert to plain object and remove password before returning
    const user = newUser.toObject();
    delete user.password;

    return NextResponse.json(
      { message: 'Registration successful', user },
      { status: 201 }
    );
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { error: 'Registration failed' },
      { status: 500 }
    );
  }
}
