"use client";
import React from "react";
import ApiClient from "../lib/FetchOn";

const req = new ApiClient();

export default function Home() {
  const [list, setList] = React.useState<user[]>();

  React.useEffect(() => {
    async function listF() {
      const res = await req.getUsers();
      setList(res);
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
