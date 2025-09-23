"use client";
import Link from "next/link";
import React from "react";

export default function LoadingPosts({ state }: { state: Post[][] }) {
  const [index, setIndex] = React.useState<number | undefined>(0);

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
  return (
    <div className="container">
      {state[index!].map((item) => (
        <ul
          key={item.id}
          className={`grid grid-cols-3 mt-2 border border-solid rounded-sm items-center text-(--smoky-black) gap-5 text-justify bg-(--posts-bg)
            even:bg-[#E5E9EB] max-md:grid-cols-1`}
        >
          <li className="pt-3 px-3">
            <Link href={`/posts/${item.id}`}>
              <h2>{item.title}</h2>
            </Link>
          </li>
          <li className="max-h-[150px] px-3 overflow-hidden">
            <Link href={`/posts/${item.id}`}>
              <p>{item.content}</p>
            </Link>
          </li>
          <li>
            <Link href={`/user/${item.author.email}`}>
              <h4 className="bg-[#506C64] text-center p-1 text-[#fff] ">
                {item.author.email}
              </h4>
            </Link>
          </li>
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
