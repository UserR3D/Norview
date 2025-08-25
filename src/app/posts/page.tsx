"use server";
import { Suspense } from "react";
import Posts from "../components/Posts";
import ErrorBoundary from "../components/ErrorBoundary";
import Error from "./error";
export default async function Home() {
  return (
    <ErrorBoundary fallback={<Error />}>
      <Suspense fallback={<p>Loading...</p>}>
        <div className="mb-(--mg-l)">
          <Posts chunkSize={9} />
        </div>
      </Suspense>
    </ErrorBoundary>
  );
}
