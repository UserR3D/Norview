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

  return (
    <div className="mb-(--mg-l)">
      <h2 className="text-4xl">Posts</h2>
      <LoadingPosts state={arrayI} />
    </div>
  );
}
