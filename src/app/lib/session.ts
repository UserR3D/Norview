import * as jose from "jose";
import { cookies } from "next/headers";

export async function verifySession() {
  try {
    const cookie = (await cookies()).get("__Secure-acess_token__")?.value;
    if (!cookie) return null;
    const { payload } = jose.decodeJwt(cookie);
    if (!payload) return null;
    console.log(payload);
    return payload;
  } catch (e) {
    console.log("failed to verify session");
  }
}
