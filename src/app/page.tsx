import Nav from "@/app/components/nav";
import About from "@/app/components/about";
import Posts from "./components/posts";
export default function Home() {
  return (
    <div>
      <Nav />
      <About />
      <Posts />
    </div>
  );
}
