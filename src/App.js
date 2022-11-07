import React from 'react'
import Hero from './components/Hero'
import NavbarAndHead from './components/NavbarAndHead'
import Body from './components/Body';
import { Routes, Route } from "react-router-dom";
import Product from './components/Product';
import Footer from './components/Footer';


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={
          <>
            <div>
              <NavbarAndHead />
              <Hero />
              <Body />
            </div>
            <Footer />
          </>
        } />
        <Route path="/product" element={< Product />} />
      </Routes>
    </>
  );
}

export default App;
