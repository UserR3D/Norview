import type { Metadata } from "next";
import "./global.css";
import Nav from "./components/Nav";
import { AuthProvider } from "@/hooks/useContext";
import { verifySession } from "./lib/verifySession";
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: {
      template: "%s | Norview ",
      default: "Norview",
    },
    description: "Website for post like blog",
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await verifySession();
  return (
    <html lang="en">
      <body className="bg-(--background) relative">
        <AuthProvider>
          <header className="mb-(--mg-l) max-lg:mb-15 ">
            <Nav username={session?.email} role={session?.role} />
          </header>
          <main className="mb-[20vh]">{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
