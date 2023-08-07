import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import ContactUs from "./components/ContactUs";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet/>
      <Footer />
    </> 
  );
};

const appRouter = createBrowserRouter([
  {
    path : "/", 
    element : <AppLayout/>,
    errorElement : <Error/>,
    children : [
      {
        path : "/",
        element : <Body/>
      },
      {
        path: "/about",
        element: <About/>, 
      },
      {
        path : "/contact",
        element:<ContactUs />,
      },
      {
        path : "/res/:id",
        element : <RestaurantMenu/>
      }
    ]
  },

])

root.render(<RouterProvider router={appRouter}/>);







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