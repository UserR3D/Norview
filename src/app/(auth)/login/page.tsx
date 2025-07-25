"use client";
import React from "react";
import styles from "./page.module.css";
import getSession from "@/hooks/useContext";
import signIn from "@/app/lib/signIn";

export default function Home() {
  const session = getSession();
  const [user, setUser] = React.useState<string>("");
  const [access, setAccess] = React.useState<string>("");
  console.log(session?.username);
  return (
    <div className={styles.page}>
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
      <button
        className="bg-[#000] text-[#fff]"
        onClick={() => signIn(user, access)}
      >
        Enter
      </button>
    </div>
  );
}
