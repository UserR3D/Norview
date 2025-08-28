"use client";
import Link from "next/link";
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
    <div className="container">
      {state[index!].map((item) => (
        <ul
          key={item.id}
          className={`grid grid-cols-3 mt-2 border border-solid rounded-sm items-center text-(--smoky-black) gap-5 text-justify bg-(--posts-bg)
             max-md:grid-cols-1`}
        >
          <li className="pt-3 px-3">
            <h2>{item.title}</h2>
          </li>
          <li
            className=" max-h-[180px] text-ellipsis  overflow-hidden"
            onClick={(e) => {
              flowToggle(e);
            }}
          >
            <p>{item.content}</p>
          </li>
          <Link href={`/user/${item.author.email}`}>
            <li>
              <h4 className="bg-[#506C64] text-center p-1 text-[#fff] ">
                {item.author.email}
              </h4>
            </li>
          </Link>
        </ul>
      ))}
      <div className="mb-4 mt-4 flex justify-between">
        <button className="bg-[#454ADE] p-3" onClick={minusIndex}>
          Before Page
        </button>
        <button className="bg-[#454ADE] p-3" onClick={moreIndex}>
          Next Page
        </button>
      </div>
    </div>
  );
}
