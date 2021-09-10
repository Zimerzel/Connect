import React, { useState, useEffect, useRef } from "react";
import { ReactComponent as Caret } from '../icons/caret.svg'
import { ReactComponent as Messenger } from '../icons/messenger.svg'
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
                    <DropdownItem
                        // leftIcon={<Caret />} make it a home icon
                    >
                        <a href="/">Home</a>
                    </DropdownItem>
                    <DropdownItem
                        leftIcon={<Caret />}
                        goToMenu="about">
                            <a href="/about">About</a>
                    </DropdownItem>
                    <DropdownItem
                        href ="/learn"
                        leftIcon={<Caret />}
                        goToMenu="learn">
                            <a href="/learn">Learn</a>
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
                    <DropdownItem>
                       <a href="/about/community">Community</a>
                    </DropdownItem>
                    <DropdownItem
                    leftIcon={<Messenger />}
                    >
                        <a href="/about/contact">Contact</a>
                    </DropdownItem>
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
                    <DropdownItem >
                        <a href="/learn/books">Books</a>
                    </DropdownItem>
                    <DropdownItem>
                        <a href="/learn/videos">Videos</a>
                    </DropdownItem>
                    <DropdownItem>
                        Articles
                    </DropdownItem>
                </div>
            </CSSTransition>

        </div>
    )
}

export default DropdownMenu;