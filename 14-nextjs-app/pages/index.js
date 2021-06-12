import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>HOME</h1>
      <ul>
        <li>
          <Link href="news/myid-1212">News 1212</Link>
        </li>
      </ul>
    </div>
  );
}
