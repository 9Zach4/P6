import { Link } from 'react-router-dom';
import './navbar.scss';
const currentRoute = window.location.pathname;  

function Navbar() {
  return (
    <nav className="navbar">
    <ul className="navbar_list">
        <li className={currentRoute === "/" ? "navbar_list_item_active" : "navbar_list_item"}>
            <Link to="/">
                Accueil
            </Link>
        </li>
        <li className={currentRoute === "/about" ? "navbar_list_item_active" : "navbar_list_item"}>
            <Link to="/about/">
                A propos
            </Link>    
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
