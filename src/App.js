import './App.css';
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Qualification from "./components/Qualification";
import React from "react";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <>
        <NavBar />
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Portfolio />
        <Contact />
        <Footer />
    </>
  );
}

export default App;
