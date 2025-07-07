import Image from "next/image";
import styles from "./page.module.css";
import Posts from "../components/posts";

export default async function Home() {
  return <Posts />;
}
