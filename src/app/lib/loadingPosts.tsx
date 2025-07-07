"use client";
import React from "react";

export default function LoadingPosts({ state }: { state: Post[][] }) {
  const [index, setIndex] = React.useState<number | undefined>(0);
  function MoreIndex() {
    if (index! === state.length - 1) setIndex(0);
    setIndex((prevState) => prevState! + 1);
  }
  return (
    <ul>
      {state[index!].map((item) => (
        <li key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.content}</p>
          <h4>{item.author.email}</h4>
        </li>
      ))}
      <button onClick={MoreIndex}>Loading More</button>
    </ul>
  );
}
