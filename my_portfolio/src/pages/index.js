import AboutMe from "./AboutMe/AboutMe"
import Home from "./Home/Home"
import Projects from "./Projects/Projects"
import Skills from "./Skills/Skills"

function Pages() {
    return (<>
        <div>
            <Home />
            <Skills />
            <Projects />
            <AboutMe />
        </div>
    </>)
}

export default Pages