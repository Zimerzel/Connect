import React from "react";

const Navb = () =>{
    return(
        <nav id="categories-nav">
            <ul>
                <li class="nav-cat-sustainlife" >
                    <a href="/">
                        <div>
                            <img></img>
                        </div>
                        Sustainable Life
                    </a>
                </li>
                <li>
                    <a href= '/tiny'>
                        <div>
                            {/* <img /> */}
                        </div>
                        Tiny Homes
                    </a>
                </li>
                <li>
                    <a href="/community">
                        <div>
                            {/* <img /> */}
                        </div>
                        Community
                    </a>
                </li>
                <li>
                    <a>
                        <div>
                            {/* <img /> */}
                        </div>
                        Climate Change
                    </a>
                </li>
                <li>
                    <a>
                        <div>
                            {/* <img /> */}
                        </div>
                        Enviroment
                    </a>
                </li>
                <li>
                    <a>
                        <div>
                            {/* <img /> */}
                        </div>
                        Renewable Energy
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navb;