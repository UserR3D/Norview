import { verifySession } from "@/app/lib/verifySession";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Login",
  };
}
export default async function LayoutLogin({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await verifySession();
  if (session) redirect("/");
  return <>{children}</>;
}
