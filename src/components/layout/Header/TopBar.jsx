import React from 'react'
import { FaUser, FaChevronDown } from 'react-icons/fa';
import engFlag from '../../../assets/images/flags/eng.png';
import fraFlag from '../../../assets/images/flags/fra.png';

const TopBar = () => {
   
    return (
        <div className="top-bar" >
            <div className="container">
                <div className="top-bar-wrapper">
                    <div className="top-bar-left">
                        <span>Welcome to Wolmart Store message or remove it!</span>
                    </div>
                    <div className="top-bar-right" >
                        <div className="dropdown">
                            <a href="#">
                                USD
                                <FaChevronDown />
                            </a>
                            <ul className="dropdown-menu">
                                <li><a href="#">USD</a></li>
                                <li><a href="#">EUR</a></li>
                            </ul>

                        </div>
                        <div className="dropdown">
                            <a href="#">
                                <img src={engFlag} alt="English" />
                                ENG
                                <FaChevronDown />
                            </a>
                            <ul className="dropdown-menu">
                                <li><a href="#"><img src={engFlag} alt="English" />ENG</a></li>
                                <li><a href="#"><img src={fraFlag} alt="Feanch" />FRA</a></li>
                            </ul>

                        </div>
                        <div className='link-wrapper' >
                            <div className='divider'></div>
                            <a href="#" className='topbar-link' >Blog</a>
                            <a href="#" className='topbar-link' >Contact Us</a>
                            <a href="#" className='topbar-link' >My Account</a>
                            <div className='sign-login-wrapper' >
                                <a href="#" className='icon-wrap topbar-link' >
                                    <FaUser />
                                    Sign In
                                </a>
                                <span>/</span>
                                <a href="#" className='topbar-link' >Register</a>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopBar