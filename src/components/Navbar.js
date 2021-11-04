import React from "react";
import { Link } from 'react-router-dom'

export default class Nav extends React.Component {
    render(){
    return(
        <nav id="categories-nav">
            <ul>
                <li class="nav-cat-sustainlife" >
                    <Link to ="/sustainable-life">
                        <div>
                            <img></img>
                        </div>
                        Sustainable Life
                    </Link>
                </li>
                <li>
                    <Link to ="/tiny">
                        <div>
                            {/* <img /> */}
                        </div>
                        Tiny Homes
                    </Link>
                </li>
                <li>
                    <Link to="/community">
                        <div>
                            {/* <img /> */}
                        </div>
                        Community
                    </Link>
                </li>
                <li>
                    <Link to= "/">
                        <div>
                            {/* <img /> */}
                        </div>
                        Climate Change
                    </Link>
                </li>
                <li>
                    <Link to= "/">
                        <div>
                            {/* <img /> */}
                        </div>
                        Enviroment
                    </Link>
                </li>
                <li>
                    <Link to ="">
                        <div>
                            {/* <img /> */}
                        </div>
                        Renewable Energy
                    </Link>
                </li>
            </ul>
        </nav>
    )}
}
