import React, { useEffect, useState } from "react";
import "./Advertise.css";
import { Link } from "react-router-dom";
import ProductDetails from "../Product/ProductDetails";
import Button from "@momentum-ui/react/lib/Button";
import Data from "../JSONData/Data.json";

export default function Advertise({ image }) {
  console.log(Data);

  return (
    <div>
      <section className="section collection" id="collection">
        <div className="container">
          <div className="collection__container">
            <div className="collection__box">
              <div className="img__container">
                <img
                  src="../image/banner.png"
                  className="collection_02"
                  alt=""
                />
              </div>
              <div className="collection__content">
                <div className="collection__data">
                  <span>New Launch 2021</span>
                  <h1>iphone 13 max pro</h1>
                  <Link to="/">
                    <Button color="blue" >
                      Shop-Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="collection__box">
              <div className="img__container">
                <img
                  src="../image/banner2.png"
                  className="collection_01"
                  alt=""
                />
              </div>
              <div className="collection__content">
                <div className="collection__data">
                  <span>New Feature Introduced in 2020</span>
                  <h1>iphone 12</h1>
                  <Link to="/">
                    <Button color="blue" placeholder="button" >
                      Shop-now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div classNameName="Advertise">
        <div className="Advertise__row">
          {Data.map((item) => {
            return (
              <div>
                <ProductDetails
                  id={item.id }
                  title={item.title}
                  price={item.price}
                  image={item.image}
                  rating={4}
                />
              </div>
            );
          })}

          {/* <ProductDetails
            id="107"
            title="Asus Max pro M1 "
            price={11999.0}
            image="../products/sumsung/samsung3.png"
            rating={4}
          />
          <ProductDetails
            id="108"
            title="samsung A51  "
            price={22000.0}
            image="../products/sumsung/samsung4.png"
            rating={4}
          />
          <ProductDetails
            id="109"
            title="Oneplus 8   "
            price={34000.0}
            image="../products/sumsung/samsung5.png"
            rating={5}
          />
          <ProductDetails
            id="110"
            title="samsung A7  "
            price={28970.0}
            image="../products/sumsung/samsung6.png"
            rating={5}
          />
          {/* product */}
        </div>
        {/* <div className="Advertise__row">
          <ProductDetails
            id="111"
            title="iphone 12 mini "
            price={1280}
            image="../products/iPhone/iphone1.png"
            rating={3}
          />

          <ProductDetails
            id="122"
            title="iphone 11 pro "
            price={1280}
            image="../products/iPhone/iphone2.png"
            rating={4}
          />
          <ProductDetails
            id="133"
            title="iphone x  "
            price={33999.0}
            image="../products/iPhone/iphone3.png"
            rating={4}
          />
          <ProductDetails
            id="144"
            title="iphone x  "
            price={33998.0}
            image="../products/iPhone/iphone4.png"
            rating={5}
          /> 
        </div> */}
      </div>
    </div>
  );
}
