import React from 'react';
import './Product.css';
import StarIcon from "@material-ui/icons/Star"
import StarHalfIcon from "@material-ui/icons/StarHalf"
import Home from "../Home/Home";

export default function product() {
    return (
        <div classNameName="product">
            <div className="product__row">
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
                <Home
                     id="14"
                     title="iphone x  "
                     price={33998.00}
                     image="../products/iPhone/iphone5.png"
                     rating={5}
                
                />
            </div>
           <div className="product__row">
           <Home 
                    id="21"
                    title="iphone 12 mini "
                    price={1280}
                    image="../products/iPhone/iphone6.png"
                    rating={3}
                />
                   
                <Home 
                    id="22"
                    title="iphone 11 pro "
                    price={1280}
                    image="../products/iPhone/iphone12.png"
                    rating={4}
                    
                />
                <Home
                    id="23"
                    title="iphone x  "
                    price={33999.00}
                    image="../products/iPhone/iphone13.png"
                    rating={4}
                />
                <Home
                     id="14"
                     title="iphone x  "
                     price={33998.00}
                     image="../products/iPhone/red1.png"
                     rating={5}
                
                />
                <Home
                     id="24"
                     title="samsung M1  "
                     price={16999.00}
                     image="../products/sumsung/samsung1.png"
                     rating={5}
                
                />
            </div>
            <div className="product__row">
           <Home 
                    id="31"
                    title="Samsung A1 "
                    price={21000.00}
                    image="../products/sumsung/samsung2.png"
                    rating={3}
                />
                   
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
            </div>
            
              
        </div>
            
           
                    
            
        
    )
}
