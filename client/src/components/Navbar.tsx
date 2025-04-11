import React from 'react'
import './Navbar.css'

const Navbar: React.FC = () => {
    return (
        <nav className='navbar'>
            <div className="navbar-title">Stock Search</div>
            <div className="navbar-links">
                <button className="nav-btn">Search</button>
                <span>Watchlist</span>
                <span>Portfolio</span>
            </div>
        </nav>
    );
}

export default Navbar