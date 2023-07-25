import React from 'react';
import './ReviewOrder.css'
import { BeakerIcon, TrashIcon } from '@heroicons/react/24/solid'

const ReviewOrder = (props) => {
    const {cart,handleRemoveCurt}=props
    const {name,img,price,ratings,seller}=cart
    return (
        <div>
            <div className='Review-order-container'>
            <div className='order-pic'>
                <img  src={img} alt='pic'/>
            </div>
            <div className='Review-info-container justify-between'>
                <div className='Order-info'>
                   <h1 title={name}>
                    { name.length >20 ?name.slice(0,20) + '...' :name}
                    </h1>
                   <p>price:{price}</p>
                   <small>Rating:{ratings}</small>
                </div>
                <div className='button-remove-container'>
                    <button onClick={()=>handleRemoveCurt(cart)} className='remove-button'>
                    <TrashIcon className=" remove-icon" />
                    </button>

                
                    
                </div>
            </div>
            </div>
            
        </div>
    );
};

export default ReviewOrder;