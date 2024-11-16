import "../styles/globals.css";
import { AppProps } from "next/app";
import { SharingProvider } from "../contexts/SharingContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SharingProvider>
      <Component {...pageProps} />
    </SharingProvider>
  );
}

export default MyApp;
