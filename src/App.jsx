import React, { useEffect } from 'react';
import Aos from 'aos';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import OurSchools from './pages/OurSchools';

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  
  return (

    <Router>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/ourschools" element={<OurSchools />} />
        </Routes>
      </main>
    </Router>
  );

}

export default App;
