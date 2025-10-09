"use server";
import { Suspense } from "react";
import Posts from "../components/Posts";
import ErrorBoundary from "../components/ErrorBoundary";
import Error from "./error";
import ApiClient from "../lib/FetchOn";
import { Metadata } from "next";
const req = new ApiClient();

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Forum",
  };
}

export default async function Home() {
  const res = await req.getPosts();
  return (
    <ErrorBoundary fallback={<Error />}>
      <Suspense fallback={<p>Loading...</p>}>
        <Posts posts={res} chunkSize={12} />
      </Suspense>
    </ErrorBoundary>
  );
}
