import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "../components/ui/button";

export default function Home() {
  console.log("Hello World")
  return (
    <div className={styles.page}>
      <main className={styles.main}>
      </main>
    </div>
  );
}
