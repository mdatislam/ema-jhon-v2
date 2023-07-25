import React from 'react';
import './Product.css'

const Product = (props) => {
const {name,img,price,ratings,seller}=props.product
    return (
        <div>
            <div className='product-container'>
                <img src={img} alt="" />
                <div className='card-info'>
                <h4>{name}</h4>
                <p>price:${price}</p>
                <p>manufacturer:{seller}</p>
                <p>rating:{ratings}stars</p>
                <button onClick={()=>props.handleAddToCart(props.product)} className='btn'>addToCart</button>
                </div>
                
            </div>
            
        </div>
    );
};

export default Product;