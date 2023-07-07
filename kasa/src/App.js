//import 
import React from "react";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import NotFound from "./pages/notFound/notFound";
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
  {
		path: "*",
		element: <NotFound />
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


