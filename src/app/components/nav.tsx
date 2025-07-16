export default function Nav({ username }) {
  return (
    <nav className="flex text-4xl justify-between mb-(--mg-l)">
      <h2>Norview</h2>
      <ul className="flex gap-[2rem] justify-end  ">
        <li>Home</li>
        <li>Posts</li>
        {username ? <li>{username}</li> : <li>Login</li>}
      </ul>
    </nav>
  );
}
