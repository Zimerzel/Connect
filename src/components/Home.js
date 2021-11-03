import React from "react";
import ForestImg from "../assets/images/canopy.jpg"

function Home () {
    return(
        <>
        <div class="home">
            <br></br>
            <h2>Welcome!</h2>
            <br></br>
            <div id="homeImg">
                <img src={ForestImg} alt="tree canopy" id="forestImg"/>
            </div>
            <br></br>
            <h3>What is Connect?</h3>
            <br></br>
            <p>
                Connect is an appliction that is inpired by those who choose to reject societ's
                "norms" and connect back to nature. Here at connect we strive to provide valuable
                information for anyone looking to leave the rat race behind by collecting insight from the pioneers of this movement,
                 and putting it directly in your hands.
            </p>
            <br></br>
            {/* events, meetup, build icons */}
            <h3>Why Signup?</h3>
            <br></br>
            <p>
                Once you've signed up you will have unlimited access to free events,
                 discounts on workshops to help expand your skills, and social outtings for likeminded people!
            </p>
            <br></br>
            <br></br>

            {/* testimonials */}
        </div>
        </>

    )
}

export default Home;