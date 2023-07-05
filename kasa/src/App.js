//import 
import React from "react";
import Home from "./pages/home/Home";


import { createBrowserRouter, RouterProvider } from "react-router-dom";
  


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
  
		<RouterProvider router={router}/> 
  
		</>

  );
}

export default App;


