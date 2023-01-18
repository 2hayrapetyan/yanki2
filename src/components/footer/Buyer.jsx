import React, { useState, useEffect } from "react";
import { FooterDiv, Footerh2 } from "../../Repeat";
import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function Buyer() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [display, setDisplay] = useState(false);
  useEffect(() => {
    function getParametrers() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", getParametrers);
    return () => window.removeEventListener("resize", getParametrers);
  }, []);

  return (
    <FooterDiv>
      <Footerh2>
        ПОКУПАТЕЛЮ
        {windowWidth <= 750 && (
          <span onClick={() => setDisplay(!display)}  className='spaniolo'>
            <KeyboardArrowDownIcon />
          </span>
        )}
      </Footerh2>
      {(display || windowWidth >= 750) && (
        <ul>
          <li>
            <Link to='/'>Избранное</Link>
          </li>
          <li>
            <Link to='/'>Публичная оферта</Link>
          </li>
          <li>
            <Link to='/'>Политика конфиденциальности</Link>
          </li>
        </ul>
      )}
    </FooterDiv>
  );
}
