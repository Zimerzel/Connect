import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

function Header() {
    return(
        <div class="header">
            <div id="medialink">
                <FontAwesomeIcon icon={faTwitter} id="twitter"/>
                <FontAwesomeIcon icon={faInstagram} id="instagram"/>
                <FontAwesomeIcon icon={faFacebookSquare} id="facebook"/>
            </div>
            <div>
                {/* have leaf animated to fly across header and then the nav links will be shown */}
                <h1>Connect <FontAwesomeIcon icon={faLeaf}/></h1>
                <div id="nav-sm">
                    <div class="main">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;