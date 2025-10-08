"use client";
import React from "react";
import ForumPost from "../components/ForumPost";

export default function LoadingPosts({ state }: { state: PostAuthor[][] }) {
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
        <div key={item.id}>
          <ForumPost data={item} />
        </div>
      ))}
      <div className="mb-4 mt-4 flex justify-between text-[#fff]">
        <button
          style={!index ? { opacity: "0.6", cursor: "not-allowed" } : {}}
          className="bg-[#454ADE] p-3"
          onClick={minusIndex}
        >
          Before Page
        </button>
        <button
          style={
            index == state.length - 1
              ? { opacity: "0.6", cursor: "not-allowed" }
              : {}
          }
          className="bg-[#454ADE] p-3 "
          onClick={moreIndex}
        >
          Next Page
        </button>
      </div>
    </div>
  );
}
