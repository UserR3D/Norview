"use client";
import Link from "next/link";
import styles from "./nav.module.css";
import LogOut from "./LogOut";
import React from "react";

export default function Nav({
  username,
  role,
}: {
  username: string | undefined;
  role: string | undefined;
}) {
  const [mobile, setMobile] = React.useState<boolean>(false);
  const [active, setActive] = React.useState<boolean>(false);
  function activeMobile() {
    setActive(!active);
  }
  return (
    <nav
      className={`${styles.navMain}  
      `}
    >
      <ul
        className="flex container justify-between bg-(--bg-fgray) text-(--font-P) text-4xl px-[90px] relative
      max-xl:text-2xl max-lg:text-3xl max-lg:px-[20px] max-sm:text-base max-md:gap-2 max-sm:hidden"
      >
        <li>
          <Link href={"/"}>
            <h2>Norview</h2>
          </Link>
        </li>

        <li>
          <Link href={"/posts/createPost"}>Create+</Link>
        </li>
        <li>
          <Link href={"/posts"}>Forum</Link>
        </li>
        {username ? (
          <ul className={`${styles.navUser} flex-col`}>
            <li className="relative">{username}</li>
            <div>
              <li>
                <Link href={`/user/${username}`}>Posts</Link>
              </li>
              {role === "ADMIN" ? (
                <li>
                  <Link href={"/users"}>Register Users</Link>
                </li>
              ) : (
                ""
              )}
              <li>
                <LogOut />
              </li>
            </div>
          </ul>
        ) : (
          <li>
            <Link href={"/login"}>Login</Link>
          </li>
        )}
      </ul>
      <ul className={`${styles.navMobile} flex flex-col`}>
        <button
          onClick={() => setMobile(!mobile)}
          className={`${styles.navButton}`}
        ></button>

        {mobile ? (
          <ul
            className={`bg-(--bg-fgray) top-6 absolute p-4 flex-col w-[150px]`}
            style={mobile ? { display: "flex" } : { display: "none" }}
          >
            <li>
              <Link href={"/"}>
                <h2>Norview</h2>
              </Link>
            </li>
            <li>
              <Link href={"/posts/createPost"}>Create+</Link>
            </li>
            <li>
              <Link href={"/posts"}>Forum</Link>
            </li>
            {username ? (
              <ul>
                <li className="relative" onClick={activeMobile}>
                  {username} {active ? "⬏" : "⬎"}
                </li>
                <div
                  style={
                    active
                      ? { opacity: "1", display: "block" }
                      : { display: "none", opacity: "0" }
                  }
                >
                  <li>
                    <Link href={`/user/${username}`}>Posts</Link>
                  </li>
                  {role === "ADMIN" ? (
                    <li>
                      <Link href={"/users"}>Register Users</Link>
                    </li>
                  ) : (
                    <></>
                  )}
                  <li>
                    <LogOut />
                  </li>
                </div>
              </ul>
            ) : (
              <li>
                <Link href={"/login"}>Login</Link>
              </li>
            )}
          </ul>
        ) : (
          <></>
        )}
      </ul>
    </nav>
  );
}
