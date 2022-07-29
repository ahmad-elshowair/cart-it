
export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CARD":
      return {
        ...state,
        cart: [
          ...state.cart,
          {...action.payload, quantity: 1} 
        ]
      };
    case "REMOVE_FROM_CARD":
      return{
        ...state, 
        cart: state.cart.filter(c => c.id !== action.payload.id),
      };
    case "CHANGE_CART_QUANTITY":
      return{
        ...state,
        cart: state.cart.filter((product) => 
        product.id === action.payload.id ?(
          product.quantity = action.payload.quantity
          ):(
            product.quantity
            )
        )
      }
    default:
      return state;
  }
}

