"use client";

import { useRouter } from "next/navigation";
import React from "react";

interface ErrorProps {
  error?: Error & { digest?: string };
}

export default function Error({ error }: ErrorProps) {
  const router = useRouter();
  React.useEffect(() => {
    console.error(error?.message);
  }, [error]);
  return (
    <div>
      <h2>Another Error, just for you :D</h2>
      <button className="bg-amber-100" onClick={() => router.back()}>
        Go back
      </button>
    </div>
  );
}
