import type { NextPage } from "next";
import Head from "next/head";
import Meta from "components/meta/meta";
import Home from "modules/Home";

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <Meta title="Home" />
      </Head>
      <Home />
    </>
  );
};

export default HomePage;
