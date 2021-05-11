import Link from "next/link";

export default function Header() {
  return (
    <nav>
      <h1>Next'Blog</h1>
      <div>
      <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/">
          <a>Blog</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </div>
    </nav>
  );
}
