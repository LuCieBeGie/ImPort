import React from 'react';
import Header from './components/Header';
import AboutMe from './pages/AboutMe/AboutMe';
import Home from './pages/Home/Home';
import Skills from './pages/Skills/Skills';
import Router from './router';

import { BrowserRouter, Route, Routes, } from "react-router-dom"
import Projects from "./pages/Projects/Projects"
import ContactMe from "./pages/ContactMe/ContactMe"
import Footer from "./components/Footer"
import Pages from './pages';

function App() {
  return (<>
    <div>
      <Pages />
    </div>
    <div hidden>
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
      {/* <Router /> */}
    </div>
  </>)
}

export default App;