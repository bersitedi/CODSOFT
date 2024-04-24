import React from "react";
import MainLayout from "../../components/MainLayout";
import Hero from "../container/HeroPage";
import Articles from "../container/Articles";
import Cta from "../container/Cta";

const HomePage = () => {
  return (
    <MainLayout>
      <Hero />
      <Articles />
      <Cta />
    </MainLayout>
  );
};

export default HomePage;
