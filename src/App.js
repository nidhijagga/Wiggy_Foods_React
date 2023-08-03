import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
const root = ReactDOM.createRoot(document.getElementById("root"));

/**
 * Header
 *  - Logo
 *  - Nav
 *  - Cart
 * Body
 *  - Search bar
 *  - Resturant List
 *    - Resturant Card
 *      - Image
 *      - Name
 *      - Rating
 *      - Casines
 * Footer
 *  - Links
 *  - Copyright
 */






const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

root.render(<AppLayout />);
