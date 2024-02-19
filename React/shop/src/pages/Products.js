// Libraries
import React from 'react'

// CSS
import '../components.css'

// DB
import data from '../db.json'

// Components
import Product from '../components/Product'

const Products = () => {

  return (
    <div className='body'>
      <h1>Products</h1>
      {Object.values(data.products).map((product, index) => {
        return (
          <><Product product={product} key={index}/> <br></br></>
        );
      })}
    </div>
  )
}

export default Products