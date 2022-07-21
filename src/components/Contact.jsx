import React from "react";
import Description from "./Description.jsx";
import descriptionContent from "./descriptionContent.js";

// TODO: technically, Contact doesn't follow the same framework so change this

function Contact() {

    return (
        <div>
            <div className='horizontal-page'>
            {/* don't think i need this className^ */}
                <Description content={descriptionContent["contact-content"]}></Description>
            </div>
        </div>
    );
}

export default Contact;