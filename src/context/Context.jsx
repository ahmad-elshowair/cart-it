import React, { createContext, useContext, useReducer } from 'react'
import faker from 'faker';
import { cartReducer, filterReducer } from './Reducers';

const Cart = createContext();
faker.seed(99);

const Context = ({children}) => {
  const products = [...Array(20)].map(()=>({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
    inStock: faker.random.arrayElement([0, 5, 6, 8, 2]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5])
  }));

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });  

  const [filterState, filterDispatch] = useReducer(filterReducer,{
    byStock: false,
    byDelivery: false,
    byRating: 0,
    bySearch: ''
  });

  return (
    <Cart.Provider 
      value={
        {
          state,
          dispatch,
          filterState, 
          filterDispatch
        }
      }>
        {children}
    </Cart.Provider>
  )
};

export const CartState = ()=>{
  return useContext(Cart)
};

export default Context;