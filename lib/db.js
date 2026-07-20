// ====================================================================
// SECTION 2: ARCHITECTURE-LEVEL MONGODB CONNECTION PIPELINE UTILITY
// Resolves local network SRV lookup loops & manages connection caching
// ====================================================================

import dns from "node:dns";
import mongoose from "mongoose";

// Force Node's engine to resolve via public DNS instead of buggy ISP routers
if (typeof window === "undefined") {
  dns.setServers(["1.1.1.1", "8.8.8.8"]);
}

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("CRITICAL: MONGODB_URI is undefined. Verify your .env.local configuration.");
}

// Instantiate or reference global cache node to prevent memory leaks during dev hot-reloads
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

/**
 * Establishes a cached connection instance to MongoDB Atlas.
 * Forces IPv4 configuration parameters to handle proxy timeouts.
 */
const connectDB = async () => {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      family: 4, // Forces Node.js to use IPv4 addresses explicitly, avoiding IPv6 connection drops
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongooseInstance) => {
      console.log("🚀 MongoDB Connected Successfully!");
      return mongooseInstance;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (error) {
    console.error("❌ MongoDB Connection Failed: ", error.message);
    cached.promise = null; // Clear broken cache states on failure
    throw error;
  }

  return cached.conn;
}


export default connectDB