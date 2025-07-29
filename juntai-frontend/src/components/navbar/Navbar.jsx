import React from "react"
import './Navbar.css'
import logo from '../../assets/Logo Horizontal 4.png'

const Navbar = () => {
    return(
        <header className="header">
            <a href=""><img src={logo} className="logo"/></a>

            <nav className="navbar">
                <a href="">Campanhas</a>
                <a href="">Sobre nós</a>
                <a href="">Entrar</a>
            </nav>
        </header>
    )
}

export default Navbar