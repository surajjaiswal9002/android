import React from 'react'
import './Advertise.css'
import {Link} from "react-router-dom";
import Home from "../Home/Home"

export default function Advertise() {
    return (
        <div>
          <section className="section collection" id="collection">
                <div className="container">
                    <div className="collection__container">
                        <div className="collection__box">
                            <div className="img__container">
                                 <img src="../image/banner.png"  className="collection_02"/>
                            </div>
                            <div className="collection__content">
                             <div className="collection__data">
                                <span>New Launch 2021</span>
                                 <h1>iphone 13 max pro</h1>
                                 <Link to="/" >SHOP NOW</Link>
                             </div>
                            </div>
                        </div>

                        <div className="collection__box">
                            <div className="img__container">
                                <img src="./image/banner2.png"  className="collection_01"/>
                             </div>
                         <div className="collection__content">
                            <div className="collection__data">
                                <span>New Feature Introduced in 2020</span>
                                <h1>iphone 12</h1>
                                <Link to="/" >SHOP NOW</Link>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>

            <div classNameName="Advertise">
            <div className="Advertise__row">
            <Home 
                    id="32"
                    title="Asus Max pro M1 "
                    price={11999.00}
                    image="../products/sumsung/samsung3.png"
                    rating={4}
                    
                />
                <Home
                    id="33"
                    title="samsung A51  "
                    price={22000.00}
                    image="../products/sumsung/samsung4.png"
                    rating={4}
                />
                <Home
                     id="34"
                     title="Oneplus 8   "
                     price={34000.00}
                     image="../products/sumsung/samsung5.png"
                     rating={5}
                
                />
                <Home
                     id="34"
                     title="samsung A7  "
                     price={28970.00}
                     image="../products/sumsung/samsung6.png"
                     rating={5}
                
                />
                {/* product */}
            </div>
           <div className="Advertise__row">
           <Home 
                    id="11"
                    title="iphone 12 mini "
                    price={1280}
                    image="../products/iPhone/iphone1.png"
                    rating={3}
                />
                   
                <Home 
                    id="12"
                    title="iphone 11 pro "
                    price={1280}
                    image="../products/iPhone/iphone2.png"
                    rating={4}
                    
                />
                <Home
                    id="13"
                    title="iphone x  "
                    price={33999.00}
                    image="../products/iPhone/iphone3.png"
                    rating={4}
                />
                <Home
                     id="14"
                     title="iphone x  "
                     price={33998.00}
                     image="../products/iPhone/iphone4.png"
                     rating={5}
                
                />
                
                
            </div>
            
              
        </div>

            
        </div>
    )
}
