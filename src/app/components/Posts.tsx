"use server";
import LoadingPosts from "@/app/lib/LoadingPosts";
import ApiClient from "../lib/FetchOn";
import ErrorServer from "./ErrorServer";

export default async function Posts({
  posts,
  chunkSize,
}: {
  posts: ResponseApi<PostAuthor[]>;
  chunkSize: number;
}) {
  const arrayI: PostAuthor[][] = [];
  if (!chunkSize)
    return (
      <ErrorServer
        error={{
          error: "500 Internal Server Error",
          message: "Invalid input number array",
        }}
      />
    );
  if (!posts[0]) return <ErrorServer error={posts[1]} />;
  for (let i = 0; i < posts[0].length; i += chunkSize) {
    const chunk = posts[0].slice(i, i + chunkSize);
    arrayI.push(chunk);
  }

  return <LoadingPosts state={arrayI} />;
}
