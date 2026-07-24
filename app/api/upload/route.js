import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import crypto from "crypto";

// Images are saved to /public/uploads so they're served directly at /uploads/<filename>
const UPLOAD_DIR = path.join(process.cwd(), "public", "uploads");

const ALLOWED_TYPES = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/gif",
  "image/svg+xml",
]);

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

function extensionFromType(type) {
  switch (type) {
    case "image/jpeg":
      return ".jpg";
    case "image/png":
      return ".png";
    case "image/webp":
      return ".webp";
    case "image/gif":
      return ".gif";
    case "image/svg+xml":
      return ".svg";
    default:
      return "";
  }
}

async function ensureUploadDir() {
  await fs.mkdir(UPLOAD_DIR, { recursive: true });
}

// POST /api/upload -> accepts multipart/form-data with a "file" field
export async function POST(request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file");

    if (!file || typeof file === "string") {
      return NextResponse.json(
        { message: "No file was uploaded." },
        { status: 400 }
      );
    }

    if (!ALLOWED_TYPES.has(file.type)) {
      return NextResponse.json(
        { message: "Unsupported file type. Use JPG, PNG, WEBP, GIF, or SVG." },
        { status: 400 }
      );
    }

    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { message: "File is too large. Max size is 5MB." },
        { status: 400 }
      );
    }

    await ensureUploadDir();

    const ext = extensionFromType(file.type);
    const filename = `${Date.now()}-${crypto.randomUUID()}${ext}`;
    const filePath = path.join(UPLOAD_DIR, filename);

    const bytes = Buffer.from(await file.arrayBuffer());
    await fs.writeFile(filePath, bytes);

    const url = `/uploads/${filename}`;

    return NextResponse.json({ message: "Upload successful.", url }, { status: 201 });
  } catch (err) {
    return NextResponse.json(
      { message: err.message || "Failed to upload image." },
      { status: 500 }
    );
  }
}

// DELETE /api/upload?url=/uploads/xyz.png -> removes an uploaded image
export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const url = searchParams.get("url");

    if (!url || !url.startsWith("/uploads/")) {
      return NextResponse.json({ message: "Invalid image url." }, { status: 400 });
    }

    const filename = path.basename(url);
    const filePath = path.join(UPLOAD_DIR, filename);

    await fs.unlink(filePath).catch(() => {});

    return NextResponse.json({ message: "Image deleted." });
  } catch (err) {
    return NextResponse.json(
      { message: err.message || "Failed to delete image." },
      { status: 500 }
    );
  }
}