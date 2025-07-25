"use client";
import React from "react";

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
    setToggle(!toggle);
    if (toggle) {
      e.currentTarget.style.overflow = "auto";
    } else {
      e.currentTarget.style.overflow = "hidden";
    }
  }
  return (
    <span className="mb-(--mg-l)">
      <ul className="flex justify-center gap-[20px] mb-[20px] justify-items-center items-center ">
        {state[index!].map((item) => (
          <li
            key={item.id}
            className={`relative max-w-[600px] box-border p-4 basis-full h-[300px] text-(--smoky-black) grid grid-rows-[30px_1fr_30px] gap-2 items-center text-justify bg-(--posts-bg) overflow-hidden`}
            onClick={(e) => {
              flowToggle(e);
            }}
          >
            <h2>{item.title}</h2>
            <p>{item.content}</p>
            <h4 className="bg-[#506C64] p-2 text-[#fff] text-center">
              {item.author.email}
            </h4>
          </li>
        ))}
      </ul>
      <div className="container flex justify-center">
        <button className="bg-[#454ADE] p-3 " onClick={MoreIndex}>
          Next Page
        </button>
      </div>
    </span>
  );
}
