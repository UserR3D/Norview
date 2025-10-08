"use client";
import React from "react";
import ApiClient from "../lib/FetchOn";
import { useRouter } from "next/navigation";

const req = new ApiClient();

export default function Home() {
  const route = useRouter();
  const [list, setList] = React.useState<User[]>();
  const [roles, setRoles] = React.useState<string>("USER");

  async function updateRole(id: number) {
    req.updateUser(id, roles);
    route.refresh();
  }

  async function deleteUser(id: number) {
    await req.deleteUser(id);
    route.refresh();
  }

  React.useEffect(() => {
    async function listF() {
      const res = await req.getUsers();
      if (res[0]) setList(res[0]);
    }
    listF();
  }, []);

  if (!list) return <p>teste fail</p>;

  return (
    <section className="container p-4 bg-[#d2d2d2] border-2 border-gray-700">
      {list.map((item) => (
        <div
          className="grid grid-cols-[1fr_0.5fr_0.5fr_0.5fr] text-center gap-3"
          key={item.id}
        >
          <p>{item.email}</p>
          <select
            onChange={(e) => {
              setRoles(e.currentTarget.value);
            }}
            defaultValue={item.role}
            name={item.role}
            className="text-center"
          >
            <option value="ADMIN">ADMIN</option>
            <option value="USER">USER</option>
          </select>
          <button onClick={() => deleteUser(item.id)}>Deletar</button>
          <button onClick={() => updateRole(item.id)}>Enviar</button>
        </div>
      ))}
    </section>
  );
}
