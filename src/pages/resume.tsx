import Head from "next/head";
import styles from "../styles/pages/Resume.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Open Currículo Vitae</title>
      </Head>
      <h2>OPEN CV!</h2>
      <section>
        <div></div>
      </section>
    </div>
  );
}
