import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Layout from "../../components/Layout";

import utileStyle from "../styles/utils.module.css"


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <Layout>
      <section className={utileStyle.headingMd}>
        <p>私は犬です。わんわん。</p>
      </section>

      <section className={`${utileStyle.headingMd} ${utileStyle.padding1px}`}>
        <h2>📝エンジニアブログ</h2>
        <div className={styles.grid}>
          <article>
            <Link href="/">
              <img src="/images/thumbnail01.jpg" className={styles.thumbnailImage}></img>
            </Link>
            <Link href="/">
              <p className={utileStyle.boldText}>トイプードル</p>
            </Link>
            <small className={utileStyle.lightText}>Feb 23,2020</small>
          </article>
          <article>
            <Link href="/">
              <img src="/images/thumbnail01.jpg" className={styles.thumbnailImage}></img>
            </Link>
            <Link href="/">
              <p className={utileStyle.boldText}>トイプードル</p>
            </Link>
            <small className={utileStyle.lightText}>Feb 23,2020</small>
          </article>
          <article>
            <Link href="/">
              <img src="/images/thumbnail01.jpg" className={styles.thumbnailImage}></img>
            </Link>
            <Link href="/">
              <p className={utileStyle.boldText}>トイプードル</p>
            </Link>
            <small className={utileStyle.lightText}>Feb 23,2020</small>
          </article>
          <article>
            <Link href="/">
              <img src="/images/thumbnail01.jpg" className={styles.thumbnailImage}></img>
            </Link>
            <Link href="/">
              <p className={utileStyle.boldText}>トイプードル</p>
            </Link>
            <small className={utileStyle.lightText}>Feb 23,2020</small>
          </article>
        </div>
      </section>
    </Layout>
  );
}
