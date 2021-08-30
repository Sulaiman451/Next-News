import { Toolbar } from "../components/Toolbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="page-container">
      <Toolbar />

      <div className={styles.main}>
        <h1>Next News</h1>
        <h3>
          A Next.js app for accessing the latest news articles via the News API.
        </h3>
      </div>
    </div>
  );
}
