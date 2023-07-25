import React from 'react';



    const getCurt=()=>{
        const existingCart= localStorage.getItem('cart')
        let cartObj
        if(existingCart){
            cartObj= JSON.parse(existingCart)
        }
        else{
            cartObj={}
        }
        return cartObj
    }

    const removeItem=id=>{
        const existingCart= getCurt()
        
        if(existingCart){
            delete existingCart[id]
            localStorage.setItem( 'cart',JSON.stringify(existingCart))
        }
    }

   

export {getCurt,removeItem}