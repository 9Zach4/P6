import Logo from '../../assets/logo.png'; 

export function Header() {
    return (
        <header className="header">
            <h1>
                <img src = {Logo} alt="logo de Kasa, location d'appartement" />
            </h1>
        </header>
    )
}

export default Header;