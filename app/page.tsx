import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.largeText}>
        <div>
          <h1>Quentin</h1>
          <h2>Developer</h2>
        </div>
        <div>
          <h2>Fullstack</h2>
          <h1>Chown</h1>
        </div>
      </div>
    </main>
  );
}
