"use client";
import React from "react";

export default function Home() {
  const [user, setUser] = React.useState<string>("");
  const [access, setAccess] = React.useState<string>("");

  async function register() {
    const request = await fetch("http://localhost:3333/createUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: user, password: access }),
    });
    const response = await request.json();
    console.log(response);
  }

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
      <button onClick={register}>Enter</button>
    </div>
  );
}
