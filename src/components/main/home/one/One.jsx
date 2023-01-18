import React, {useState}from "react";
import foneImages from "./foneimages.json"
import NewText from './NewText';
import one from './1.png'
export default function One() {
const [inner, setInner] = useState(window.innerWidth)


    return(
        <div className="section1">
            {inner > 750 ? foneImages.map(i => (
    <img key={i.id} src={i.img} alt=''/>
)) : <div className="alternative"><img src={one} alt=''/></div>}

<NewText/>
        </div>
        
      
    )
}