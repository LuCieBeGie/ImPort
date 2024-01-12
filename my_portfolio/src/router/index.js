import { BrowserRouter, Route, Routes, } from "react-router-dom"
import Header from "../components/Header"
import AboutMe from "../pages/AboutMe/AboutMe"
import Projects from "../pages/Projects/Projects"
import Skills from "../pages/Skills/Skills"
import Home from "../pages/Home/Home"
import ContactMe from "../pages/ContactMe/ContactMe"
import Footer from "../components/Footer"
import Pages from "../pages"

function Router() {
    return (<>
        <BrowserRouter>
            {/* <Header /> */}
            {/* <Pages /> */}
            <Routes>
                <Route element={<Header />}>
                    <Route path='/Portfolio/' element={<Home />} />
                    <Route path='/Portfolio/skills' element={<Skills />} />
                    <Route path='/Portfolio/projects' element={<Projects />} />
                    <Route path='/Portfolio/aboutMe' element={<AboutMe />} />
                    <Route path='/Portfolio/contactMe' element={<ContactMe />} />
                </Route>
            </Routes>
            <Footer />
        </BrowserRouter >
    </>)
}
export default Router