import { Link } from "react-router-dom";

function Header(){
    return(
        <header style={{padding: 'irem', backgroundColor: '#eee'}}>
            <nav>
                <link to="/" style={{marginRight: 'irem'}}>Início</link>
                <link to="/campanhas" style={{marginRight: 'irem'}}>Campanhas</link>
            </nav>
        </header>
    );
}

export default Header;