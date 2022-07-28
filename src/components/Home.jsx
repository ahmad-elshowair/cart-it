import React from 'react'
import { CartState } from '../context/Context'
import Filter from './Filter';
import SingleProduct from './SingleProduct';

const Home = () => {
  const {
    state: {products},
  } = CartState();
   console.log(products);
  return (
    <section className="home">
      <Filter/>
      <article className="productContainer">
        {
          products.map((product =>(<SingleProduct product={product} key={product.id}/>)))
        }
      </article>
    </section>
  )
}

export default Home