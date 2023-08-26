import React, { useEffect } from 'react';
import Aos from 'aos';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import OurSchools from './pages/OurSchools';
import Contact from './pages/Contact';

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  
  return (

    <>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About-us" element={<About />} />
          <Route path="/Our-Schools" element={<OurSchools />} />
          <Route path="/Contact-us" element={<Contact />} />
        </Routes>
      </main>
    </>
  );

}

export default App;
