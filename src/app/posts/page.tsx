import Image from "next/image";
import styles from "./page.module.css";
import React from "react";
import getPosts from "../lib/getPosts";

export default async function Home() {
  const posts = await getPosts();

  return (
    <main className={styles.main}>
      {posts.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.content}</p>
          <h4>{item.author.email}</h4>
        </div>
      ))}
    </main>
  );
}
