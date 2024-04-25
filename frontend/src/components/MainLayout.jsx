import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const MainLayout = ({ children }) => {
    const navItemsList = [
      { name: "Home", type: "link" },
      { name: "About us", type: "link" },
      {
        name: "Projects",
        type: "dropdown",
        items: [],
      },
      { name: "Services", type: "link" },
      { name: "Contact us", type: "link" },
    ];
  return (
    <div>
      <Header navItemsList={navItemsList} />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
