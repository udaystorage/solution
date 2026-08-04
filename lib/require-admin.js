import { cookies } from "next/headers";
import { verifyAdminToken } from "./admin-auth";

export async function requireAdmin() {
  const token = (await cookies()).get("editor_session")?.value;

  if (!token) {
    return false;
  }

  return await verifyAdminToken(token);
}