import React from 'react'
import { Navbar, Container, Form, Dropdown, Nav, Button } from 'react-bootstrap'
import { GiShoppingCart } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { CartState } from '../context/Context';
import {AiFillDelete} from 'react-icons/ai'

export const Header = () => {
  const {
    state: {cart},
    dispatch,
    filterDispatch
  } = CartState();
  return (
    <Navbar bg='dark' variant='dark' style={{height: "80px"}}>
      <Container>
        <Navbar.Brand>
          <Link 
            to='/cart-it'
            className="brand"
          >
            Cart it
          </Link> 
        </Navbar.Brand>
        <Navbar.Text className='search'>
          <Form.Control
            placeholder="search a product ... " 
            className='m-auto search-box'
            onChange={(event) =>
              filterDispatch({
                type: "FILTER_BY_SEARCH",
                payload: event.target.value 
              })
            }
          >
          </Form.Control>
          </Navbar.Text>
        <Nav>
          <Dropdown alignright='true'>
            <Dropdown.Toggle variant='success'>
              <GiShoppingCart color="white" fontSize="30px"/>
              {cart.length}
            </Dropdown.Toggle>
            <Dropdown.Menu style={{minWidth: "370px", left: "-288px"}}>
              {
                cart.length > 0 ? (
                  <>
                    {
                      cart.map((product) =>(
                        <span className="cartItem" key={product.id}>
                          <img 
                            className='cartItemImg'
                            src={product.image} 
                            alt={product.name}
                          />
                          <div className="cartItemDetail">
                            <span>{product.name}</span>
                            <span>$ {product.price.split('.')[0]}</span>
                          </div>
                          <Button
                            type="button"
                            variant='light'
                            onClick={()=> dispatch({
                              type:"REMOVE_FROM_CARD",
                              payload: product
                            })}
                          >
                            <AiFillDelete
                              fontSize="20px"
                              style={{
                                cursor: "pointer"
                              }}
                            />
                          </Button>
                        </span>
                      ))
                    }
                    <Link to='/cart'>
                      <Button
                        style={{width: "95%", margin: "0 10px"}} 
                      >Go to Cart</Button>
                    </Link>
                  </>
                ):(
                  <span style={{padding: 10}}>Cart is Empty</span>
                )
              }
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  )
}
