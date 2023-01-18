import React from "react";
import burger from "./burger.png"
import {  NavLink, useLocation } from 'react-router-dom';
import burger2 from "./burger2.png"
export default function Nav() {
    const {pathname} = useLocation()
    return(
        <div>
            <ul className={` none ${pathname === '/' && 'navbar'} ${pathname!== '/' && ' color'}`}>
                <li><NavLink to="/new">NEW</NavLink></li>
                <li><NavLink to="/catalog">КАТАЛОГ</NavLink></li>
                <li><NavLink to="/about">О НАС</NavLink></li>
            </ul>
            {pathname === "/" ? <img src={burger} alt="" className="burger"/> : <img src={burger2} alt="" className="burger"/>}
        </div>
    )
}