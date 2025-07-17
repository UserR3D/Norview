import * as jose from "jose";
import { cookies } from "next/headers";

type SessionCookie = {
  email: string;
  id: number;
  role: "ADMIN" | "USER";
};

export async function verifySession() {
  const cookie = (await cookies()).get("__Secure_acess_token__")?.value;
  if (cookie) {
    const { payload } = jose.decodeJwt(cookie);
    return payload as SessionCookie;
  } else {
    return null;
  }
}
