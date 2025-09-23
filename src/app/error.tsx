"use client";

import React from "react";

interface ErrorProps {
  error?: Error & { digest?: string };
}

export default function AppError({ error }: ErrorProps) {
  React.useEffect(() => {
    console.error(error?.message);
  }, [error]);
  return (
    <div className="container text-center">
      <h2>Another Error, just for you :D</h2>
      {error ? <p>{error.message}</p> : <p>Error undefined</p>}
      <section className="flex gap-3 justify-center">
        <button
          className="bg-amber-100"
          onClick={() => window.location.reload()}
        >
          Try again
        </button>
        <button>Go home</button>
      </section>
    </div>
  );
}
