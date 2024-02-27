import React from 'react';
import './Navigation.css'
import { FaWindowClose } from "react-icons/fa";
import { Link as LinkScroll } from 'react-scroll/modules'
import * as Scroll from "react-scroll";
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';



function Navigation({ isOpen, toggle }) {
    const path = useLocation().pathname;
    const location = path;
    const navigate = useNavigate();
    const scroller = Scroll.scroller;
    const scrollStyle = {
        smooth: true,
        spy: true,
        duration: 500,
        offset: -75,
    }

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
        <div className={`${isOpen ? "navMenuContainerOpen" : "navMenuContainerClose"}`}
            isOpen={isOpen}
            onClick={toggle}
        >
            <span className='mobileMenuClose'>
                <FaWindowClose />
            </span>
            <ul className="mobileMenuWrapper">
                {location !== "/Portfolio/contactMe" ? (
                    <>
                        <li>
                            <LinkScroll
                                to='home'
                                spy={true}
                                smooth={true}
                                offset={-75}
                                duration={500}
                                onClick={toggle}
                            >
                                Home
                            </LinkScroll>

                        </li>
                        <li>
                            <LinkScroll
                                to='skills'
                                spy={true}
                                smooth={true}
                                offset={-75}
                                duration={500}
                                onClick={toggle}
                            >
                                Skills
                            </LinkScroll>

                        </li>
                        <li>
                            <LinkScroll
                                to='projects'
                                spy={true}
                                smooth={true}
                                offset={-75}
                                duration={500}
                                onClick={toggle}
                            >
                                Projects
                            </LinkScroll>

                        </li>
                        <li>
                            <LinkScroll
                                to='about'
                                spy={true}
                                smooth={true}
                                offset={-75}
                                duration={500}
                                onClick={toggle}
                            >
                                About
                            </LinkScroll>
                        </li>
                        <li className='sendEmail'>
                            <NavLink
                                to="/Portfolio/contactMe"
                            >
                                Contact Me
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
                        <li className='sendEmail'>
                            <NavLink
                                to="/Portfolio/contactMe"
                            >Contact Me
                            </NavLink>
                        </li>
                    </>
                )}
            </ul>
        </div >
        <Outlet />
    </>)
}

export default Navigation