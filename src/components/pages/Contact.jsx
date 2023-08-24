import React from "react";
import ResumeDescription from "../ResumeDescription.jsx";
import descriptionContent from "../descriptionContent.js";

// TODO: technically, Contact doesn't follow the same framework so change this

function Contact() {

    return (
        <ResumeDescription content={descriptionContent["contact-content"]}></ResumeDescription> 
    );
}

export default Contact;