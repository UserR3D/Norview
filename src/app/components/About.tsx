"use server";
import styles from "./about.module.css";
export default async function About() {
  return (
    <ul
      className={`${styles.about} 
      flex content-center container justify-center content-center items-stretch text-(--font-P) gap-2
      max-sm:flex-col
      `}
    >
      <li
        className="text-7xl text-center self-stretch
        max-2xl:text-5xl max-lg:text-3xl"
      >
        <h1>
          Welcome <br />
          To
          <br /> Norview
        </h1>
      </li>

      <li
        className="text-5xl text-center
      max-2xl:text-3xl max-lg:text-lg"
      >
        <h3>
          This blog site was created with a simple objective: to give you a
          friendly space for leaving comments.
        </h3>
      </li>
    </ul>
  );
}
