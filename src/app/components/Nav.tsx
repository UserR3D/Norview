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
  return (
    <nav
      className={`${styles.navMain} container 
      `}
    >
      <ul
        className="flex justify-between bg-(--bg-fgray) text-(--font-P) text-4xl px-[90px] relative
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
      <ul className={`${styles.navMobile} bg-(--bg-fgray) flex flex-col`}>
        <button
          onClick={() => setMobile((previousState) => !previousState)}
          className={`${styles.navButton}`}
        ></button>

        {mobile ? (
          <ul className={`flex-col ${mobile} ? "flex" : "hidden"`}>
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
