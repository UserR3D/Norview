"use server";
import LoadingPosts from "@/app/lib/LoadingPosts";
import ApiClient from "../lib/FetchOn";
import ErrorServer from "./ErrorServer";

const req = new ApiClient();

export default async function Posts({ chunkSize }: { chunkSize: number }) {
  const arrayI: Post[][] = [];
  if (!chunkSize)
    return (
      <ErrorServer
        error={{
          error: "500 Internal Server Error",
          message: "Invalid input number array",
        }}
      />
    );
  const res = await req.getPosts();
  if (!res[0]) return <ErrorServer error={res[1]} />;
  for (let i = 0; i < res[0].length; i += chunkSize) {
    const chunk = res[0].slice(i, i + chunkSize);
    arrayI.push(chunk);
  }

  return <LoadingPosts state={arrayI} />;
}
