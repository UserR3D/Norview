import Link from "next/link";
import styles from "./nav.module.css";
import LogOut from "./LogOut";

export default function Nav({ username }: { username: string | undefined }) {
  return (
    <nav
      className={`${styles.navMain} container bg-(--bg-fgray) text-(--font-P) flex justify-between text-4xl px-[90px] py-[16px]
      max-[90rem]:text-3xl max-[80rem]:text-2xl max-[60rem]:px-[18px] max-[43.75rem]:text-xs 
      `}
    >
      <Link href={"/"}>
        <h2>Norview</h2>
      </Link>
      <ul className="flex gap-8 justify-end max-[43.75rem]:gap-2">
        <Link href={"/posts/createPost"}>
          <li>Create+</li>
        </Link>
        <Link href={"/posts"}>
          <li>Forum</li>
        </Link>
        {username ? (
          <ul className={`${styles.navUser} relative flex-col `}>
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
