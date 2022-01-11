export const initialState = {
  basket: [],
};
const reducer = (state, action) => {
  switch (action.type) {
    // add the product from the cart page 
    case "ADD_TO_BASKET":
      let existingItem = state.basket.find(
        (item) => item.id === action.item.id
      );
      let cartItem = [...state.basket];
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        existingItem = {
          ...action.item,
          quantity: 1,
        };
        cartItem.push(existingItem);
      }
      return {
        ...state,
        basket: cartItem,
      };

      // Remove the product from the cart
    case "REMOVE": 
      const indexItem = state.basket.findIndex(
        (item) => item.id === action.item.id
      );
      let baskketItem = [...state.basket];
      if (indexItem >= 0) {
        baskketItem.splice(indexItem,1);
      } else {
        console.warn(
          `can't remove product (id: ${action.id}) ad its not in basket!`
        );
      }
      return {
        ...state,
        basket: baskketItem,
      };

      // Increament and Decreament the quantity from the cart 
    case "UPDATEQTY": //update
      const updateQuantity = [...state.basket];
      if (updateQuantity) {
        updateQuantity.find((item) => item.id === action.item.id).quantity =
          action.item.quantity;
      } else {
        console.error("Error in updateQuantity  ", updateQuantity);
      }
      return {
        ...state,
        basket: updateQuantity,
      };
    default:
      return state;
  }
};

//  Total price show in the cart page 
export const getBasketTotal = (basket) =>
  basket.reduce((amount, item) => amount + item.quantity * item.price, 0);

  // Total Quantity show in the  Navbar
export const Totalquantity = (basket) =>
  basket.reduce((amount, item) => amount + item.quantity, 0);

export default reducer;
