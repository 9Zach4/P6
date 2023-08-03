import React from "react";
import "./notFound.scss";
import Main from "../../layout/Main/Main";
import { Link } from "react-router-dom";
import Navbar from "../../layout/Navbar/Navbar";
import Footer from "../../layout/Footer/Footer";

function NotFound() {
    return (
        <>
          <Navbar/>
          <Main>
            <div className="errorPage">
               <h1>404</h1>
               <h2>Oups! La page que vous demandez n'existe pas</h2>
               <Link to="/">Retourner sur la page d'accueil</Link>
            </div>
          </Main>
          <Footer/>
        </>

    )
}

export default NotFound;