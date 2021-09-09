import React, { useState, useEffect, useRef } from "react";
import { ReactComponent as Chevron } from '../icons/chevron.svg'
import { ReactComponent as Cog } from '../icons/cog.svg'
import { CSSTransition } from "react-transition-group"
import { ReactComponent as  Arrow} from '../icons/arrow.svg'


function DropdownMenu () {
    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);

    useEffect(() => {
        setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
    }, [])
    
    function calcHeight(el) {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }

    function DropdownItem (props){
        return(
            <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
                <span className="icon-button">{props.leftIcon}</span>
                    {props.children}
                <span className="icon-right">{props.rightIcon}</span>

            </a>
        )
    }
    return(
        <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
            <CSSTransition 
                in={activeMenu === 'main'} unmountOnExit 
                timeout={500} 
                classNames="menu-primary" 
                onEnter={calcHeight}>
                <div className="menu">
                    {/* <DropdownItem>My profile</DropdownItem> */}
                    <DropdownItem
                        leftIcon={<Cog />}
                        goToMenu="about">
                            About
                    </DropdownItem>
                    <DropdownItem
                        leftIcon={<Cog />}
                        goToMenu="learn">
                            Learn
                    </DropdownItem>
                </div>
            </CSSTransition>
            <CSSTransition 
                in={activeMenu === 'about'} 
                unmountOnExit 
                timeout={500} 
                classNames="menu-secondary"
                onEnter={calcHeight}>
                <div className="menu">
                    <DropdownItem leftIcon={<Arrow />} goToMenu="main" />
                    <DropdownItem>Community</DropdownItem>
                    <DropdownItem>Contact</DropdownItem>
                </div>
            </CSSTransition>
            <CSSTransition 
                in={activeMenu === 'learn'} 
                unmountOnExit 
                timeout={500} 
                classNames="menu-secondary"
                onEnter={calcHeight}>
                <div className="menu">
                    <DropdownItem leftIcon={<Arrow />} goToMenu="main" />
                    <DropdownItem ><a href="/learn/books">Books</a></DropdownItem>
                    <DropdownItem>Videos</DropdownItem>
                    <DropdownItem>Articles</DropdownItem>
                </div>
            </CSSTransition>

        </div>
    )
}

export default DropdownMenu;