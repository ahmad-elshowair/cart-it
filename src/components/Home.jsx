import React from 'react'
import { CartState } from '../context/Context'

const Home = () => {
  const { state }= CartState();
  console.log(state);
  return (
    <div><h1>Home</h1></div>
  )
}

export default Home