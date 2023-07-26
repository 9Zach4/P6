import React from "react";
import "./notFound.scss";
import Main from "../../layout/main/Main";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../layout/footer/Footer";

function NotFound() {
    return (
        <>
          <Navbar/>
          <Main>
            <div className="errorPage">
               <h1>404</h1>
               <h2>Oups! La page que vous demandez n'existe pas</h2>
               <Link to="/kasa/">Retourner sur la page d'accueil</Link>
            </div>
          </Main>
          <Footer/>
        </>

    )
}

export default NotFound;