import React from 'react'
import { Navbar, Container, Form, Dropdown, Nav, Badge } from 'react-bootstrap'
import { GiShoppingCart } from 'react-icons/gi'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <Navbar bg='dark' variant='dark' style={{height: "80px"}}>
      <Container>
        <Navbar.Brand href="#">
          <Link to="/" className="brand">Cart it</Link> 
        </Navbar.Brand>
        <Form.Control style={{width: 400}} placeholder="what you are looking for ?" className='m-auto'></Form.Control>
        <Nav>
          <Dropdown alignright='true'>
            <Dropdown.Toggle variant='success'>
              <GiShoppingCart fontSize="25px"/>
              <Badge>{10}</Badge>
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
