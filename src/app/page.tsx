import Image from "next/image";

import { Search } from "@/components/Search";

import styles from "./page.module.css";

import HEADER_IMAGE from "../app/logo.png";

export default function Home() {
  return (
    <main className={styles.wrapper}>
      <Image
        src={HEADER_IMAGE}
        alt={"헤더 이미지"}
        className={styles.headerImage}
      />
      <Search />
    </main>
  );
}
