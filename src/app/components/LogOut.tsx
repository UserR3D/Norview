"use client";

import { useRouter } from "next/navigation";

export default function LogOut() {
  const router = useRouter();
  async function signOut() {
    const req = await fetch(`http://localhost:3333/logout`, {
      method: "DELETE",
      credentials: "include",
    });
    router.refresh();
    return await req.json();
  }
  return <button onClick={signOut}>Logout</button>;
}
