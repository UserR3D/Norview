"use server";
import ApiClient from "@/app/lib/FetchOn";
import Link from "next/link";
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
    <div className="container grid grid-rows-[200px, 1fr, 200px] gap-4 bg-[#f2f2f2] p-5 rounded-sm">
      <h3 className="text-3xl">{res[0].title}</h3>
      <p className="text-xl">{res[0].content}</p>
      <h3 className="text-2xl text-[#0c001a] justify-self-end hover:text-[#5000a8]">
        Author:
        <Link href={`/user/${res[0].author.email}`}>
          {" "}
          {res[0].author.email}
        </Link>
      </h3>
    </div>
  );
}
