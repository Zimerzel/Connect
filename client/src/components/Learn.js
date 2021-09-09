import React from "react";
import LoremIpsum from "react-lorem-ipsum";
import LearnNav from "./learnComponents/LearnNav"

function Learn (){
    return(
        <>
            <br></br>
            <h2>Guide to all things connect</h2>
            <br></br>
            <LearnNav />
            <br></br>
            <p><LoremIpsum p={3} /></p>
            <p>
                Here you will find all of the resouces we have meticulous selected to aid in your quest to connect. Books, youtube videos, blogs, other helpful sites
            </p>
            <br></br>
            <h3>Resouces</h3>
        </>
    )
}

export default Learn;