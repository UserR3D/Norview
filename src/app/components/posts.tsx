import React from "react";
import getPosts from "../lib/getPosts";

export default async function Posts() {
  const posts = await getPosts();
  if (!posts) return <p>Error</p>;
  return (
    <div>
      <h2>Posts</h2>
      <ul className="grid grid-cols-3 gap-[30px] [&>*]:bg-[#B3B3B3]  ">
        {posts.map((item) => (
          <li key={item.id} className="grid  max-w-[500px] h-[250px]">
            <h3>{item.title}</h3>
            <p className="text-ellipsis overflow-hidden">{item.content}</p>
            <h3>{item.author.email}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}
