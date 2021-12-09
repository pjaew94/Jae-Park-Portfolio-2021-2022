import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import React from "react";
import Head from 'next/head'
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <React.StrictMode>
      <AnimatePresence exitBeforeEnter>

      <Head>
        <title>Jae Park Portfolio</title>
        <link rel="icon" href="/upRightArrow.svg" />
      </Head>
      <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </React.StrictMode>
  );
}

export default MyApp;
