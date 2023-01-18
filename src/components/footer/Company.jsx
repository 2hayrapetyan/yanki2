import React,{useEffect,useState} from "react";
import { FooterDiv, Footerh2 } from "../../Repeat";
import { Link } from 'react-router-dom';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";



export default function Company() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [display, setDisplay] = useState(false);
  useEffect(() => {
    function getParametrers() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", getParametrers);
    return () => window.removeEventListener("resize", getParametrers);
  }, []);
    return(
        <FooterDiv>
            <Footerh2>
            КОМПАНИЯ
            {windowWidth <= 750 && ( 
            <span onClick={() => setDisplay(!display)} className='spaniolo'><KeyboardArrowDownIcon /></span>)}
           
            </Footerh2>
            {(display || windowWidth >= 750) && (
                <ul>
                <li><Link to="/">О нас</Link></li>
                <li><Link to="/">Контакты</Link></li>
            </ul>
            )}
        </FooterDiv>
    )
}