"use client";
import ApiClient from "@/app/lib/FetchOn";
import React from "react";

const req = new ApiClient();

export default function Page() {
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  return (
    <div>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={title}
      />
      <label htmlFor="content">Content</label>
      <input
        type="text"
        onChange={(e) => {
          setContent(e.target.value);
        }}
        value={content}
      />
      <button
        onClick={() => req.createPost({ title, content, published: true })}
      >
        Botao
      </button>
    </div>
  );
}
