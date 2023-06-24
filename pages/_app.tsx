import "../styles/globals.css";
import { WagmiConfig, createClient } from "wagmi";
import { ethers } from "ethers";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
