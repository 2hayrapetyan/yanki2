import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link , useLocation } from 'react-router-dom';

export default function Icons() {
  const {pathname} = useLocation()
  return (
    <div className={`${pathname === '/' && 'icons iconsdef'} ${pathname!== '/' && 'icons iconscolor'}`}>
      <ul>
        <li>
          <Link to="/catalog">
            <SearchIcon  className={`${pathname!== '/' && 'none colored'}`}/>
          </Link>
        </li>
        <li>
          {" "}
          <Link to="/">
            <PermIdentityIcon className="none"/>
          </Link>
        </li>
        <li>
          <Link to="/">
            <FavoriteBorderIcon />
          </Link>
        </li>
        <li>
          {" "}
          <Link to="/">
            <AddShoppingCartIcon />
          </Link>
        </li>
      </ul>
    </div>
  );
}
