// main source of all pages in website formatting? or do we have multiple of these per page (navbar and projects, for example)

import React from "react";
import NavBar from "./NavBar.jsx";
import Home from "../pages/Home.jsx";
import AboutMe from "../pages/AboutMe.jsx";
import Resume from "../pages/Resume.jsx";
import Projects from "../pages/Projects.jsx";
import Contact from "../pages/Contact.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <div id="app"> 
            <NavBar />
            <Routes>
                <Route exact path='/personal-website/' element={<Home />} /> 
                <Route exact path='/about-me' element={<AboutMe />} /> 
                <Route exact path='/resume' element={<Resume />} /> 
                <Route exact path='/projects' element={<Projects />} /> 
                <Route exact path='/contact' element={<Contact />} /> 
            </Routes>
        </div>
    );
}
// prop here that keeps track of the track you're on (since u have routes) and pass it to navbar on whether or not to show it
// u can have conditional inside app (if path == home, navbar show false)
// react component for hiding things 

export default App;