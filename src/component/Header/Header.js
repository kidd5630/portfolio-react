import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'

const Header = () => {
    return (
        <div className="header">
            <div className="name">Charles Suitt</div>
            <nav>
                <ul className="navSection">
                    <Link to="/home" className="link">
                        <li className="navBtn">Home</li>
                    </Link>
                    <Link to="/about" className="link">
                        <li className="navBtn">About</li>
                    </Link>
                    <Link to="/projects" className="link">
                        <li className="navBtn">Projects</li>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}

export default Header;