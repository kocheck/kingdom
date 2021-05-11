import styles from "../../styles/Home.module.css";
import { Post } from "../../components/Post";
import { posts } from "../../getAllPosts";

export default function Home() {
    return (
        <>
            <h1 className={styles.title}>
                Documents
            </h1>
            <p className={styles.description}>
            Religious Historical Data Project
            </p>
            <div className={styles.grid}>
                {posts.map((post) => (
                    <Post key={post.link} post={post} />
                ))}
            </div>
        </>
    );
}
