import React, { useState } from "react"
import { Link } from "react-router-dom" 
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
                <Link to="/">
                <img src={logo} className="logo"/>
                </Link>

                <div className={`mobile-menu ${menuAtivo ? 'active' : ''}`} onClick={toggleMenu}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
                <ul className={`nav-list ${menuAtivo ? 'active' : ''}`} onClick={toggleMenu}>
                    <li><Link to="#">Campanhas</Link></li>
                    <li><Link to="#">Sobre nós</Link></li>
                    <li><Link to="#">Entrar</Link></li>
                </ul>
            </nav>
            
        </header>
    )
}

export default Navbar