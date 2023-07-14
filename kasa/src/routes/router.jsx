import { Outlet, createBrowserRouter } from "react-router-dom";
import App from "../App";
import Footer from "../layout/footer/Footer";
import Navbar from "../components/navbar/Navbar";
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
        <App />
      
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
    element: 
    <>
 
    <h1>accomodation</h1>
    
   </>
}
  ]
}
]);
  