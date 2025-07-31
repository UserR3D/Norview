"use client";
export default function LogOut() {
  async function signOut() {
    const req = await fetch(`http://localhost:3333/logout`, {
      method: "DELETE",
      credentials: "include",
    });
    const res = await req.json();
    console.log(res);
  }
  return (
    <li>
      <button onClick={signOut}>logOut</button>
    </li>
  );
}
