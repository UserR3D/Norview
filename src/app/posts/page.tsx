import Image from "next/image";
import styles from "./page.module.css";
import React from "react";

interface Post extends Author {
  id: number;
  title: string;
  content: string;
  published: boolean;
  authorID: number;
}

type Author = {
  author: {
    email: string;
    id: number;
    role: "ADMIN" | "USER";
  };
};
export default async function Home() {
  try {
    const request = await fetch("http://localhost:3333/users/posts");
    if (!request.ok) throw new Error("Can't connect");
    const posts = (await request.json()) as Post[];

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
  } catch (e) {
    if (e instanceof Error) return <h3>{e.message}</h3>;
  }
}
