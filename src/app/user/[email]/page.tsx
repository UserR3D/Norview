"use server";
import ApiClient from "@/app/lib/FetchOn";
import React from "react";
import { notFound } from "next/navigation";

const req = new ApiClient();

export default async function Page({
  params,
}: {
  params: Promise<{ email: string }>;
}) {
  const paramsEmail = await params;
  const res = await req.getUserPosts(paramsEmail.email);
  if (!res[0]) return notFound();
  return (
    <div>
      {res[0].map((posts) => {
        return (
          <ul key={posts.id}>
            <li>{posts.title}</li>
            <li>{posts.content}</li>
            <li>{posts.author.email}</li>
          </ul>
        );
      })}
    </div>
  );
}
