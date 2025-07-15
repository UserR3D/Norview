import About from "@/app/components/about";
import Posts from "./components/posts";
import { verifySession } from "./lib/session";
export default async function Home() {
  verifySession();
  return (
    <main>
      <About />
      <Posts chunkSize={3} />
    </main>
  );
}
