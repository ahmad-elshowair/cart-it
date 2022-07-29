import React, { useEffect, useState } from 'react'
import { ListGroup, Button, Row, Col, Form, Image } from 'react-bootstrap';
import {CartState} from '../context/Context'
import Rating from './Rating';
import {AiFillDelete} from 'react-icons/ai'

const Cart = () => {
  const {
    state: {cart},
    dispatch
} = CartState();

const [totalPrice, setTotalPrice] = useState()
useEffect(() => {
  setTotalPrice(cart.reduce((prevValue, currValue)=> prevValue + Number(currValue.price) * currValue.quantity, 0))
}, [cart])


  return (
    <section className='home'>
      <article className="productContainer">
        <ListGroup>
          {
            cart.map((product) => (
              <ListGroup.Item key={product.id}>
                <Row>
                <Col md={2}>
                    <Image src={product.image} alt={product.name} fluid rounded/>
                  </Col>
                  <Col md={2}>
                    <span>
                      {product.name}
                    </span>
                  </Col>
                  <Col md={2}>
                    <span>
                      $ {product.price}
                    </span>
                  </Col>
                  <Col md={2}>
                    <Rating rating={product.ratings}/>
                  </Col>
                  <Col md={2}>
                    <Form.Control
                      as="select" 
                      value={product.quantity}
                      onChange={(event) => 
                        dispatch({
                          type: "CHANGE_CART_QUANTITY",
                          payload: {
                            id: product.id,
                            quantity: event.target.value
                          },
                        })
                      }
                    >
                      {
                        [...Array(product.inStock).keys()].map(x =>(
                          <option key={x+1}>{x + 1}</option>
                        ))
                      }
                    </Form.Control>
                  </Col>
                  <Col md={2}>
                    <Button 
                      type='button'
                      variant='light'
                      onClick={()=> dispatch({
                        type: "REMOVE_FROM_CARD",
                        payload: product
                      })}
                    >
                      <AiFillDelete
                        style={{fontSize : "20px"}}
                      />
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))
          }
        </ListGroup>
      </article>
      <article className="filters summary">
          <span className="title">
            Subtotal: ({cart.length}) Items
          </span>
          <span style={{fontWeight: "700", fontSize: "20px"}}>Total $ {totalPrice}</span>
          <Button type="button" disabled={cart.length === 0}>proceed to Checkout</Button>
      </article>
    </section>
  )
}

export default Cart