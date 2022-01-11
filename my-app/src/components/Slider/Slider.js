import React from 'react'
import "./Slider.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function Slider() {
    return (
        <div>
            <Carousel infiniteLoop autoPlay>
                <div className="slider-image">
                    <img src="../image/adv1.png" alt="mobile" />
                </div>
                <div className="slider-image">
                    <img src="../image/adv2.png" alt="mobile" />
                </div>
                <div className="slider-image">
                    <img src="../image/adv3.png" alt="mobile" />
                </div>
                <div className="slider-image">
                    <img src="../image/adv4.png" alt="mobile" />
                </div>

            </Carousel>


            
        
            
        </div>
    )
}
