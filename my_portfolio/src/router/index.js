import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "../components/Header"
import AboutMe from "../pages/AboutMe/AboutMe"
import Projects from "../pages/Projects/Projects"
import Skills from "../pages/Skills/Skills"
import Home from "../pages/Home/Home"
import ContactMe from "../pages/ContactMe/ContactMe"
import Footer from "../components/Footer"

function Router() {
    return (<>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route>
                    <Route path='/Portfolio/' element={<Home />} />
                    <Route path='/Portfolio/aboutMe' element={<AboutMe />} />
                    <Route path='/Portfolio/projects' element={<Projects />} />
                    <Route path='/Portfolio/skills' element={<Skills />} />
                    <Route path='/Portfolio/contactMe' element={<ContactMe />} />
                </Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    </>)
}
export default Router