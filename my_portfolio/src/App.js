import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, } from "react-router-dom"
import ContactMe from "./pages/ContactMe/ContactMe"
import Footer from "./components/Footer"
import Pages from './pages';
import Navigation from './components/Navigation';
import Header from './components/Header';

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (<>
    <BrowserRouter>
      <Navigation isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <Routes>
        <Route path='/Portfolio/' element={<Pages />} />
        <Route path='/Portfolio/contactMe' element={<ContactMe />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </>)
}

export default App;