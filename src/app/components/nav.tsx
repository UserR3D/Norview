import styles from "./nav.module.css";

export default function Nav({ username }: { username: string }) {
  return (
    <nav
      className={`${styles.navMain} bg-(--bg-fgray) flex text-4xl justify-between mb-(--mg-l)`}
    >
      <h2>Norview</h2>
      <ul className="flex gap-[2rem] justify-end  ">
        <li>Home</li>
        <li>Posts</li>
        {username ? <li>{username}</li> : <li>Login</li>}
      </ul>
    </nav>
  );
}
