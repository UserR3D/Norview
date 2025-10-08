"use client";
import ApiClient from "@/app/lib/FetchOn";
import React from "react";

const req = new ApiClient();
export default function Page() {
  const [response, setResponse] = React.useState<ResponseApi<Post>>();
  const [title, setTitle] = React.useState<string>("");
  const [content, setContent] = React.useState<string>("");
  const [error, setError] = React.useState<ErrorObj | null>();
  async function postcreate() {
    if (title?.length < 10 || title?.length > 60)
      return setError({
        message:
          "Please put a title with more that 10 characters and less that 60",
      });

    if (content?.length < 20)
      return setError({
        message: "Please put a content with more that 20 characters",
      });
    setError(null);
    setResponse(await req.createPost({ title, content, published: true }));
  }

  return (
    <div className="container grid grid-rows-3 justify-center">
      <label htmlFor="title">Title</label>
      <input
        type="text"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={title}
      />
      <label htmlFor="content">Content</label>
      <textarea
        onChange={(e) => {
          setContent(e.target.value);
        }}
        value={content}
        className="w-[50vw] h-[50vh] border-2 max-sm:h-[30vh] max-sm:w-[80vw]"
      />
      <button className="p-3 bg-red-500" onClick={postcreate}>
        Botao
      </button>
      {error ? <p>{error.message}</p> : ""}
      {response ? <p> Post created with successfull</p> : ""}
    </div>
  );
}
