import React, { createContext } from 'react'
import { faker } from '@faker-js/faker'
const cartContext = createContext();

const Context = ({children}) => {

  const products = [...Array(20)].map(()=>{
    return {
      id: faker.datatype.uuid(),
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      image: faker.image.image(),
      inStoke: faker.datatype.array([3, 5, 3, 2, 1, 0]),
      fastDelivery: faker.datatype.boolean(),
      ratings: faker.datatype.array([1, 2, 3, 4, 5])
    }
  });
  return (
    <cartContext.Provider>
      {children}
    </cartContext.Provider>
  )
}

export default Context
