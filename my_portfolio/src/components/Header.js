import { Link, NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { Link as LinkScroll } from 'react-scroll/modules'
import React, { useEffect } from "react"
import * as Scroll from "react-scroll";
import './Header.css';

import { FaAddressCard } from 'react-icons/fa'
import { GoHome, GoProject } from 'react-icons/go'
import { GiSkills } from 'react-icons/gi'
import { ImEnvelop } from 'react-icons/im'
import Tooltip from '@mui/material/Tooltip';
import logo from '../assets/images/LOGO.png'
import { Toolbar } from "@mui/material";

function Header() {
    const path = useLocation().pathname;
    const location = path;
    const navigate = useNavigate();
    const scroller = Scroll.scroller;

    const goToPageAndScroll = async (selector) => {
        await navigate("/Portfolio");
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
                <Tooltip>
                    <Link className="navbar-brand">
                        <img src={logo} />
                    </Link>
                </Tooltip>
                {location !== "/Portfolio/aboutMe" ? (
                    <>
                        {" "}
                        <LinkScroll
                            to="home"
                            activeClass='active'
                            spy={true}
                            smooth={true}
                            offset={-75}
                            duration={500}
                        >
                            Home
                        </LinkScroll>
                        <LinkScroll
                            to="skills"
                            activeClass='active'
                            spy={true}
                            smooth={true}
                            offset={-75}
                            duration={500}
                        >
                            Skills
                        </LinkScroll>
                        <LinkScroll
                            to="projects"
                            activeClass='active'
                            spy={true}
                            smooth={true}
                            offset={-75}
                            duration={500}
                        >
                            Projects
                        </LinkScroll>
                        <LinkScroll
                            to="aboutMe"
                            activeClass='active'
                            spy={true}
                            smooth={true}
                            offset={-75}
                            duration={500}
                        >
                            About Me
                        </LinkScroll>
                        <NavLink to="/Portfolio/contactMe">
                            Contact Me
                        </NavLink>
                    </>
                ) : (
                    <>
                        {" "}
                        <button onClick={() => goToPageAndScroll("home")}
                        >Home</button>
                        <button onClick={() => goToPageAndScroll("skills")}>Skills</button>
                        <button onClick={() => goToPageAndScroll("projects")}>Projects</button>
                        <button onClick={() => goToPageAndScroll("aboutMe")}>About Me</button>
                        <NavLink to="/Portfolio/contactMe">Contact Me</NavLink>
                    </>
                )}
            </div>
        </nav>
        <Outlet />
    </>)
}
export default Header