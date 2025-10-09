import SignIn from "@/app/lib/SignIn";
import { verifySession } from "@/app/lib/verifySession";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Create Post",
    description: "Website for post like blog",
  };
}

export default async function CreatePostLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await verifySession();
  if (!session) {
    return (
      <div className="container">
        <h4 className="text-4xl text-center">Please make your login</h4>
        <SignIn />
      </div>
    );
  }
  return <>{children}</>;
}
