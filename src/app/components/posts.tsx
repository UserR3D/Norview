import LoadingPosts from "@/app/lib/loadingPosts";

export default async function Posts({ chunkSize }: { chunkSize: number }) {
  const arrayI: Post[][] = [];
  if (!chunkSize) throw Error("Invalid ChunkSize Length");
  const request = await fetch("http://localhost:3333/users/posts");
  if (!request.ok) throw Error("Error in fetch");
  const posts = (await request.json()) as Post[];
  for (let i = 0; i < posts.length; i += chunkSize) {
    const chunk = posts.slice(i, i + chunkSize);
    arrayI.push(chunk);
  }

  return <LoadingPosts state={arrayI} />;
}
