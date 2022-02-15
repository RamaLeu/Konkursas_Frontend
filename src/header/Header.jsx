import React from 'react'

import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className="siteName">
                <Link to="/" className="logoBtn"><h2>Project Mars</h2></Link>
            </div>
            <nav>
                <Link to="/" className="navBtn">Home</Link>
            </nav>
        </header>
    )
}

export default Header
