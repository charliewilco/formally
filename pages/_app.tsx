import { AppProps } from "next/app";
import "@reach/listbox/styles.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
