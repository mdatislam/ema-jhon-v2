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

   

export {getCurt}