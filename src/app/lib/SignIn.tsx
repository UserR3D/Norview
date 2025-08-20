"use client";
import { useRouter } from "next/navigation";
import ApiClient from "./FetchOn";
const req = new ApiClient();
export default function SignIn({
  user,
  access,
}: {
  user: string;
  access: string;
}) {
  const router = useRouter();
  // async function login() {
  //   const request = await fetch("http://localhost:3333/login", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ email: user, password: access }),
  //     credentials: "include",
  //   });
  //   const response = await request.json();
  //   router.refresh();
  //   return response;
  // }
  return (
    <button
      className="bg-[#000] text-[#fff]"
      onClick={() => req.login({ email: user, password: access })}
    >
      Enter
    </button>
  );
}
