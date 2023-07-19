import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import {faTrash,faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './Cart.css'

const Cart = ({carts,setCart}) => {

        /* Total calculation using Reduce  price */

    let TotalPrice=0
    let totalItem=0

    for (const CartPrice of carts){
        totalItem = totalItem + CartPrice.quantity
        TotalPrice= TotalPrice + (CartPrice.price)*(CartPrice.quantity)
       
    }


    /* Total calculation using Reduce  price */
//    const ItemPrice= carts=>{
//     const reducer= (pre,current)=> pre + parseInt(current.price)
//     const total = carts.reduce(reducer,0)
//     return total 
//    }

//    const TotalPrice= ItemPrice(carts)

   const totalShipingCharge= TotalPrice*(2/100)
   const vat= TotalPrice*(5/100)
   const grandTotal= TotalPrice+totalShipingCharge+vat

   const handleClearCart=()=>{
    localStorage.removeItem('cart')
    setCart([])
    }
    
    return (
        <div className='cart-container'> 
            <h3>Order Summary:</h3>
           <div className='cart-info'>
           <p> Total Items:{totalItem} </p>
           <p> Total price: ${TotalPrice.toFixed(2) } </p>
           <p> Total Shipping charge:$ {totalShipingCharge.toFixed(2)}</p>
           <p> Tax:$ {vat.toFixed(2)}</p>
           <p> GrandTotal: ${grandTotal.toFixed(2)}</p>
           </div>

           <div className='deleteBtn'>
           <button className='delete-btn' onClick={handleClearCart}>Clear Cart  
           <FontAwesomeIcon icon={faTrash} />
           </button>
           
           </div>
           <div className='reviewBtn'>
           <p >Review Order </p>
           <FontAwesomeIcon icon={faArrowRight} />
           
           </div>
            
        </div>
    );
};

export default Cart;