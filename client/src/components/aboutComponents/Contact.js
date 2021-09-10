import React from "react";
import LoremIpsum from "react-lorem-ipsum";

function Contact() {
    return(
        <>
        <h2>Contact</h2>
        <br></br>
        <h3>Best way to reach out</h3>
            <LoremIpsum p={1} />
        <br></br>
        <h3>How can I help Connect?</h3>
            <LoremIpsum p={1} />
        <br></br>
        <h3>Looking for a job?</h3>
            <LoremIpsum p={1} />
        <br></br>
        </>

    )
}

export default Contact;