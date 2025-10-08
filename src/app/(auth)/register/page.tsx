"use client";
import ApiClient from "@/app/lib/FetchOn";
import React from "react";

const req = new ApiClient();

export default function Home() {
  const [user, setUser] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [access, setAccess] = React.useState<string>("");
  const [error, setError] = React.useState<string>("");
  async function Register() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(user)) {
      if (access.length || password.length < 8)
        setError("Password with less that 8 characters");
      if (access === password) {
        req.registerUser({ email: user, password: access, role: "USER" });
      } else {
        setError("Passwords must be the same");
      }
    } else {
      setError("Email invalid");
    }
  }

  return (
    <section className="container">
      <div className="flex flex-col gap-3 justify-center bg-[#ffffff] rounded-2xl p-8">
        <p className="text-4xl self-center">Create a user for you!</p>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          value={user}
          onChange={(e) => {
            setUser(e.target.value);
          }}
          className="p-2"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={access}
          onChange={(e) => setAccess(e.target.value)}
          className="p-2"
        />
        <label htmlFor="password">Repeat Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2"
        />
        <button
          className="rounded-md bg-[#000] text-[#fff] p-2"
          onClick={Register}
        >
          Enter
        </button>
        {error ? <p className="text-red-500">{error}</p> : ""}
      </div>
    </section>
  );
}
