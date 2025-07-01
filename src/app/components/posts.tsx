import React from "react";

let chunkIndex = 0;

const chunkSize = 3;
const chunks: Post[][] = [];

export default async function Posts() {
  const request = await fetch("http://localhost:3333/users/posts");
  if (!request.ok) throw new Error("Can't connect");
  const posts = (await request.json()) as Post[];
  if (!posts) return <p>Error</p>;

  for (let i = 0; i < posts.length; i += chunkSize) {
    const chunk = posts.slice(i, i + chunkSize);
    chunks.push(chunk);
  }
  return (
    <div>
      <h2>Posts</h2>
      <ul className="grid grid-cols-3 gap-[30px] [&>*]:bg-[#B3B3B3]  ">
        {chunks[1].map((item) => (
          <li key={item.id} className="grid max-w-[500px] h-[250px]">
            <h3>{item.title}</h3>
            <p className="text-ellipsis overflow-hidden">{item.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
