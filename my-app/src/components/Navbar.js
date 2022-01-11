import React, { useState } from "react";
import "./Navbar.css";
import "../../../node_modules/@momentum-ui/core/css/momentum-ui.css";
import "../../../node_modules/@momentum-ui/icons/css/momentum-ui-icons.css";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider/StateProvider";
import { Totalquantity } from "./reducer";
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

//momentum-ui components
import { Button, Icon, Input } from "@momentum-ui/react";
import { Menu, MenuItem, MenuOverlay } from "@momentum-ui/react";
import Category from "./Category/Category";
import Account from "./Account/Account";

export default function Navbar() {
  const[mobile ,setMobile] = useState(false);

  const [{ basket }] = useStateValue();
  const [search, setSearch] = useState("");

  const SearchDeatils = (event) => {
    setSearch(event.target.value);
  };
  return (
    
    <div className="navbar">
      <Link to="/">
        <h1 className="navbar_logo" font-weight="bold">
          Digicean
        </h1>
      </Link>

      <div className="navbar_search">
        <Input
          placeholder="Search"
          type="search"
          className="navbar_searchIn"
          onChange={SearchDeatils}
        />

        <div className="navbar_searchIcon">
          <Link to={`./products/${search}`}>
            <Button
              children={<Icon name="icon-search_14" />}
              ariaLabel="{`./products/${search}`}"
              circle
              color="blue"
            />
          </Link>
        </div>
      </div>

      <div className={mobile ? "navbar_navOpt-mobile" : "navbar_navOpt" }
       onClick={() => setMobile(false)}
      >
        <Link to="/">
          <div className="navbar_option">
            
            <Button   >
                Home
              </Button>
          </div>
        </Link>

        <Link to="/products/ ">
          <div className="navbar_option">
         
            <Category />

          </div>
        </Link>

        <div className="navbar_option" >
          <Account />
         
        </div>

        <Link to="/contact">
          <div className="navbar_option">
              <Button   >
                contact
              </Button>
          </div>
        </Link>

        <Link to="/About">
          <div className="navbar_option">
          
            <Button   >
               About
              </Button>
          </div>
        </Link>

        <Link to="/checkout">
          <div className="navbar_cart">
            <ShoppingBasketIcon color="orange" />
            <span className="navbar_optionLine navbar_cart_basket">
              {Totalquantity(basket)}
            </span>
          </div>
        </Link>
       
      </div>
      <div className="mobile-menu-icon"
       onClick={()=> setMobile(!mobile)}
      >
          {mobile ? (
             <CloseIcon/>
           
            ):(
           
            <MenuIcon/>
            )}
  </div>
     
      
    </div>
   


    
   
  );
}
