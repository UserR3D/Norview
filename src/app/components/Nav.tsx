import Link from "next/link";
import styles from "./nav.module.css";
import LogOut from "./LogOut";

export default function Nav({ username }: { username: string | undefined }) {
  return (
    <nav
      className={`${styles.navMain} container bg-(--bg-fgray) text-(--font-P) text-4xl px-[90px] py-[16px]
      max-xl:text-2xl max-lg:text-3xl max-lg:px-[20px] max-sm:text-base
      `}
    >
      <ul className="flex gap-8 justify-between max-md:gap-2">
        <li>
          <Link href={"/"}>
            <h2>Norview</h2>
          </Link>
        </li>
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
              <Link href={`/user`}>
                <li>Posts</li>
              </Link>
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
