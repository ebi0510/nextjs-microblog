import Head from "next/head";
import styles from "./Layout.module.css"
import utilStyle from "../src/styles/utils.module.css"

const name = "Haru Code";
export const siteTitle = "Next.js Blog"

function Layout({children}) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="/" href="/favicon.ico"></link>
            </Head>
            <header className={styles.header}>
                <img src="/images/profile (1).png" className={styles.borderCircle}></img>
                <h1 className={utilStyle.heading2Xl}>{name}</h1>
            </header>
            <main>{children}</main>
        </div>
    );
}

export default Layout;