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
  const request = await fetch("http://localhost:3333/user/posts");
  const posts = (await request.json()) as Post[];
  console.log(posts);
  if (!posts) return <p>Can't connect</p>;

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
