import React, { useState } from "react"
import { Link, NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { Link as LinkScroll } from 'react-scroll/modules'
import * as Scroll from "react-scroll";
import './Header.css';

import Tooltip from '@mui/material/Tooltip';
import logo from '../assets/images/LOGO.png'
import { GiHamburgerMenu } from "react-icons/gi";

function Header({ toggle }) {
    const path = useLocation().pathname;
    const location = path;
    const navigate = useNavigate();
    const scroller = Scroll.scroller;

    const goToPageAndScroll = async (selector) => {
        await navigate("/Portfolio/");
        await scroller.scrollTo(selector, {
            smooth: true,
            spy: true,
            duration: 500,
            offset: -75,
        });
    };

    return (<>

        <nav className="navbar sticky-top">
            <div className="container-fluid" >
                <Tooltip className="logo">
                    <Link className="navbar-brand">
                        <img src={logo} />
                    </Link>
                </Tooltip>
                <button onClick={toggle} className="mobileMenuContainer">
                    <GiHamburgerMenu />
                </button>

                <ul className="menuWrapper">
                    {location !== "/Portfolio/contactMe" ? (
                        <>
                            <li>
                                {" "}
                                <LinkScroll
                                    to="home"
                                    spy={true}
                                    smooth={true}
                                    offset={-75}
                                    duration={500}
                                >
                                    Home
                                </LinkScroll>
                            </li>
                            <li>

                                <LinkScroll
                                    to="skills"
                                    spy={true}
                                    smooth={true}
                                    offset={-50}
                                    duration={500}
                                >
                                    Skills
                                </LinkScroll>
                            </li>
                            <li>

                                <LinkScroll
                                    to="projects"
                                    spy={true}
                                    smooth={true}
                                    offset={-50}
                                    duration={500}
                                >
                                    Projects
                                </LinkScroll>
                            </li>
                            <li>
                                <LinkScroll
                                    to="aboutMe"
                                    spy={true}
                                    smooth={true}
                                    offset={-50}
                                    duration={500}
                                >
                                    About
                                </LinkScroll>
                            </li>
                            <li>
                                <NavLink
                                    to="/Portfolio/contactMe"
                                >
                                    Contact
                                </NavLink>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                {" "}
                                <button onClick={() => goToPageAndScroll
                                    ("home")}>Home</button>
                            </li>
                            <li>
                                <button onClick={() => goToPageAndScroll("skills")}>Skills</button>
                            </li>
                            <li>
                                <button onClick={() => goToPageAndScroll("projects")}>Projects</button>
                            </li>
                            <li>

                                <button onClick={() => goToPageAndScroll("aboutMe")}>About</button>
                            </li>
                            <li>
                                <NavLink to="/Portfolio/contactMe">Contact</NavLink>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </nav>
        <Outlet />
    </>)
}
export default Header