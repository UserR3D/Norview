"use client";
import React from "react";

export default function LoadingPosts({ state }: { state: Post[][] }) {
  const [index, setIndex] = React.useState<number | undefined>(0);
  const [toggle, setToggle] = React.useState(false);

  function minusIndex() {
    if (!index) {
      return null;
    } else {
      setIndex((prevState) => prevState! - 1);
    }
  }
  function moreIndex() {
    if (index! == state.length - 1) {
      setIndex(0);
    } else {
      setIndex((prevState) => prevState! + 1);
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
    <span className="mb-(--mg-l) ">
      <ul
        className="flex justify-center gap-[20px] mb-[20px] justify-items-center items-stretch 
      max-md:flex-col max-md:items-center
      "
      >
        {state[index!].map((item) => (
          <li
            key={item.id}
            className={`relative grid grid-rows-1 max-w-[600px] max-h-[300px] box-border p-4 basis-full text-(--smoky-black) gap-5 items-center text-justify bg-(--posts-bg) overflow-hidden
             max-md:w-[300px] `}
            onClick={(e) => {
              flowToggle(e);
            }}
          >
            <h2>{item.title}</h2>
            <p>{item.content}</p>
            <h4 className="bg-[#506C64] p-1 text-[#fff] text-center sticky -bottom-5">
              {item.author.email}
            </h4>
          </li>
        ))}
      </ul>
      <div className="container flex gap-10 justify-center">
        <button className="bg-[#454ADE] p-3 " onClick={minusIndex}>
          Before Page
        </button>
        <button className="bg-[#454ADE] p-3 " onClick={moreIndex}>
          Next Page
        </button>
      </div>
    </span>
  );
}
