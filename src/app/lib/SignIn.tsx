"use client";
import { useRouter } from "next/navigation";
import ApiClient from "./FetchOn";
import React from "react";

const req = new ApiClient();
export default function SignIn() {
  const [user, setUser] = React.useState<string>("");
  const [access, setAccess] = React.useState<string>("");
  const router = useRouter();
  async function login() {
    await req.login({
      email: user,
      password: access,
    });
    router.refresh();
  }

  return (
    <div>
      <input
        type="email"
        onChange={(e) => {
          setUser(e.target.value);
        }}
        placeholder="Email"
      />
      <input
        type="password"
        value={access}
        onChange={(e) => {
          setAccess(e.target.value);
        }}
        placeholder="Password"
      />
      <button className="bg-[#000] text-[#fff]" onClick={login}>
        Enter
      </button>
    </div>
  );
}
