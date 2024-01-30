import React from 'react';
import Header from './components/Header';

import { BrowserRouter, Route, Routes, } from "react-router-dom"
import ContactMe from "./pages/ContactMe/ContactMe"
import Footer from "./components/Footer"
import Pages from './pages';

function App() {
  return (<>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/Portfolio/' element={<Pages />} />
        <Route path='/Portfolio/contactMe' element={<ContactMe />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </>)
}

export default App;