import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
// Add this to your page or route file

export const runtime = 'nodejs';

export async function GET() {
  try {
    // 1. Establish/Reuse connection to Atlas
    await dbConnect();

    // 2. Query your database or model here
    // Example: const users = await User.find({});

    return NextResponse.json({ 
      success: true, 
      message: 'Successfully connected to MongoDB Atlas!' 
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message }, 
      { status: 500 }
    );
  }
}
