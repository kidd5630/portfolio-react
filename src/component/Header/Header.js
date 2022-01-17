import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import Nav from './Nav.js';

const Header = () => {
    return (
        <div className="header">
            <div className="name">Charles Suitt</div>
            <Nav />
        </div>
    )
}

export default Header;

