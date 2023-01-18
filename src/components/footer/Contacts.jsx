import React from "react";
import { FooterDiv, Footerh2 } from "../../Repeat";
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import { Link } from 'react-router-dom';

export default function Contacts() {
    return(
        <FooterDiv>
            <Footerh2>
            КОНТАКТЫ
            </Footerh2>
            <ul className="footerlist">
                <li style={{display:'flex',gap:'13px',}}><Link to="/" style={{color: "#E0BEA2"}}><InstagramIcon /></Link><Link to="/" style={{color: "#E0BEA2"}}><TelegramIcon /></Link></li>
                <li><Link to="/">+38(073) 096 36 44</Link></li>
                <li><Link to="/">info@yanki.com</Link></li>
            </ul>
        </FooterDiv>
    )
}