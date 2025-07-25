import LoadingPosts from "@/app/lib/loadingPosts";

export default async function Posts({ chunkSize }: { chunkSize: number }) {
  const arrayI: Post[][] = [];
  const request = await fetch("http://localhost:3333/users/posts");
  const posts = (await request.json()) as Post[];

  for (let i = 0; i < posts.length; i += chunkSize) {
    const chunk = posts.slice(i, i + chunkSize);
    arrayI.push(chunk);
  }

  if (!arrayI) return <p>Not loading</p>;
  return <LoadingPosts state={arrayI} />;
}
