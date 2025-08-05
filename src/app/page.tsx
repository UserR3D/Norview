"use server";
import About from "@/app/components/About";
import Posts from "./components/Posts";
import ErrorBoundary from "./components/ErrorBoundary";
import { Suspense } from "react";
import Loading from "./loading";
import AppError from "./error";
export default async function Home() {
  return (
    <main>
      <div className="mb-(--mg-l) ">
        <About />
      </div>
      <span className="mb-(--mg-l)">
        <h2 className="text-4xl text-center text-(--font-P)">Posts</h2>
        <div className="mb-(--mg-l)">
          <ErrorBoundary fallback={<AppError />}>
            <Suspense fallback={<Loading />}>
              <Posts chunkSize={3} />
            </Suspense>
          </ErrorBoundary>
        </div>
      </span>
    </main>
  );
}
