import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

function Header() {
    const navigate = useNavigate();

    return (
        <nav>
            <div className="logo">Tech University</div>
            <ul className="nav-links">
                <li><button onClick={() => navigate("/")}>Home</button></li>
                <li><button onClick={() => navigate("/about")}>About Us</button></li>
                <li><button onClick={() => navigate("/placements")}>Placements</button></li>
                <li><button onClick={() => navigate("/events")}>Events</button></li>
            </ul>
        </nav>
    );
}

export default Header;

