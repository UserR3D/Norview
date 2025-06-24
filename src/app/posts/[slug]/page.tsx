export default async function Page({
  params,
}: {
  params: Promise<{ slug: number }>;
}) {
  const postQuery = (await params).slug;
  const request = await fetch(`http://localhost:3333/users/posts/${postQuery}`);
  const postResponse = await request.json();
  console.log(postResponse);
  return <p>Post: {postQuery}</p>;
}
