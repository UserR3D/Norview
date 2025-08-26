"use server";
import ApiClient from "@/app/lib/FetchOn";
import { notFound } from "next/navigation";

const req = new ApiClient();

export default async function Page({
  params,
}: {
  params: Promise<{ slug: number }>;
}) {
  const postQuery = (await params).slug;
  const res = await req.singlePost(`/users/posts/${postQuery}`);
  if (!res[0]) return notFound();
  return (
    <div>
      <h3>{res[0].title}</h3>
      <p>{res[0].content}</p>
      <h3>Author: {res[0].author.email}</h3>
    </div>
  );
}
