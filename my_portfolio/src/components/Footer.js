import { Link, NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import * as Scroll from "react-scroll";
import { FaAddressCard } from 'react-icons/fa'
import { GoHome, GoProject } from 'react-icons/go'
import { GiSkills } from 'react-icons/gi'
import { ImEnvelop } from 'react-icons/im';
import { Link as LinkScroll } from "react-scroll";
import { TbBrandLinkedin } from "react-icons/tb";

import './Footer.css';

function Footer() {
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

    const style = { color: "white", fontSize: "2em" }

    return (<>
        <nav className="sticky-bottom">
            <div className="container_footer" >

                <ul className="nav navbar-nav justify-content-center" >
                    {location !== "/Portfolio/contactMe" ? (
                        <>
                            {" "}
                            <li>
                                <LinkScroll
                                    to="home"
                                    spy={true}
                                    smooth={true}
                                    offset={-75}
                                    duration={500}                                >
                                    <GoHome />
                                </LinkScroll>
                            </li>
                            <li>
                                <LinkScroll
                                    to="skills"
                                    spy={true}
                                    smooth={true}
                                    offset={-75}
                                    duration={500}
                                >
                                    <GiSkills />
                                </LinkScroll>
                            </li>
                            <li>
                                <LinkScroll
                                    to="projects"
                                    spy={true}
                                    smooth={true}
                                    offset={-75}
                                    duration={500}
                                >
                                    <GoProject />
                                </LinkScroll>
                            </li>
                            <li>
                                <LinkScroll
                                    to="aboutMe"
                                    spy={true}
                                    smooth={true}
                                    offset={-75}
                                    duration={500}
                                >
                                    <FaAddressCard />
                                </LinkScroll>
                            </li>
                            <li>
                                <NavLink to="/Portfolio/contactMe" >
                                    <ImEnvelop />
                                </NavLink>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                {" "}
                                <GoHome onClick={() => goToPageAndScroll("home")}
                                    className='icon'
                                />
                            </li>
                            <li>
                                <GiSkills onClick={() => goToPageAndScroll("skills")}
                                    className='icon'
                                />
                            </li>
                            <li>
                                <GoProject onClick={() => goToPageAndScroll("projects")}
                                    className='icon'
                                />
                            </li>
                            <li>
                                <FaAddressCard onClick={() => goToPageAndScroll("aboutMe")}
                                    className='icon'
                                />
                            </li>
                            <li>
                                <NavLink to="/Portfolio/contactMe" className='icon'>
                                    <ImEnvelop />
                                </NavLink>
                            </li>
                        </>
                    )}
                </ul>
                <div className="footer_navbar_brand">
                    {/* <img src={logo} /> */}
                    <NavLink to="https://www.linkedin.com/in/lusHar"
                        rel="noopener noreferrer"
                        target='_blank'>
                        <TbBrandLinkedin style={style} className="active" />
                    </NavLink>
                    <h3 style={style}>© {(new Date().getFullYear())} </h3>
                </div>
            </div>
        </nav >
        <Outlet />
    </>)
}
export default Footer