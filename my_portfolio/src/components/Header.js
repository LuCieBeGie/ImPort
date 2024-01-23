import { Link, NavLink, Outlet } from "react-router-dom";
// import { Link, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import { Link as LinkScroll } from 'react-scroll/modules'
import React, { useEffect } from "react"

import { FaAddressCard } from 'react-icons/fa'
import { GoHome, GoProject } from 'react-icons/go'
import { GiSkills } from 'react-icons/gi'
import { ImEnvelop } from 'react-icons/im'
import Tooltip from '@mui/material/Tooltip';
import logo from '../assets/images/LOGO.png'

import './Header.css';
import { Toolbar } from "@mui/material";
import Pages from "../pages";

function Header() {

    const style = { color: "white", fontSize: "2em" }

    return (<>

        <nav className="navbar sticky-top">
            <div className="container-fluid" >
                <Tooltip>
                    <Link className="navbar-brand">
                        <img src={logo} />
                    </Link>
                </Tooltip>
                <Toolbar className="wrapper">
                    <Tooltip className="menu_nav_button"
                        title={<h2
                            style={{ color: "lightblue" }}>Home</h2>}>
                        <Link to="/Portfolio/"  >
                            <GoHome style={style} className="nav_link" />
                        </Link>
                    </Tooltip>
                    <LinkScroll
                        activeClass='active'
                        to='skills'
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                        Skills
                    </LinkScroll>
                    <LinkScroll
                        activeClass='active'
                        to='projects'
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}>
                        Projects
                    </LinkScroll>
                    <Tooltip className="menu_nav_button"
                        title={<h2
                            style={{ color: "lightblue" }}>About Me</h2>}>
                        <Link to="/Portfolio/aboutMe"  >
                            <FaAddressCard style={style} />
                        </Link>
                    </Tooltip>
                    <Tooltip className="menu_nav_button"
                        title={<h2
                            style={{ color: "lightblue" }}>Contact Me</h2>}>
                        <Link to="/Portfolio/contactMe"  >
                            <ImEnvelop style={style} />
                        </Link>
                    </Tooltip>
                </Toolbar>
            </div>
        </nav>
        {/* <Outlet /> */}
    </>)
}
export default Header