"use client";
import React from "react";

type user = {
  id: number;
  email: string;
  role: "ADMIN" | "USER";
};

export default function Home() {
  const [list, setList] = React.useState<user[]>();

  React.useEffect(() => {
    async function listF() {
      try {
        const request = await fetch("http://localhost:3333/users", {
          credentials: "include",
        });
        if (!request.ok) {
          throw new Error("Authentication required");
        }
        const response = (await request.json()) as user[];
        setList(response);
      } catch (e) {
        if (e instanceof Error) console.error(e.message);
      }
    }
    listF();
  }, []);

  if (!list) return <p>teste fail</p>;

  return (
    <div>
      {list.map((item) => (
        <div key={item.id}>
          <p>{item.email}</p>
          <p>{item.role}</p>
        </div>
      ))}
    </div>
  );
}
