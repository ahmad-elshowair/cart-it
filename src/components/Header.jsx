import React from 'react'
import { Navbar, Container, Form, Dropdown, Nav, Badge } from 'react-bootstrap'
import { GiShoppingCart } from 'react-icons/gi';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <Navbar bg='dark' variant='dark' style={{height: "80px"}}>
      <Container>
        <Navbar.Brand>
          <Link 
            to='/'
            className="brand"
          >
            Cart it
          </Link> 
        </Navbar.Brand>
        <Navbar.Text className='search'>
          <Form.Control 
            style={{width: 400}}
            placeholder="search a product ... " 
            className='m-auto'
          >
          </Form.Control>
          </Navbar.Text>
        <Nav>
          <Dropdown alignright='true'>
            <Dropdown.Toggle variant='success'>
              <GiShoppingCart color="white" fontSize="30px"/>
              10
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <span style={{padding: 10}}>Cart is Empty</span>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  )
}
