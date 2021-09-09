import React from "react";
import AboutNav from "./aboutComponents/AboutNav"
import { LoremIpsum } from 'react-lorem-ipsum';

function About () {
    return(
        <>
        <br></br>
        <h2>About</h2>
        <br></br>
        <AboutNav />
        <br></br>
        <h3>Our Mission</h3>
        <br></br>
        <p><LoremIpsum p={4} /></p>
        <br></br>
        </>
        // forest bathing
        // great reads
    )
}

export default About;