"use server";
import styles from "./about.module.css";
export default async function About() {
  return (
    <ul
      className={`${styles.about} flex content-center container justify-center items-center text-(--font-P) gap-[10px]`}
    >
      <li className="text-7xl text-center">
        <h1>
          Welcome <br />
          To
          <br /> Norview
        </h1>
      </li>
      <li className="text-6xl text-center">
        <h3>
          This blog site was created with a simple objective: to give you a
          friendly space for leaving comments.
        </h3>
      </li>
    </ul>
  );
}
