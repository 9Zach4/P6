import { Link } from 'react-router-dom';
import './navbar.scss';
import { useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  return (
    <nav className="navbar">
    <ul className="navbar_list">
        <li className={location.pathname === "/" ? "navbar_list_item_active" : "navbar_list_item"}>
            <Link to="/">
                Accueil
            </Link>
        </li>
        <li className={location.pathname === "/about" ? "navbar_list_item_active" : "navbar_list_item"}>
            <Link to="/about">
                A propos
            </Link>    
        </li>
      </ul>
    </nav>
  );
}


export default Navbar;
