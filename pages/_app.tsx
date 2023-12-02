import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Head>
        <title>Weida&apos;s Portfolio Website</title>
        <meta name="description" content="Weida's Portfolio Website" />
        <link rel="icon" href="/duck.svg" />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
