import React, { useEffect } from "react";
import images from "./category.json";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export default function CategoryImg() {
  useEffect(() => {
    const slide = document.querySelector(".slider-line");
    const right = document.querySelector(".right");
    const left = document.querySelector(".left");
    let plus = 0;
    right.addEventListener("click", () => {
      plus += 46;
      if (plus > 92) {
        plus = 0;
      }
      slide.style.left = -plus + "vw";
    });
    left.addEventListener("click", () => {
      plus -= 46;
      if (plus < 0) {
        plus = 92;
      }
      slide.style.left = -plus + "vw";
    });
  }, []);
  return (
    <div className='images'>
      <span className='arrow left'>
        <ArrowBackIosIcon />
      </span>
      {window.innerWidth > 750 ? (
        images.map((i) => (
          <div key={i.id}>
            <img src={i.img} alt='' />
            <Link to='/'>
              <h2 className='imagesh2'>{i.name}</h2>
            </Link>
          </div>
        ))
      ) : (
        <div className='slider-line'>
          {images.map((i) => (
            <div key={i.id} className='slider-item'>
              <img src={i.img} alt='' />
              <Link to='/'>
                <h2 className='imagesh2'>{i.name}</h2>
              </Link>
            </div>
          ))}
        </div>
      )}
      <span className='arrow right'>
        <ArrowForwardIosIcon />
      </span>
    </div>
  );
}
