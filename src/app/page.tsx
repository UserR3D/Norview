"use server";
import About from "@/app/components/About";
import Posts from "./components/Posts";
import ErrorBoundary from "./components/ErrorBoundary";
import { Suspense } from "react";
import Loading from "./loading";
import AppError from "./error";
import ApiClient from "./lib/FetchOn";
const req = new ApiClient();
export default async function Home() {
  const res = await req.getPosts();
  return (
    <>
      <article className="mb-(--mg-l) max-lg:mb-15">
        <About />
      </article>
      <section>
        <h2 className="text-4xl text-center text-(--font-P)">Posts</h2>
        <ErrorBoundary fallback={<AppError />}>
          <Suspense fallback={<Loading />}>
            <Posts posts={res} chunkSize={9} />
          </Suspense>
        </ErrorBoundary>
      </section>
    </>
  );
}
