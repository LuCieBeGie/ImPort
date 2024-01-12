import { Link, NavLink, Outlet } from "react-router-dom";
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
                        <NavLink to="/Portfolio/"  >
                            <GoHome style={style} className="nav_link" />
                        </NavLink>
                    </Tooltip>
                    <Tooltip className="menu_nav_button"
                        title={<h2
                            style={{ color: "lightblue" }}>Skills</h2>}>
                        <NavLink
                            to="/Portfolio/skills"
                        >
                            <GiSkills style={style} />
                        </NavLink>
                    </Tooltip>
                    <Tooltip className="menu_nav_button"
                        title={<h2
                            style={{ color: "lightblue" }}>Projects</h2>}>
                        <NavLink to="/Portfolio/projects"  >
                            <GoProject style={style} />
                        </NavLink>
                    </Tooltip>
                    <Tooltip className="menu_nav_button"
                        title={<h2
                            style={{ color: "lightblue" }}>About Me</h2>}>
                        <NavLink to="/Portfolio/aboutMe"  >
                            <FaAddressCard style={style} />
                        </NavLink>
                    </Tooltip>
                    <Tooltip className="menu_nav_button"
                        title={<h2
                            style={{ color: "lightblue" }}>Contact Me</h2>}>
                        <NavLink to="/Portfolio/contactMe"  >
                            <ImEnvelop style={style} />
                        </NavLink>
                    </Tooltip>
                </Toolbar>
            </div>
        </nav>
        <Outlet />
    </>)
}
export default Header