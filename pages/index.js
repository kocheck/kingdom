import styles from "../styles/Home.module.css";
import { Post } from "../components/Post";
import { posts } from "../getAllPosts";

export default function Home() {
    return (
   <>
                <h1 className={styles.title}>
                    Welcome to <a href="https://nextjs.org">Next.js!</a>
                </h1>

                <p className={styles.description}>
                    Get started by editing{" "}
                    <code className={styles.code}>pages/index.js</code>
                </p>
                <div className={styles.grid}>
                    {posts.map((post) => (
                        <Post key={post.link} post={post} />
                    ))}
                </div>
                <div>
                    <p style={{ textAlign: "right" }}>
                        <a
                            rel="alternate"
                            type="application/rss+xml"
                            href="/static/rss-feed.xml"
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M2.9 16.9A3 3 0 007 21 3 3 0 003 17zm2.8 2.8a1 1 0 11-1.4-1.4 1 1 0 011.4 1.4zM5 12a1 1 0 000 2 5 5 0 015 5 1 1 0 102 0 7 7 0 00-7-7zm0-4a1 1 0 000 2 9 9 0 019 9 1 1 0 102 0A11 11 0 005 8zm10.6.4A15.1 15.1 0 005 4a1 1 0 000 2 13 13 0 0113 13 1 1 0 102 0c0-4-1.6-7.8-4.4-10.6z"
                                    fill="currentColor"
                                />
                            </svg>
                        </a>{" "}
                    </p>
                </div>
</>
    );
}
