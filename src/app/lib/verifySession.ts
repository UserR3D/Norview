import * as jose from "jose";
import { cookies } from "next/headers";

export async function verifySession() {
  const cookie = (await cookies()).get("__Secure_acess_token__")?.value;
  if (cookie) {
    const { payload } = jose.decodeJwt(cookie);
    return payload;
  } else {
    return null;
  }
}
