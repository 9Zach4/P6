//import 
import React from "react";
import Header from "./components/header/Header";

import { createBrowserRouter,RouterProvider } from "react-router-dom";
  


//creation du router  avec la methode createBrowserRouter
const router = createBrowserRouter([
  {
    path: "/",
    element: 
      <Header />
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


