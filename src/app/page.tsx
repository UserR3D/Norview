import About from "@/app/components/about";
import Posts from "./components/posts";
export default async function Home() {
  return (
    <main>
      <div className="mb-(--mg-l) ">
        <About />
      </div>
      <span className="mb-(--mg-l)">
        <h2 className="text-4xl text-center text-(--font-P)">Posts</h2>
        <div className="mb-(--mg-l)">
          <Posts chunkSize={3} />
        </div>
      </span>
    </main>
  );
}
