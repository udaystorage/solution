import { SignJWT, jwtVerify } from "jose";

const secret = new TextEncoder().encode(
    process.env.ADMIN_SESSION_SECRET
);

export async function createAdminToken() {
    return await new SignJWT({
        role: "editor",
    })
        .setProtectedHeader({
            alg: "HS256",
        })
        .setIssuedAt()
        .setExpirationTime("8h")
        .sign(secret);
}

export async function verifyAdminToken(token) {
    try {
        await jwtVerify(token, secret);
        return true;
    } catch {
        return false;
    }
}