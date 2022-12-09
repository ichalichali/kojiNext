import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import MyHeader from "../components/header/header";
import MyPromo from "../components/promo/promo";
import MyCards from "../components/cards/cards";

export default function Home() {
  return (
    <div>
      <Head>
        <title className="text-3xl font-bold underline">
          KOJI - rooms for you
        </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <MyHeader />
        <MyPromo />
      </main>
    </div>
  );
}
