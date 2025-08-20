"use server";
import LoadingPosts from "@/app/lib/LoadingPosts";
import ApiClient from "../lib/FetchOn";

const req = new ApiClient();

export default async function Posts({ chunkSize }: { chunkSize: number }) {
  const arrayI: Post[][] = [];
  if (!chunkSize) throw Error("Invalid ChunkSize Length");
  const res = await req.getPosts();
  if (res) {
    for (let i = 0; i < res.length; i += chunkSize) {
      const chunk = res.slice(i, i + chunkSize);
      arrayI.push(chunk);
    }
  }

  return <LoadingPosts state={arrayI} />;
}
