import { Link, NavLink, Outlet } from "react-router-dom";
import { FaAddressCard } from 'react-icons/fa'
import { GoHome, GoProject } from 'react-icons/go'
import { GiSkills } from 'react-icons/gi'
import { ImEnvelop } from 'react-icons/im'
import { TbBrandLinkedin } from "react-icons/tb";

import './Footer.css';

function Footer() {

    const style = { color: "white", fontSize: "2em" }

    return (<>
        <nav className="sticky-bottom">
            <div className="container_footer" >

                <ul className="nav navbar-nav justify-content-center" >
                    <li>
                        <NavLink to="/Portfolio/"
                            className={(navData) => (navData.isActive ? "active" : 'none')}>
                            <GoHome style={style} />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/Portfolio/skills">
                            <GiSkills style={style} />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Portfolio/projects">
                            <GoProject style={style} />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Portfolio/aboutMe">
                            <FaAddressCard style={style} />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Portfolio/contactMe">
                            <ImEnvelop style={style} />
                        </NavLink>
                    </li>
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