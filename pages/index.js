import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/Home.module.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Header from "@/components/Header";
import { useAccount } from "wagmi";

export default function Home() {
  const { address } = useAccount();

  return (
    <>
      <Head>
        <title>Vesting Dapp</title>
        <meta name="description" content="vesting contract" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <section className="center">
          <Link href="/Register">{!address && <ConnectButton />}</Link>
        </section>
      </main>
    </>
  );
}
