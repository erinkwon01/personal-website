// main source of all pages in website formatting? or do we have multiple of these per page (navbar and projects, for example)

import React from "react";
import AboutMe from "./AboutMe.jsx";
import NavBar from "./NavBar.jsx";

function App() {
    return (
        <div id="app"> {/* formatting the whole page to be filled */}
            <NavBar/>
            <AboutMe/>
        </div>

    );
}

export default App;