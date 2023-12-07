"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function Home() {
  const firstName = useRef<HTMLHeadingElement>(null);
  const lastName = useRef<HTMLHeadingElement>(null);
  useLayoutEffect(() => {
    gsap.to(firstName.current, {
      x: "0",
    });
  });
  return (
    <main className={styles.main}>
      <div className={styles.largeText}>
        <div>
          <h1 ref={firstName}>Quentin</h1>
          <h2>Developer</h2>
        </div>
        <div>
          <h2>Fullstack</h2>
          <h1 ref={lastName}>Chown</h1>
        </div>
      </div>
    </main>
  );
}
