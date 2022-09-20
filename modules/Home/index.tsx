import Header from "components/Layout/Header";
import Banner from "modules/banner";
import React from "react";

const classes = {
  container: `relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]`,
  main: "relative pl-4 pb-24 lg:space-y-24 lg:pl-16 ",
};

const Home = () => {
  return (
    <section className={classes.container}>
      <Header />

      <main className={classes.main}>
        <Banner />
        <section className="md:space-y-24"></section>
      </main>
    </section>
  );
};

export default Home;
