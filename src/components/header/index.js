import "./header.css";
import React, {useEffect, useRef } from "react";
import { Section } from "../../Repeat";
import Nav from "./Nav";
import Logo from "./Logo";
import Icons from "./Icons";

// const header = document.querySelector('.header')
// document.addEventListener('scroll',() => {
//     var scroly = window.scrollY;
//     if(scroly > 100) {
//         console.log('inchvor ban');
//         header.style.opacity = 0;

//     }else{
//         header.style.opacity = 0
//     }
// })

export default function Header() {
  const elem = useRef();
function getScroll() {
  if (window.scrollY > 70) {
    elem.current.classList.add('close-menu')

  } else {
    elem.current.classList.remove('close-menu')
  }

}
  useEffect(() => {
    window.addEventListener("scroll", getScroll)
    return () => {
      window.removeEventListener('scroll',getScroll)
    }
  },[]);
  return (
    <div className='head'>
      <Section className='header' ref={elem}>
        <Nav />
        <Logo />
        <Icons />
      </Section>
    </div>
  );
}
