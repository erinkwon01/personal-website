import React from "react";
import Header from "./Header.jsx";
import LeftColumn from "./LeftColumn.jsx";
import RightColumn from "./RightColumn.jsx"
import topics from "../topics.js";
import leftC from "../leftC.js"
import rightC from "../rightC.js"

function AboutMe() {
    return (
        <div>
            <header className="Hcontainer">
                <Header name={topics[0].name}/>
                <Header name={topics[1].name}/>
                <Header name={topics[2].name}/>
                <Header name={topics[3].name}/>
                <Header name={topics[4].name}/>
            </header>
            <hr /> {/* don't rlly like this */}
            <body className="ColContainer">
                <LeftColumn name={leftC[0].name}></LeftColumn>
                <LeftColumn name={leftC[1].name}></LeftColumn>
                <LeftColumn name={leftC[2].name}></LeftColumn>
            </body>
            <body className="ColContainer">
                <RightColumn info={rightC[0].first}></RightColumn>
                <RightColumn info={rightC[0].second}></RightColumn>
                <RightColumn info={rightC[0].third}></RightColumn>
                <RightColumn info={rightC[0].fourth}></RightColumn>
                <RightColumn info={rightC[0].fifth}></RightColumn>
                <RightColumn info={rightC[1].first}></RightColumn>
                <RightColumn info={rightC[1].second}></RightColumn>
                <RightColumn info={rightC[1].third}></RightColumn>
                <RightColumn info={rightC[1].fourth}></RightColumn>
                <RightColumn info={rightC[1].fifth}></RightColumn>
                <RightColumn info={rightC[1].sixth}></RightColumn>
                <RightColumn info={rightC[2].first}></RightColumn>
                <RightColumn info={rightC[2].second}></RightColumn>
                <RightColumn info={rightC[2].third}></RightColumn>
            </body>

        </div>
    );
}

export default AboutMe;