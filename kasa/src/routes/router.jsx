import { Outlet, createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import Footer from "../layout/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import Accomodation from "../pages/Accomodation/Accomodation";
import React from "react";
import Main from "../layout/main/Main";

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
    children: [
   
    {
      path: "/",
      element: 
        <HomePage />
      
    },
  
    {
    path : "/about",
    element: 
    <>
    
    <h1>about</h1> 
   
    </>
    
    },
{
    path : "/accomodation",
    element: <Accomodation />
    
}
  ]
}
]);
  