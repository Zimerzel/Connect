import React from "react";
import LoremIpsum from "react-lorem-ipsum";



function Books() {
    return(
        <>
        <br></br>
            <h2>Books</h2>
            <br></br>

        <br></br>
            <h3>Health</h3>
                {/* book img, author, title, description */}
                <p><LoremIpsum p={1} /></p>
        <br></br>
            <h3>Tiny Living</h3>
                <p><LoremIpsum p={1} /></p>
        <br></br>
            <h3>Permaculture/Gardening</h3>
                <p><LoremIpsum p={1} /></p>
        <br></br>
        </>
    )
}

export default Books;