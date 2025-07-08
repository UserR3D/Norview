import LoadingPosts from "@/app/lib/loadingPosts";

const arrayI: Post[][] = [];
const chunkSize = 3;

export default async function Posts() {
  const request = await fetch("http://localhost:3333/users/posts");
  const posts = (await request.json()) as Post[];

  for (let i = 0; i < posts.length; i += chunkSize) {
    const chunk = posts.slice(i, i + chunkSize);
    arrayI.push(chunk);
  }

  if (!arrayI) return <p>Not loading</p>;

  return (
    <div>
      <h2>Posts</h2>
      <LoadingPosts state={arrayI} />
    </div>
  );
}
