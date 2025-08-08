"use server";
import styles from "./about.module.css";
export default async function About() {
  return (
    <ul
      className={`${styles.about} 
      flex content-center container justify-center content-center items-stretch text-(--font-P) gap-2`}
    >
      <li
        className="text-7xl text-center self-center
      max-[90rem]:text-5xl
      "
      >
        <h1>
          Welcome <br />
          To
          <br /> Norview
        </h1>
      </li>
      <li className="text-5xl text-center">
        <h3>
          This blog site was created with a simple objective: to give you a
          friendly space for leaving comments.
        </h3>
      </li>
    </ul>
  );
}
