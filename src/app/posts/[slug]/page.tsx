import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: number }>;
}) {
  const postQuery = (await params).slug;
  const request = await fetch(`http://localhost:3333/users/posts/${postQuery}`);
  const postResponse = (await request.json()) as Post;
  if (!postResponse) return notFound();
  return (
    <div>
      <h3>{postResponse.title}</h3>
      <p>{postResponse.content}</p>
      <h3>Author: {postResponse.author.email}</h3>
    </div>
  );
}
