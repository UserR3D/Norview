"use client";
import React from "react";
import styles from "./page.module.css";

export default function Home() {
  const [user, setUser] = React.useState<string>("");
  const [access, setAccess] = React.useState<string>("");

  async function login() {
    const request = await fetch("http://localhost:3333/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: user, password: access }),
      credentials: "include",
    });
    console.log(await request.json());
  }

  return (
    <div className={styles.page}>
      <input
        type="email"
        value={user}
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
      <button onClick={login}>Enter</button>
    </div>
  );
}
