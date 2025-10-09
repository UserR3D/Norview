import { verifySession } from "@/app/lib/verifySession";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Register Users",
  };
}

export default async function UsersLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await verifySession();
  if (!session) {
    return (
      <div>
        <p>Authentication Required</p>
      </div>
    );
  }
  return <>{children}</>;
}
