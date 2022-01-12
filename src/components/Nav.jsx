import React, { useState } from 'react'
import search from '../static/search.png'
import Hamburger from './Hamburger'

const Nav = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggleHamburger = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="container">
            <div className="topnav">
                <img src={search} alt="search icon" />
                <a href="#home" className="name">ZESTY</a>
                <div className="hamburger" onClick={toggleHamburger}>
                        <Hamburger isOpen={isOpen}/>
                    </div>
            </div>
            {isOpen ? (
                <div className="myLinks">
                    <a href="#news">News</a>
                    <a href="#contact">Contact</a>
                    <a href="#about">About</a>
                </div>
            ) : <p className="empty"></p>} 
        </div>
    )
}

export default Nav;