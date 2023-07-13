//import 
import React from "react";
import Navbar from "./components/navbar/Navbar.jsx";  
import Banner from "./components/banner/Banner.jsx";
import LocationGrid from "./components/locationGrid/LocationGrid.jsx";
import "./App.css";
import Main from "./components/main/Main.jsx";
import Footer from "./components/footer/Footer.jsx";
//creation du router  avec la methode createBrowserRouter



function App() {
  return (
    
    <div>
      <Navbar />
      <Main>
        <Banner />
        <LocationGrid />
      </ Main>
      <Footer />
    </div>

  );
}

export default App;


