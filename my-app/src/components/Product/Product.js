import React from "react";
import "./Product.css";
import JSONData from "../JSONData/Data.json";
import { useParams } from "react-router";
import ProductDetails from "./ProductDetails";


function Product() {
  let { search } = useParams();
  if (!search) {
    search = " ";
  }
  const filterProduct = JSONData.filter((product) => {
    return (
      product.title.toLowerCase().includes(search) ||
      product.category.toLowerCase().includes(search)
    );
  });
  return (
    <div classNameName="product">
      <div className="product__container">
      
        <div className="product_row">
          {filterProduct.map((product, index) => {
            return (
              <div key={index} >
                <ProductDetails
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  image={product.image}
                  rating={product.rating}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Product;
