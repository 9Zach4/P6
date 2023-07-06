import Logo from '../../assets/logo.png'; 
import Navbar from '../navbar/Navbar';
import './Header.scss'

export function Header() {
    return (
        <header className="header">
            <h1>
                <img src = {Logo} alt="logo de Kasa, location d'appartement" />
            </h1>
            <Navbar />
        </header>
    )
}


export default Header;