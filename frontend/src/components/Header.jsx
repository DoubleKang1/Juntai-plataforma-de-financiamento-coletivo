import { Link } from "react-router-dom";
import styles from './Header.module.css';
import logo from '../assets/Símbolo 2.png';

function Header() {
  return (
    <header className={styles.header}>
      {/* Logo centralizada no topo */}
      <div className={styles.logo}>
        <img src={logo} alt="Juntaí" />
      </div>

      {/* Barra de navegação abaixo da logo */}
      <div className={styles.navBar}>
        <nav>
          <ul className={styles.nav}>
            <li className={styles.navItem}>
              <Link to="/campanhas" className={styles.link}>Campanhas</Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/sobre" className={styles.link}>Sobre nós</Link>
            </li>
          </ul>
        </nav>
        <button className={styles.entrarBtn}>Entrar</button>
      </div>
    </header>
  );
}

export default Header;
