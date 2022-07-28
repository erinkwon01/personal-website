import React from "react";
import Description from "../Description.jsx";
import descriptionContent from "../descriptionContent.js";
import NavBar from "../NavBar.jsx";

// TODO: technically, Contact doesn't follow the same framework so change this

function Contact() {

    return (
        <Description content={descriptionContent["contact-content"]}></Description> 
    );
}

export default Contact;