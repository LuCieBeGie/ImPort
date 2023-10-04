import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "../components/Header"
import Contacts from "../pages/Contacts/Contacts"
import Projects from "../pages/Projects/Projects"
import Skills from "../pages/Skills/Skills"
import Home from "../pages/Home/Home"

function Router() {
    return (<>
        <BrowserRouter>
            <Routes>
                <Route path='/Portfolio' element={<Header />}>
                    <Route path='/Portfolio/' element={<Home />} />
                    <Route path='/Portfolio/contacts' element={<Contacts />} />
                    <Route path='/Portfolio/projects' element={<Projects />} />
                    <Route path='/Portfolio/skills' element={<Skills />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </>)
}
export default Router