"use client"
import React from "react";

export default function Home(){
  const [list, setList] = React.useState<[]>();

  async function listF(){
    const request = await fetch("http://localhost:3333/users", {
      credentials: "include",
    });
    const response = await request.json();
    console.log(response)
  }
  listF()
  return(
    <div>
    </div>
  )
}