import React from "react";
import logo from "./YANKI.png"
import logoDarc from "./YANKI-darc.png"
import { Link, useLocation } from 'react-router-dom';

export default function Logo() {
    const {pathname} = useLocation()
    return(<>
<Link to='/'>{pathname === "/" ? <img src={logo} alt="" className="logo"/> : <img src={logoDarc} alt="" className="logo2"/>}</Link>
</>
    )
}