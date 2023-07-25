import { useEffect, useState } from "react"
import { getCurt } from "../Components/Utility/LocalStorageDb/LocalDb"
import useProducts from "./useProducts"

const useCart=(products)=>{
    
    const [cart,setCart]=useState([])

    useEffect(() => {
        const addedCart = getCurt()
       /// console.log(addedCart)
        let newProductArray = []
        for (const cartId in addedCart) {
            const addedProduct = products.find(product => product.id === cartId)
            if (addedProduct) {
                const quantity = addedCart[cartId]
                addedProduct.quantity = quantity
                newProductArray.push(addedProduct)
            }

        }

        setCart(newProductArray)
    }, [products])

    return [cart,setCart]
}

export default useCart;