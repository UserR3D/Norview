import About from "@/app/components/about";
import Posts from "./components/posts";
import ErrorBoundary from "./components/ErrorBoundary";
import Error from "./error";
import { Suspense } from "react";
import Loading from "./loading";
export default async function Home() {
  return (
    <main>
      <div className="mb-(--mg-l) ">
        <About />
      </div>
      <span className="mb-(--mg-l)">
        <h2 className="text-4xl text-center text-(--font-P)">Posts</h2>
        <div className="mb-(--mg-l)">
          <ErrorBoundary fallback={<Error />}>
            <Suspense fallback={<Loading />}>
              <Posts chunkSize={3} />
            </Suspense>
          </ErrorBoundary>
        </div>
      </span>
    </main>
  );
}
