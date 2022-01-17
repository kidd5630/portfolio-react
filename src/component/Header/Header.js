import React from 'react';
import './headerStyle.css';
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

