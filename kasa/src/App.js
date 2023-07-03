//import 
import React from "react";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import { createBrowserRouter,RouterProvider } from "react-router-dom";
  


//creation du router  avec la methode createBrowserRouter
const router = createBrowserRouter([
  {
    path: "/",
    element: 
      <Home />
  },
  
]);


function App() {
  return (
    
   <>
   <Header />  
		<RouterProvider router={router}/> 
    <Footer />
		</>

  );
}

export default App;


