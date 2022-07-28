import React from 'react'
import {Card, Button} from 'react-bootstrap'
import { CartState } from '../context/Context'
import Rating from './Rating'

const SingleProduct = ({product}) => {

  const {
    state: { cart },
    dispatch

  } = CartState();

  return (
    <article className='products'>
      <Card>
        <Card.Img variant='top' src={product.image} alt={product.name}/>
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Subtitle>
            <span>$ {product.price.split(".")[0]}</span>
            {
              product.fastDelivery ?(
                <div>Fast Delivery</div>
              ):(
                <div>4 days Delivery</div>
              )
            }
            <Rating rating={product.ratings}/>
          </Card.Subtitle>
          {
            cart.some((p) => p.id === product.id) ?(
              <Button 
                variant='danger'
                onClick={() => dispatch({
                  type: "REMOVE_FROM_CARD",
                  payload: product
                })}
              >
                Remove from Cart
              </Button>
            ):(
              <Button 
                disabled={!product.inStock}
                onClick={ () => dispatch({
                    type: "ADD_TO_CARD",
                    payload: product
                  })
                }
              >
                {!product.inStock ?"out of stock" : "Add to Cart"}
              </Button>
            )
          }
        </Card.Body>
      </Card>
    </article>
  )
}

export default SingleProduct