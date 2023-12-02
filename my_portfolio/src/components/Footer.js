import { Link, NavLink, Outlet } from "react-router-dom";
import { GrReactjs } from 'react-icons/gr'
import { FaAddressCard } from 'react-icons/fa'
import { GoHome, GoProject } from 'react-icons/go'
import { GiSkills } from 'react-icons/gi'
import { ImEnvelop } from 'react-icons/im'
import { TbBrandLinkedin } from "react-icons/tb";

import './Footer.css';

const classNameFunc = ({ isActive }) => (isActive ? "active" : "");

function Footer() {

    return (<>
        <nav className="navbar navbar-inverse sticky-bottom">
            <div className="container-fluid" >
    
                <ul className="nav navbar-nav justify-content-center" >
                    <li>
                        <NavLink to="/Portfolio/"
                            className={(navData) => (navData.isActive ? "active" : 'none')}>
                            <TbBrandLinkedin size="25px" />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/Portfolio/skills">
                            <GiSkills size='20px' />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Portfolio/projects">
                            <GoProject size="20px" />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Portfolio/aboutMe">
                            <FaAddressCard size="20px" />
                            {/* <ImEnvelop size="20px" /> */}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Portfolio/contactMe">
                            <ImEnvelop size="20px" />
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
        <Outlet />
    </>)
}
export default Footer