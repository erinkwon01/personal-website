import React from "react";
import RightColumn from "./RightColumn.jsx"
import rightC from "../rightC.js"
import TableOfContent from "./TableOfContent.jsx";
var about_me_nav = ["Basic Information", "Fun Facts", "Goals"]
function AboutMe() {
    return (
        <div className='horizontal-page'>
            {/* This part is what actuallys in the about me */}

            <TableOfContent content={about_me_nav} id='about-me'/>

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