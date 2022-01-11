import React from 'react'
import "./Home.css"
import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from "@material-ui/icons/StarHalf";



export default function Home({title , image ,price , rating}) {   
    return (
         <div className="home">
             
             <div className="home__row">
                 <img src={image}/>
                 <p>{title}</p>
                 <p className="home__price">
                     <small>₹</small>
                     <strong>{price}</strong>
                 </p>
                 
                 <div className="home__rating">
                      {Array(rating)
                          .fill()
                           .map((_, i) => (
                           <p>⭐</p>
                         ))}
                </div>
                <button className="home__button>" >Add to cart</button>
                {/* product */}
            </div>
           <div className="home__row">
               
                {/* product */}
                {/* product */}
                {/* product */}
               {/* product */}
            </div>

             
             
            
            
        </div>
    )
}
