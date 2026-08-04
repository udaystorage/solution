import { NextResponse } from "next/server";
import { createAdminToken } from "@/lib/admin-auth";

export async function POST(request) {
  let body;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { message: "Invalid request." },
      { status: 400 }
    );
  }

  const { code } = body;

  if (!code || typeof code !== "string") {
    return NextResponse.json(
      { message: "Code is required." },
      { status: 400 }
    );
  }

  if (code !== process.env.EDITOR_ACCESS_CODE?.trim()) {
    return NextResponse.json(
      { message: "Invalid code." },
      { status: 401 }
    );
  }

  const token = await createAdminToken();

  const response = NextResponse.json({
    success: true,
  });

  response.cookies.set("editor_session", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 8, // 8 hours
  });

  return response;
}