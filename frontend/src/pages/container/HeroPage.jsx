import React from "react";
import Drawer from "../../components/Drawer";
import CarouselComponent from "../../components/CarouselComponent";
import { IoMdPin } from "react-icons/io";

const HeroPage = () => {
  return (
    <div className="mb:20 lg:mb-32">
      <>
        <CarouselComponent />
        <Drawer />
      </>
    </div>
  );
};

export default HeroPage;
