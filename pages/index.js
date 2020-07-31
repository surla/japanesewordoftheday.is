import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Japanse Word of the Day is...</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>japanesewordoftheday.is</h1>

        <p className={styles.description}>Daily japanese language lessons.</p>
      </main>

      <footer className={styles.footer}>Created by Joseph Surla</footer>
    </div>
  );
}
