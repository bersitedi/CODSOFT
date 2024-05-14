import React from "react";
import MainLayout from "../../components/MainLayout";
import Hero from "../container/HeroPage";
import Articles from "../container/Articles";
import Cta from "../container/Cta";
import Card from "../../components/Card";
import About from "../container/About";

const HomePage = () => {
  return (
    <MainLayout>
      <Hero />
      <Card />
      <Articles />
      <About />
      <Cta />
    </MainLayout>
  );
};

export default HomePage;
