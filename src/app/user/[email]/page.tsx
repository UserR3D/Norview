"use server";
import ApiClient from "@/app/lib/FetchOn";
import React from "react";
import { notFound } from "next/navigation";
import Posts from "@/app/components/Posts";

const req = new ApiClient();

export default async function Page({
  params,
}: {
  params: Promise<{ email: string }>;
}) {
  const paramsEmail = await params;
  const res = await req.getUserPosts(paramsEmail.email);
  if (!res[0]) return notFound();
  return <Posts posts={res} chunkSize={12} />;
}
