"use server";
import About from "@/app/components/About";
import Posts from "./components/Posts";
import ErrorBoundary from "./components/ErrorBoundary";
import { Suspense } from "react";
import Loading from "./loading";
import AppError from "./error";
export default async function Home() {
  return (
    <>
      <div className="mb-(--mg-l) max-lg:mb-15">
        <About />
      </div>
      <div className="mb-(--mg-l)">
        <h2 className="text-4xl text-center text-(--font-P)">Posts</h2>
        <ErrorBoundary fallback={<AppError />}>
          <Suspense fallback={<Loading />}>
            <Posts chunkSize={9} />
          </Suspense>
        </ErrorBoundary>
      </div>
    </>
  );
}
