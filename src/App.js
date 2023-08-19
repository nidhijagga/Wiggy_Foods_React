import React, { lazy, Suspense, useContext, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import ContactUs from "./components/ContactUs";
import Profile from "./components/Profile";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
// import Instamart from "./components/Instamart";

const Instamart = lazy(() => import("./components/Instamart"));

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Shimmer from "./components/Shimmer";
const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => {
  const { user } = useContext(UserContext);
  const [userState, setUserState] = useState(user);
  return (
    <>
      <UserContext.Provider value={{userState, setUserState}}>
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile name="Nidhi" />,
          },
        ],
      },
      {
        path: "contact",
        element: <ContactUs />,
      },
      {
        path: "/res/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

root.render(<RouterProvider router={appRouter} />);

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
