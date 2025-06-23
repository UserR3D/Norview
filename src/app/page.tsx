"use client";
import Image from "next/image";
import styles from "./page.module.css";
import React from "react";
import { Author } from "./author/user";

interface Post {
  id: number;
  title: string;
  content: string;
  published: boolean;
  authorID: number;
}

export default function Home() {
  const [post, setPost] = React.useState<Post[]>();

  React.useEffect(() => {
    async function posts() {
      const request = await fetch("http://localhost:3333/user/posts");
      const response = (await request.json()) as Post[];
      setPost(response);
    }
    posts();
  }, []);

  if (!post) return <p>Can't connect</p>;

  return (
    <main className={styles.main}>
      {post.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.content}</p>
          <Author id={item.authorID} />
        </div>
      ))}
    </main>
  );
}
