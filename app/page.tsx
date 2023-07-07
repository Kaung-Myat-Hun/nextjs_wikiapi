import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={`text-red-500`}>Hello</h1>
    </main>
  );
}
