import About from "@/app/components/about";
import Posts from "./components/posts";
export default async function Home() {
  return (
    <main>
      <About />
      <Posts chunkSize={3} />
    </main>
  );
}
