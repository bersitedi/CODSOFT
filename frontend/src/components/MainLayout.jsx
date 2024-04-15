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
      items: [
        "Project 1",
        "Project 2",
        "Project 3",
        "Project 4",
        "Project 5",
        "Project 6",
        "Project 7",
        "Project 8",
      ],
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
