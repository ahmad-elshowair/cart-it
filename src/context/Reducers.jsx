
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

export const filterReducer = (state,action)=>{
  switch (action.type) {
    case "FILTER_BY_PRICE":
      return {
        ...state,
        sort: action.payload
      }
    case "FILTER_BY_STOCK":
      return {
        ...state,
        byStock: !state.byStock
      }
    case "FILTER_BY_DELIVERY":
      return {
        ...state,
        byDelivery: !state.byDelivery
      }
    case "FILTER_BY_RATING":
      return {
        ...state,
        byRating: action.payload
      }
    case "FILTER_BY_SEARCH":
      return {
        ...state,
        bySearch: action.payload
      }
    case "CLEAR_FILTER":
      return {
        byStock: false,
        byDelivery: false,
        byRating: 0,
        bySearch: ''
      }
    default:
      return state;
  }
}