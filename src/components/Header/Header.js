import React from 'react';
import logo from '../../logo.png'
import './Header.css'

const Header = () => {
    return (
        <section className='header'>
            <div className="container">
                <nav>
                    <img src={logo} alt="" />
                    <div className="menu">
                        <ul>
                            <li><a href="/home">Home</a></li>
                            <li><a href="/home">About</a></li>
                            <li><a href="/home">Menu</a></li>
                            <li><a href="/home">Services</a></li>
                            <li><a href="/home">Contact</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
            
        </section>
    );
};

export default Header;