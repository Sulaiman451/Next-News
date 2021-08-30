import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Toolbar } from "../components/Toolbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Next News</title>
      </Head>
      <div className="page-container">
        <Toolbar />

        <div className={styles.main}>
          <h1>Next News</h1>
          <h3>
            A Next.js app for accessing the latest news about England via the
            News API.
          </h3>

          <div className={styles.footer}>
            <footer>Next News &#169; 2021 by Sulaiman Rahman</footer>
          </div>
        </div>
      </div>
    </>
  );
}
