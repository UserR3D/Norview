import React from "react";
import getPosts from "../lib/getPosts";

export default async function Posts() {
  const posts = await getPosts();
  if (!posts) return <p>Error</p>;
  return (
    <div>
      <h2>Posts</h2>
      <ul className="grid grid-cols-3 gap-[30px] [&>*]:bg-[#D9D9D9]">
        {posts.map((item) => (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.content}</p>
            <h3>{item.author.email}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}
