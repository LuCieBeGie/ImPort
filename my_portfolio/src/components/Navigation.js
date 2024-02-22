import React from 'react';
import './Navigation.css'
import { FaWindowClose } from "react-icons/fa";
import { Link as LinkScroll } from 'react-scroll/modules'
import * as Scroll from "react-scroll";
import { NavLink } from 'react-router-dom';



function Navigation({ isOpen, toggle }) {

    return (<>
        <div className={`${isOpen ? "navMenuContainerOpen" : "navMenuContainerClose"}`}
            isOpen={isOpen}
            onClick={toggle}
        >
            <span className='mobileMenuClose'>
                <FaWindowClose />
            </span>
            <ul className="mobileMenuWrapper">
                <li>
                    <LinkScroll to='home'
                    >
                        Home
                    </LinkScroll>

                </li>
                <li>
                    <LinkScroll to='skills'
                    >
                        Skills
                    </LinkScroll>

                </li>
                <li>
                    <LinkScroll to='projects'
                    >
                        Projects
                    </LinkScroll>

                </li>
                <li>
                    <LinkScroll to='about'
                    >
                        About
                    </LinkScroll>
                </li>
                <li className='sendEmail'>
                    <NavLink
                        to="/Portfolio/contactMe"
                    >
                        Contact
                    </NavLink>
                </li>
            </ul>
        </div >
    </>)
}

export default Navigation