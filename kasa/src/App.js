//import 
import React from "react";
import Home from "./pages/home/Home";
import About from "./pages/about/About";


import { createBrowserRouter, RouterProvider } from "react-router-dom";
  


//creation du router  avec la methode createBrowserRouter
const router = createBrowserRouter([
  {
    path: "/",
    element: 
      <Home />
  },
  {
		path: "/about",
		element: <About />
	},

]);


function App() {
  return (
    
   <>
  
		<RouterProvider router={router}/> 
  
		</>

  );
}

export default App;


