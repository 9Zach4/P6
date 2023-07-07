import Header from "../../components/header/Header";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    
      
        <div className="not-found">
            <Header />
            <div className="not-found__content">
                <h1 className="not-found__content__title">404</h1>
                <p className="not-found__content__text">La page que vous recherchez n'existe pas.</p>

            </div>
            <Link to="/" className="not-found__link">Retourner sur la page d'accueil</Link>
        </div>    
  );
}

export default NotFound;