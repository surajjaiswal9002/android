import React from "react";
import { useStateValue } from "../StateProvider/StateProvider";
import "./CartDetails.css";
import { Button } from "@momentum-ui/react";


export default function CartDetails({ id, title, image, price, quantity }) {
  const [, dispatch] = useStateValue();

  // function to Remove the product
  const remove = () => {
    dispatch({
      type: "REMOVE",
      item: {
        id: id,

      },
    });
  };

  // function to Increament the cart Item quantity
  const incrementQuantity = () => {
    dispatch({
      type: "UPDATEQTY",
      item: {
        id: id,
        quantity: quantity + 1,
      },
    });
  };

  // function to Decreament tha cart Item quantity
  const decrementQuantity = () => {
    dispatch({
      type: "UPDATEQTY",
      item: {
        id: id,
        quantity: quantity - 1,
      },
    });
  };

  return (
    <div className="CartDetails">
      <img className="CartDetails_image" src={image} alt="" />

      <div className="CartDetails_info">
        <p className="CartDetails_title">{title}</p>
        <p className="CartDetails_price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>

        <div className="Quantity">
          <div className="Q_btnPlus" onClick={incrementQuantity}>
            +
          </div>
          <input className="Q_count" type="text" placeholder={quantity} />
          <div className="Q_btnMinus" onClick={decrementQuantity}>
            -
          </div>
        </div>
        <Button children="Remove" onClick={remove} color="blue" />
      </div>
    </div>

   
  );
}
