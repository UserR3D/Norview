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
    <div className="mb-(--mg-l)">
      <ul
        className={`container grid grid-cols-3 gap-[20px] mb-[20px] max-sm:grid-cols-1`}
      >
        {state[index!].map((item) => (
          <li
            key={item.id}
            className={`flex flex-col rounded-sm h-[300px] justify-self-stretch text-(--smoky-black) gap-5 text-justify bg-(--posts-bg) overflow-hidden
             max-md:w-[300px] `}
            onClick={(e) => {
              flowToggle(e);
            }}
          >
            <h2 className="pt-3 px-3  text">{item.title}</h2>
            <p className="px-3 grow">{item.content}</p>
            <h4 className="w-[100%] bg-[#506C64] text-center p-1 text-[#fff] sticky -bottom-1">
              {item.author.email}
            </h4>
          </li>
        ))}
      </ul>
      <div className="mt-8 flex justify-around">
        <button className="bg-[#454ADE] p-3 " onClick={minusIndex}>
          Before Page
        </button>
        <button className="bg-[#454ADE] p-3 " onClick={moreIndex}>
          Next Page
        </button>
      </div>
    </div>
  );
}
