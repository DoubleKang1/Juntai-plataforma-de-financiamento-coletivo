import { Link } from "react-router-dom";

function Header(){
    return(
        <header style={{padding: 'irem', backgroundColor: '#eee'}}>
            <nav>
                <Link to="/" style={{marginRight: 'irem'}}>Início</Link>
                <Link to="/campanhas" style={{marginRight: 'irem'}}>Campanhas</Link>
            </nav>
        </header>
    );
}

export default Header;