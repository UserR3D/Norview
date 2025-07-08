"use client";
import React, { DetailedHTMLProps, LiHTMLAttributes } from "react";

export default function LoadingPosts({ state }: { state: Post[][] }) {
  const [index, setIndex] = React.useState<number | undefined>(0);
  const [toggle, setToggle] = React.useState(false);
  function MoreIndex() {
    if (index! == state.length - 1) {
      setIndex(0);
    } else {
      setIndex((prevState) => prevState! + 1);
      console.log(state);
    }
  }
  function flowToggle(e: React.MouseEvent<HTMLLIElement, MouseEvent>) {
    if (toggle) {
      e.currentTarget.style.overflow = "visible";
    } else {
      e.currentTarget.style.overflow = "hidden";
    }
    setToggle(!toggle);
  }
  return (
    <div>
      <ul className="grid grid-cols-3 gap-10 mb-[20px] justify-items-center items-center">
        {state[index!].map((item) => (
          <li
            key={item.id}
            className={`h-[250px] grid grid-rows gap-2 text-justify overflow-hidden`}
            onClick={flowToggle}
          >
            <h2>{item.title}</h2>
            <p>{item.content}</p>
            <h4>{item.author.email}</h4>
          </li>
        ))}
      </ul>
      <button onClick={MoreIndex}>Next Page</button>
    </div>
  );
}
