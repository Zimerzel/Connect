import React from 'react'
import Nav from './Nav'

function Header() {
    return(
        <div id="header">
            <div>
                <h1>Connect</h1>
            </div>
            <div>
                <Nav />
            </div>
        </div>
    )
}

export default Header;