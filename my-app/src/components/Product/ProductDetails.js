import React from "react";
import "./ProductDetails.css";
import { useStateValue } from "../StateProvider/StateProvider";

//momentum-ui components
import { Button } from "@momentum-ui/react";

//momentum-ui css
import "../../../node_modules/@momentum-ui/core/css/momentum-ui.css";
import "../../../node_modules/@momentum-ui/icons/css/momentum-ui-icons.css";

export default function ProductDetails({
  id,
  title,
  image,
  price,
  rating,
  quantity,
}) {
  const [, dispatch] = useStateValue();

  // function to add the product
  let addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        quantity: quantity,
      },
    });
  };

  return (
    <div className="ProductDetails">
      <div className="ProductDetails__row">
        <img src={image} alt="" />
        <p>{title}</p>
        <p className="ProductDetails__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>

        <div className="ProductDetails__rating">
          {Array(4)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
       <Button children="Add to cart" onClick={ addToBasket } color="blue" />
      </div>
    </div>
  );
}
