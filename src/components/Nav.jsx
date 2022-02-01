import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import search from '../static/search.png'
import Hamburger from './Hamburger'
import 'animate.css';
import axios from 'axios';

const Nav = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(true);
    const [searchParam, setSearchParam] = useState([]);

    const toggleHamburger = () => {
        setIsOpen(!isOpen);
    }

    const toggleSearch = () => {
        setSearchOpen(!searchOpen);
    }

    return (
        <div className="container">
            <div className="topnav">
                <img src={search} alt="search icon" onClick={toggleSearch} />
                <Link to="/">
                    <a href="#home" className="name">ZESTY</a>
                </Link>
                <div className="hamburger" onClick={toggleHamburger}>
                    <Hamburger isOpen={isOpen} />
                </div>
            </div>
            {isOpen ? (
                <div className="myLinks animate__animated animate__fadeInRight">
                    <a href="#news">News</a>
                    <a href="#contact">Contact</a>
                    <a href="#about">About</a>
                </div>
            ) : <p className="empty"></p>}
            {searchOpen ? (
                <p className="empty"></p>
            ) :
                <form className='searchForm animate__animated animate__fadeInLeft'>
                    <input type="text" onChange={(e) => setSearchParam(e.target.value)} placeholder='ex: spaghetti' className='searchBar' />
                    <Link to={`/search/${searchParam}`}>
                        <input type="submit" value="&#x2714;" className='searchSubmit' />
                    </Link>
                </form>
            }
        </div>
    )
}

export default Nav;