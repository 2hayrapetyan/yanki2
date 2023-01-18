import React from "react";
import about from "./about.json";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"; 
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function Filter() {
    return(
        <div className="filter">
<div className="path">
    <span>Главная</span>
    <span style={{color:'#E0BEA2'}}> <KeyboardArrowRightIcon /></span>
    <span>Каталог</span>
</div>
<div className="filterby">
    <p>Каталог</p>
    {about.map(i => (
        <span key={i.id}>{i.name} <ExpandMoreIcon /></span>
    ))}
</div>

        </div>
    )
}