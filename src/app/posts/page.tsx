"use server";
import { Suspense } from "react";
import Posts from "../components/Posts";
import ErrorBoundary from "../components/ErrorBoundary";
import Error from "./error";
export default async function Home() {
  return (
    <ErrorBoundary fallback={<Error />}>
      <Suspense fallback={<p>Loading...</p>}>
        <Posts chunkSize={12} />
      </Suspense>
    </ErrorBoundary>
  );
}
