import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import BigFam from './Pages/BigFam';
import AboutUs from './Pages/AboutUs';
import Gallarey from './Pages/Gallarey';
import Contacts from './Pages/Contacts';
import './CSS/bigfam.css'

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav className='big--nav'>
          
              <Link to="/" className='big active'>NUCLEARS</Link>

              <div className="links">
              <Link to="/about" className='about active'>About</Link>
              <Link to="/gallery" className='gallery active'>Gallery</Link>
              <Link to="/contacts" className='contacts active'>Contacts</Link>
              </div>
        </nav>

        <Routes>
          <Route path="/" element={<BigFam />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/gallery" element={<Gallarey />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
