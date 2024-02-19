// Libraries
import React, { useState } from 'react'

// CSS
import '../components.css'

// Components
import PrimaryButton from './PrimaryButton'

const Product = ({product}) => {
    const [count, setCount] = useState(0);

    const addProduct = () => {
        setCount(count + 1);
    }

    return (
        <div className='flex-col product'>
            <h1>{product.name}</h1>
            <h2>{product.price} €</h2>
            <img src={product.imgUrl} alt={product.name} className='product-img' />
            <h3>Count: {count}</h3>
            <PrimaryButton clickEvent={addProduct}>Add</PrimaryButton>
        </div>
    )
}

export default Product