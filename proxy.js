import { NextResponse } from "next/server";
import { verifyAdminToken } from "@/lib/admin-auth";

export async function proxy(request) {

    if (!request.nextUrl.pathname.startsWith("/admin")) {
        return NextResponse.next();
    }

    if (request.nextUrl.pathname === "/admin/login") {
        return NextResponse.next();
    }

    const token =
        request.cookies.get("editor_session")?.value;

    if (!token) {

        return NextResponse.redirect(
            new URL(
                "/admin/login?from=" +
                    encodeURIComponent(request.nextUrl.pathname),
                request.url
            )
        );

    }

    const valid =
        await verifyAdminToken(token);

    if (!valid) {

        return NextResponse.redirect(
            new URL("/admin/login", request.url)
        );

    }

    return NextResponse.next();

}

export const config = {

    matcher: ["/admin/:path*"],

};