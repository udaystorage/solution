import { NextResponse } from "next/server";

export async function POST(request) {
  let body;
  try {
    body = await request.json();
    console.log(body);
    
  } catch {
    return NextResponse.json({ message: "Invalid request." }, { status: 400 });
     console.log("code is not their");
  }

  const { code } = body || {};

  if (!code || typeof code !== "string") {
    return NextResponse.json({ message: "Code is required." }, { status: 400 });
  }

  if (code !== process.env.EDITOR_ACCESS_CODE) {
    return NextResponse.json({ message: "Invalid code." }, { status: 401 });
  }

  const response = NextResponse.json({ success: true });

  response.cookies.set("editor_session", process.env.ADMIN_SESSION_SECRET, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });

  return response;
}
