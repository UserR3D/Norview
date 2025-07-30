import Link from "next/link";
import styles from "./nav.module.css";

export default function Nav({ username }: { username: string | undefined }) {
  return (
    <nav
      className={`${styles.navMain}  container bg-(--bg-fgray) text-(--font-P) flex text-4xl justify-between`}
    >
      <h2>Norview</h2>
      <ul className="flex gap-[2rem] justify-end  ">
        <li>Home</li>
        <Link href={"/posts"}>
          <li>Posts</li>
        </Link>
        {username ? <li>{username}</li> : <li>Login</li>}
      </ul>
    </nav>
  );
}
