import { NextResponse } from "next/server";
import mongoose from "mongoose";
import connectDB from "@/lib/db";

export async function GET() {
  try {
    // 1. Trigger the database connection utility
    await connectDB();

    // 2. Extract the connection readyState from Mongoose
    const stateId = mongoose.connection.readyState;
    
    // Mongoose states: 0 = disconnected, 1 = connected, 2 = connecting, 3 = disconnecting
    const states = {
      0: "Disconnected ❌",
      1: "Connected Successfully! 🚀",
      2: "Connecting ⏳",
      3: "Disconnecting ⚠️",
    };

    // 3. Return a successful payload containing diagnostic details
    return NextResponse.json({
      status: "success",
      connectionState: states[stateId] || "Unknown",
      diagnostics: {
        host: mongoose.connection.host,
        databaseName: mongoose.connection.name,
        port: mongoose.connection.port || "Default (27017)",
      }
    }, { status: 200 });

  } catch (error) {
    // 4. Handle connection crashes or credential rejections safely
    console.log(error);
    
    return NextResponse.json(
      {
        status: "error",
        message: "Failed to establish a database connection.",
        error: error.message,
      },
      { status: 500 }
    );
  }

    // return NextResponse.json({
    //     mess : "hello"
    // })
}