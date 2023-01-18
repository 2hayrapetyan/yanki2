import { GridBox, GridCild } from "./../../../Repeat";
import React, { useEffect, useState } from "react";
import { Audio } from "react-loader-spinner";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from 'react-router-dom';

export default function Cards() {
  let [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://retoolapi.dev/f6lLtW/data")
      .then((i) => i.json())
      .then((data) => setData(data));
  }, []);
  return (
    <GridBox>
      {data.length ? (
        data.map((i) => (
          <GridCild key={i.id} className='child'>
            <img src={i.img} alt='' />
            <p>{i.product}</p>
            <Link to='/favorite' className='heart'><FavoriteBorderIcon /></Link>
            <span>{i.price} грн</span>
            <p className='sizes'>XXS XS S M L</p>
          </GridCild>
        ))
      ) : (
        <div className='loader'>
          <Audio
            height='130'
            width='130'
            radius='13'
            color='#E0BEA2'
            ariaLabel='loading'
            wrapperStyle
            wrapperClass
          />
        </div>
      )}
    </GridBox>
  );
}
