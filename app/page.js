import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.scss";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Image
        className={styles.logo}
        width={600}
        height={600}
        src="/logo.png"
        alt=""
      />
      <Image
        className={styles.outline}
        width={620}
        height={620}
        src="/outline.png"
        alt=""
      />
    </main>
  );
}
