import React, { useState } from "react"
import './Navbar.css'
import logo from '../../assets/Logo Horizontal 4.png'

const Navbar = () => {

    const [menuAtivo, setMenuAtivo] = useState(false);

    const toggleMenu = () => {
        setMenuAtivo(!menuAtivo);
    };

    return(
        <header>
            <nav>
                <a href="/">
                <img src={logo} className="logo"/>
                </a>

                <div className={`mobile-menu ${menuAtivo ? 'active' : ''}`} onClick={toggleMenu}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
                <ul className={`nav-list ${menuAtivo ? 'active' : ''}`} onClick={toggleMenu}>
                    <li><a href="#">Campanhas</a></li>
                    <li><a href="#">Sobre nós</a></li>
                    <li><a href="#">Entrar</a></li>
                </ul>
            </nav>
            
        </header>
    )
}

export default Navbar