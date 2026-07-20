// app/api/blogs/route.js
import { NextResponse } from 'next/server';
import connectDB from '@/lib/db'
import Article from '@/models/BlogSchema';// Path to your Mongoose model

// 1. GET ALL BLOGS
export async function GET() {
  try {   
    await connectDB();
    
    // Fetch all articles, sorted by newest first
    const blogs = await Article.find({}).sort({ date: -1 });
    
    return NextResponse.json(
      { success: true, count: blogs.length, data: blogs },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Failed to retrieve articles.', error: error.message },
      { status: 500 }
    );
  }
}

// 2. CREATE A NEW BLOG
export async function POST(request) {
  try {
    await connectDB();
    
    // In Next.js, you parse the incoming JSON stream using request.json()
    const body = await request.json();
    
    const newBlog = new Article(body);
    const savedBlog = await newBlog.save();
    
    return NextResponse.json(
      { success: true, message: 'Article created successfully.', data: savedBlog },
      { status: 201 }
    );
  } catch (error) {
    // Handle MongoDB duplicate key errors (e.g., unique constraint on id or slug)
    if (error.code === 11000) {
      return NextResponse.json(
        { success: false, message: 'An article with this ID or Slug already exists.' },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, message: 'Failed to create article.', error: error.message },
      { status: 400 }
    );
  }
}