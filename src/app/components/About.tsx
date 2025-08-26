"use server";
import styles from "./about.module.css";
export default async function About() {
  return (
    <ul
      className={`${styles.about} 
      flex container items-strech text-(--font-P) gap-2
      max-sm:flex-col
      `}
    >
      <li
        className="text-7xl text-center 
        max-2xl:text-5xl max-lg:text-3xl p-3"
      >
        <h1>
          Welcome <br />
          To
          <br /> Norview
        </h1>
      </li>

      <li
        className="text-5xl text-balance
      max-2xl:text-3xl max-lg:text-2xl"
      >
        <h3>
          This blog site was created with a simple objective: to give you a
          friendly space for leaving comments.
        </h3>
      </li>
    </ul>
  );
}
