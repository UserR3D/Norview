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
  if (!res) return notFound();
  return (
    <div>
      <h3>{res.title}</h3>
      <p>{res.content}</p>
      <h3>Author: {res.author.email}</h3>
    </div>
  );
}
