import { Outlet, createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import Footer from "../layout/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import Accomodation from "../pages/Accomodation/Accomodation";
import React from "react";
import Main from "../layout/main/Main";
import About from "../pages/About/About";
import NotFound from "../pages/notFound/NotFound";

const  HeaderFooter = () => {
    return (
        <>
        <Navbar />
        <Main>
          <Outlet />
        </Main>
        <Footer />
        </>
    );

};

export const router = createBrowserRouter([

   {
    element: <HeaderFooter />,
    errorElement : <NotFound />,
    children: [
    {
      path: "/P6/",
      element: <HomePage />
    }, 
    {
      path : "/about",
      element: <About />
    },
    {
      path : "/accomodation/:id",
      element: <Accomodation />    
    }
  ]
}
]);
  