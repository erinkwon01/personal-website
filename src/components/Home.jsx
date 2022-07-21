import React from "react";
import Description from "./Description.jsx";
import descriptionContent from "./descriptionContent.js";

// TODO: technically, Home doesn't follow the same framework so change this

function Home() {

    return (
        <div>
            <div className='horizontal-page'>
            {/* don't think i need this className^ */}
                <Description content={descriptionContent["home-content"]}></Description>
            </div>
        </div>
    );
}

export default Home;