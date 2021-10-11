import { AppProps } from "next/app";
import "typeface-dm-mono/index.css";
import "tailwindcss/tailwind.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
