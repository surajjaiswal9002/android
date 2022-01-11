import React from "react";
import "./Navbar.css";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {  NavLink } from "react-router-dom";
import Product from "./Product/Product"



export default function Navbar() {
  return (
    <div className="navbar">
      
      <img
        className="navbar_logo"
        src=""
        

      />
    <h1>Digicean</h1>
       

      <div className="navbar_search">
        <input type="text" className="navbar_searchIn" />
          <SearchIcon className="navbar_searchIcon"/>
      </div>

      <div className="navbar_navOpt">
        <div className="navbar_option">
          <span className="navbar_optionLine">Home</span>
        </div>
        <div className="navbar_option">
          <span className="navbar_optionLine">Products</span>
        </div>
        <div className="navbar_option">
          <span className="navbar_optionLine"> Account</span>
        </div>
        <div className="navbar_option">
          <span className="navbar_optionLine">contact</span>
        </div>
        <div className="navbar_option">
          <span className="navbar_optionLine">About</span>
        </div>
        <div className="navbar_cart">
          <ShoppingBasketIcon   />
          <span className="navbar_optionLine navbar_cart_basket">0</span>
        </div>
      </div>
    </div>
  );
}