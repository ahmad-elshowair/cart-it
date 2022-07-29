import { Form, Button } from 'react-bootstrap'
import Rating from './Rating'
import { CartState } from '../context/Context';
import React from 'react';

const Filter = () => {
  const {
    filterState:{
      byStock,
      byRating,
      byDelivery,
      sort
    },
    filterDispatch
  } = CartState();
  
  return (
    <article className="filters">
        <h2 className="title">Filter Products</h2>
        <span>
          <Form.Check
            inline
            label="Ascending"
            name='group1'
            type="radio"
            id={`inline-1`}
            onChange={()=> 
              filterDispatch({
                type: "FILTER_BY_PRICE",
                payload: "lowToHigh"
              })
            }
            checked={sort === "lowToHigh" ? true: false}
          />
        </span>
        <span>
          <Form.Check
            inline
            label="Descending"
            name='group1'
            type="radio"
            id={`inline-2`}
            onChange ={() =>
              filterDispatch({
                type: "FILTER_BY_PRICE",
                payload: "highToLow"
              })
            }
            checked={sort === "highToLow" ? true: false}
          />
        </span>
        <span>
          <Form.Check
            inline
            label="Include Out of Stock"
            name='group1'
            type="checkbox"
            id={`inline-3`}
            onChange={() => 
              filterDispatch({
                type: "FILTER_BY_STOCK"
              })
            }
            checked={byStock ? true: false}
          />
        </span>
        <span>
          <Form.Check
            inline
            label="Fast Delivery Only"
            name='group1'
            type="checkbox"
            id={`inline-4`}
            onChange={() =>
              filterDispatch({
                type: "FILTER_BY_DELIVERY"
              })
            }
            checked={byDelivery ? true: false}
          />
        </span>
        <span>
          <label style={{paddingRight: 10}}>Rating: </label>
          < Rating 
            rating={byRating}
            style={{cursor: "pointer"}}
            onClick={(index) => 
              filterDispatch(
                {
                  type: 'FILTER_BY_RATING',
                  payload: index + 1
                }
              )
            }
          />
          </span>
        <Button 
          variant="light"
          onClick={() =>
            filterDispatch({
              type: "CLEAR_FILTER"
            })
          }
        >
          Clear Filter
        </Button>
    </article>
  )
}

export default Filter