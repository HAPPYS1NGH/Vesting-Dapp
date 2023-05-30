import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Register from "@/components/Register";

export default function Home() {
  return (
    <>
      <Head>
        <title>Vesting Dapp</title>
        <meta name="description" content="vesting contract" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Register />
    </>
  );
}
