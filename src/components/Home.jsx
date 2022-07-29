import React from 'react'
import { CartState } from '../context/Context'
import Filter from './Filter';
import SingleProduct from './SingleProduct';

const Home = () => {

  const { state: {
      products,
    },
    filterState:{
      sort,
      bySearch,
      byRating,
      byDelivery,
      byStock,
    },
  } = CartState();

const filteredProducts = () =>{
  let sortedProducts = products;
  if (sort) {
    sortedProducts = sortedProducts.sort((a,b)=>
      sort === "lowToHigh" ? (a.price - b.price) :(b.price - a.price) 
    );
  } 
  if (!byStock) {
    sortedProducts = sortedProducts.filter(product => 
      product.inStock
    );
  }

  if (byDelivery) {
    sortedProducts = sortedProducts.filter(product => 
      product.fastDelivery
    )
  }

  if(byRating) {
    sortedProducts = sortedProducts.filter(
      product => product.ratings >= byRating
    );
  }

  if(bySearch) {
    sortedProducts = sortedProducts.filter(
      product => product.name.toLowerCase().includes(bySearch)
    );
  }
  return sortedProducts;
}
  return (
    <section className="home">
      <Filter/>
      <article className="productContainer">
        {
          filteredProducts().map((product) =>(<SingleProduct product={product} key={product.id}/>))
        }
      </article>
    </section>
  )
}

export default Home