"use client";
import ApiClient from "@/app/lib/FetchOn";
import React from "react";

const req = new ApiClient();

export default function Home() {
  const [user, setUser] = React.useState<string>("");
  const [access, setAccess] = React.useState<string>("");

  return (
    <div>
      <h1>register</h1>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        value={user}
        onChange={(e) => {
          setUser(e.target.value);
        }}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        value={access}
        onChange={(e) => setAccess(e.target.value)}
      />
      <button
        onClick={() => req.registerUser({ email: user, password: access })}
      >
        Enter
      </button>
    </div>
  );
}
