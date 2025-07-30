import LoadingPosts from "@/app/lib/loadingPosts";

export default async function Posts({ chunkSize }: { chunkSize: number }) {
  const arrayI: Post[][] = [];
  const request = await fetch("http://localhost:3333/users/posts");
  if (!request.ok) return "Error in fetch";
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const posts = (await request.json()) as Post[];
  for (let i = 0; i < posts.length; i += chunkSize) {
    const chunk = posts.slice(i, i + chunkSize);
    arrayI.push(chunk);
  }

  if (arrayI.length === 0) return <p>Not loading</p>;
  return <LoadingPosts state={arrayI} />;
}
