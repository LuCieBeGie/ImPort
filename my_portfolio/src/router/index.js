import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "../components/Header"
import AboutMe from "../pages/AboutMe/AboutMe"
import Projects from "../pages/Projects/Projects"
import Skills from "../pages/Skills/Skills"
import Home from "../pages/Home/Home"
import ContactMe from "../pages/ContactMe/ContactMe"

function Router() {
    return (<>
        <BrowserRouter>
            <Routes>
                <Route path='/Portfolio' element={<Header />}>
                    <Route path='/Portfolio/' element={<Home />} />
                    <Route path='/Portfolio/aboutMe' element={<AboutMe />} />
                    <Route path='/Portfolio/projects' element={<Projects />} />
                    <Route path='/Portfolio/skills' element={<Skills />} />
                    <Route path='/Portfolio/contactMe' element={<ContactMe />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </>)
}
export default Router