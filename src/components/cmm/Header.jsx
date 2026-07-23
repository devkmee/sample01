import { Link } from 'react-router-dom';

function Header() {
    return (
        <Link to="/" style={{ textDecoration: 'none' }}>
            <header className="bg-dark text-white p-3" role="button" tabIndex="0" style={{ cursor: 'pointer' }}>
                <img src="/header.png" alt="Header" width="100%" height="200px" />
            </header>
        </Link>
    );
}

export default Header;
