import Link from "next/link";
import styles from "../styles/Nav.module.css";

export default function Header() {
  return (
    <nav className={styles.nav}>
      <Link href="/">
      <a className={styles.logo}>Kingdom of Dust</a>
        </Link>
      <div>
        <Link href="/documents">
          <a>Documents</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </div>
    </nav>
  );
}
