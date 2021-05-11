import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import styles from "../styles/Home.module.css";

export default function Layout({ children, pageTitle, description }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="Description" content={description}></meta>
        <title>{pageTitle}</title>
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>
          <Header />
          <div className="content">{children}</div>
        </main>
      <Footer />
      </div>
    </>
  );
}
