import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const MainLayout = ({ children }) => {
  const navItemsList = [
    { name: "Home", type: "link" },
    { name: "Articles", type: "link" },
    { name: "Pages", type: "dropdown", items: ["About us", "Contact us"] },
    { name: "Pricing", type: "link" },
    { name: "FAQ", type: "link" },
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
