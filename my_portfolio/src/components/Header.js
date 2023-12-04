import { Link, NavLink, Outlet } from "react-router-dom";
import { GrReactjs } from 'react-icons/gr'
import { FaAddressCard } from 'react-icons/fa'
import { GoHome, GoProject } from 'react-icons/go'
import { GiSkills } from 'react-icons/gi'
import { ImEnvelop } from 'react-icons/im'
import './Header.css';

function Header() {

    const style = { color: "white", fontSize: "2em" }

    return (<>

        <nav className="navbar sticky-top">
            <div className="container-fluid" >
                <Link className="navbar-brand">LH
                    <GrReactjs />
                </Link>
                <ul>
                    <li>
                        <NavLink to="/Portfolio/"
                            className={(navData) => (navData.isActive ? "active" : '')}>
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
            </div>
        </nav>
        <Outlet />
    </>)
}
export default Header