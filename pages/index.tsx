import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "../components";
import { Banner } from "../modules";

const classes = {
  container: `relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]`,
  main: "relative pl-4 pb-24 lg:space-y-24 lg:pl-16 ",
};

const Home: NextPage = () => {
  return (
    <section className={classes.container}>
      <Head>
        <title>Home - Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={classes.main}>
        <Banner />
        <section className="md:space-y-24"></section>
      </main>
    </section>
  );
};

export default Home;
