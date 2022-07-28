// main source of all pages in website formatting? or do we have multiple of these per page (navbar and projects, for example)

import React from "react";
import NavBar from "./NavBar.jsx";
import Home from "./pages/Home.jsx";
import AboutMe from "./pages/AboutMe.jsx";
import Resume from "./pages/Resume.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <div id="app"> 
            <NavBar />
            <Routes>
                <Route exact path='/' element={<Home />} /> 
                <Route exact path='/about-me' element={<AboutMe />} /> 
                <Route exact path='/resume' element={<Resume />} /> 
                <Route exact path='/projects' element={<Projects />} /> 
                <Route exact path='/contact' element={<Contact />} /> 
            </Routes>
        </div>
    );
}

export default App;