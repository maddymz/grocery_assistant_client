import React from "react";
import "./Header.css";
import cloudLogo from "../assets/grocery_logo.png";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "../service/StateProvider";
import { auth } from "../config/firebase";

function Header() {
  const[{basket, user}] = useStateValue();

  const handleAuthentication = () =>{
    if(user){
      auth.signOut();
    }
  }


console.log("sa ",user);
  
  return (
    <div className="header">
      <Link to="/">
        <img className="header__logo" src={cloudLogo} alt="" />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text"></input>
        <SearchIcon className="header__searchIcon"></SearchIcon>
        {/* Logo */}
      </div>

      <div className="header__nav">
      <Link to={!user && '/login'}>
        <div onClick = {handleAuthentication} className="header__option">
          <span className="header__optionLineOne">Hello</span>
          <span className="header__optionLineOne">{user ? user.email:'Guest'}</span>
          <span className="header__optionLineTwo">{user ? 'Sign Out':'Sign In'}</span>
        </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Orders</span>
          <span className="header__optionLineTwo">My Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Account</span>
        </div>

        <Link to="/checkout">
        <div className="header__optionBasket">
          <ShoppingCartIcon />
          <span className="header__optionLineTwo header__basketCount">{basket.length}</span>
        </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
