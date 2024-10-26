// ここにCSSを当てると全てのファイルに適応される
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}