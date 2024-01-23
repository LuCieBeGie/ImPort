import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"
import AboutMe from "./AboutMe/AboutMe"
import ContactMe from "./ContactMe/ContactMe"
import Home from "./Home/Home"
import Projects from "./Projects/Projects"
import Skills from "./Skills/Skills"

function Pages() {
    return (<>
        <div>
            <Header />
            <Home />
            <Skills />
            <Projects />
            <AboutMe />
            <ContactMe />
            <Footer />
        </div>
        <Outlet />
    </>)
}

export default Pages