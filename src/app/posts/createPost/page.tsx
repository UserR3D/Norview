"use client";
import React from "react";

export default function Page() {
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  async function post() {
    const request = await fetch("http://localhost:3333/users/post", {
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      method: "POST",
      body: JSON.stringify({ title, content, published: true }),
    });
    const response = await request.json();
    console.log(response);
  }
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={title}
      />
      <input
        type="text"
        onChange={(e) => {
          setContent(e.target.value);
        }}
        value={content}
      />
      <button onClick={post}>Botao</button>
    </div>
  );
}
