"use client";

import React from "react";

interface ErrorProps {
  error?: Error & { digest?: string };
  // reset: () => void;
}

export default function Error({ error }: ErrorProps) {
  React.useEffect(() => {
    console.error(error?.message);
  }, [error]);
  return (
    <div>
      <h2>Another Error, just for you :D</h2>
      {/* <button className="bg-amber-100" onClick={() => reset()}>
        Try again???
      </button> */}
    </div>
  );
}
