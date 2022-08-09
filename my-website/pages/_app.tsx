import "../styles/globals.css";
import "../styles/homepage.scss";
import "../styles/navbar.scss";
import "../styles/footer.scss";
import "antd/dist/antd.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
