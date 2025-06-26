export default async function getPosts() {
  const request = await fetch("http://localhost:3333/users/posts");
  if (!request.ok) throw new Error("Can't connect");
  const posts = (await request.json()) as Post[];
  return posts;
}
