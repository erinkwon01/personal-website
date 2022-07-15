// entirety of aboutmy page content; all content is compiled here

import React from "react";
import Description from "./Description.jsx";
import descriptionContent from "./descriptionContent.js";
import TableOfContent from "./TableOfContent.jsx";

var about_me_nav = ["Basic Information", "Fun Facts", "Goals"] // array for about_me_nav content

function AboutMe() {

    return (
        <div className='horizontal-page'>
            {/* This part is what actually is in the about me */}

            <TableOfContent content={about_me_nav} id='about-me'/> {/* uses the array listed above to spit out content */}

            <div className="ColContainer">

                <Description content={descriptionContent["about-me-content"].basicInfo}></Description>
                <Description content={descriptionContent["about-me-content"].funFacts}></Description>
                <Description content={descriptionContent["about-me-content"].goals}></Description>
                {/* <Descriptioniption info={descriptionContent[0].second}></Descriptioniption>
                <Descriptioniption info={descriptionContent[0].third}></Descriptioniption>
                <Descriptioniption info={descriptionContent[0].fourth}></Descriptioniption>
                <Descriptioniption info={descriptionContent[0].fifth}></Descriptioniption>


                <Descriptioniption info={descriptionContent[1].first}></Descriptioniption>
                <Descriptioniption info={descriptionContent[1].second}></Descriptioniption>
                <Descriptioniption info={descriptionContent[1].third}></Descriptioniption>
                <Descriptioniption info={descriptionContent[1].fourth}></Descriptioniption>
                <Descriptioniption info={descriptionContent[1].fifth}></Descriptioniption>
                <Descriptioniption info={descriptionContent[1].sixth}></Descriptioniption>


                <Descriptioniption info={descriptionContent[2].first}></Descriptioniption>
                <Descriptioniption info={descriptionContent[2].second}></Descriptioniption>
                <Descriptioniption info={descriptionContent[2].third}></Descriptioniption> */}
            </div>
        </div>
    );
}

export default AboutMe;