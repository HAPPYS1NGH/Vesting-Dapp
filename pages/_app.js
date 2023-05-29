import "@/styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";

import WalletConnected from "@/components/contexts/WalletConnected";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createClient, useAccount, WagmiConfig } from "wagmi";
import { sepolia } from "wagmi/chains";
// import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from "wagmi/providers/public";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
const { chains, provider } = configureChains([sepolia], [publicProvider()]);

const { connectors } = getDefaultWallets({
  appName: "vesting",
  chains,
});

const wagmiClient = createClient({
  autoConnect: false,
  connectors,
  provider,
});

export default function App({ Component, pageProps }) {
  const account = useAccount();
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  useEffect(() => {
    setIsWalletConnected(account.isConnected);
  }, [account]);

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <WalletConnected.Provider value={isWalletConnected}>
          <Header />
          <Component {...pageProps} />
        </WalletConnected.Provider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
