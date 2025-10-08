"use client";
import { useRouter } from "next/navigation";
import ApiClient from "./FetchOn";
import React from "react";
import Link from "next/link";

const req = new ApiClient();
export default function SignIn() {
  const [error, setError] = React.useState<ErrorObj>();
  const [user, setUser] = React.useState<string>("");
  const [access, setAccess] = React.useState<string>("");
  const router = useRouter();
  async function login(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    const res = await req.login({
      email: user,
      password: access,
    });
    if (!res[0]) return setError(res[1]);
    router.refresh();
  }

  return (
    <section className="container">
      <form className="flex flex-col gap-3 justify-center bg-[#ffffff] rounded-2xl p-8">
        <p className="text-4xl self-center">Sign in to Norview</p>
        <label htmlFor="email">Username or email address</label>
        <input
          type="email"
          onChange={(e) => {
            setUser(e.target.value);
          }}
          placeholder="Email"
          className="p-2"
        />
        <label htmlFor="email">Password</label>
        <input
          type="password"
          value={access}
          onChange={(e) => {
            setAccess(e.target.value);
          }}
          placeholder="Password"
          className="p-2"
        />
        <button
          className="rounded-md bg-[#000] text-[#fff] p-2"
          onClick={login}
        >
          Enter
        </button>
        {error ? (
          <span>
            <p>{error.error}</p>
            <p>{error.message}</p>
          </span>
        ) : (
          <></>
        )}
        <Link
          className="rounded-md text-center bg-[#000] text-[#fff] p-2"
          href={"/register"}
        >
          Create an account
        </Link>
      </form>
    </section>
  );
}
