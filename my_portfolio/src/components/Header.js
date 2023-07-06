import { Link, Outlet } from "react-router-dom";
import { GrReactjs } from 'react-icons/gr'
import { GoHome, GoProject } from 'react-icons/go'
import { GiSkills } from 'react-icons/gi'
import { ImEnvelop } from 'react-icons/im'
import './Header.css';

function Header() {

    return (<>
        <nav className="navbar navbar-inverse sticky-top">
            <div className="container-fluid" >
                <Link className="navbar-brand">Welcome <GrReactjs /></Link>
                <ul className="nav navbar-nav navbar-right" >
                    <li className="active">
                        <Link className="nav-link" to="/Portfolio" >
                            <GoHome size="20px" />
                        </Link>
                    </li>
                    <li>
                        <Link to="/Portfolio/skills">
                            <GiSkills size='20px' />
                        </Link>
                    </li>
                    <li>
                        <Link to="/Portfolio/projects">
                            <GoProject size="20px" />
                        </Link>
                    </li>
                    <li>
                        <Link to="/Portfolio/contacts">
                            <ImEnvelop size="20px" />
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
        <Outlet />
    </>)
}
export default Header