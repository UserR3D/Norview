"use client";
import React from "react";
import styles from "./page.module.css";
import singIn from "@/app/lib/signIn";

export default function Home() {
  const [user, setUser] = React.useState<string>("");
  const [access, setAccess] = React.useState<string>("");
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
      <button onClick={() => singIn(user, access)}>Enter</button>
    </div>
  );
}
