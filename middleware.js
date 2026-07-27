import { NextResponse } from "next/server";

const COOKIE_NAME = "editor_session";

// Paths that must be reachable WITHOUT being logged in
// (the login page itself, and the API route that checks the code).
const PUBLIC_PATHS = ["/admin/login"];

export function middleware(request) {
  const { pathname } = request.nextUrl;

  if (PUBLIC_PATHS.includes(pathname)) {
    return NextResponse.next();
  }

  const session = request.cookies.get(COOKIE_NAME)?.value;
  const isAuthenticated =
    Boolean(session) && session === process.env.ADMIN_SESSION_SECRET;

  if (isAuthenticated) {
    return NextResponse.next();
  }

  // API calls get a JSON 401 instead of an HTML redirect
  if (pathname.startsWith("/api/")) {
    return NextResponse.json(
      { message: "Unauthorized. Please log in as editor." },
      { status: 401 }
    );
  }

  const loginUrl = new URL("/admin/login", request.url);
  loginUrl.searchParams.set("from", pathname);
  return NextResponse.redirect(loginUrl);
}

// Everything listed here requires a valid editor session,
// except /admin/login which is explicitly excluded above.
export const config = {
  matcher: ["/admin/:path*", "/api/test-db", "/api/upload"],
};
