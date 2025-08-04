import Link from "next/link";
import styles from "./nav.module.css";
import LogOut from "./LogOut";

export default function Nav({ username }: { username: string | undefined }) {
  return (
    <nav
      className={`${styles.navMain}  container bg-(--bg-fgray) text-(--font-P) flex text-4xl justify-between`}
    >
      <h2>Norview</h2>
      <ul className="flex gap-[2rem] justify-end  ">
        <li>Home</li>
        <Link href={"/posts"}>
          <li>Forum</li>
        </Link>
        {username ? (
          <ul className={`${styles.navUser} `}>
            <li>{username}</li>
            <div>
              <li>Posts</li>
              <li>
                <LogOut />
              </li>
            </div>
          </ul>
        ) : (
          <Link href={"/login"}>
            <li>Login</li>
          </Link>
        )}
      </ul>
    </nav>
  );
}
