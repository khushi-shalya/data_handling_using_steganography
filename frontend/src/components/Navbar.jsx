import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return (
    <nav className="navbar">
        <div className="logo">Infostega</div>
        <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="components/Encode">Encode</Link></li>
            <li><Link to ="components/Decode">Decode</Link></li>
            <li><Link to ="components/About">About</Link></li>
        </ul>
    </nav>
    );
}

export default Navbar;
