import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Products/Product';
import Cart from '../Cart/Cart';
import { getCurt } from '../Utility/LocalStorageDb/LocalDb';
import useProducts from '../../Hook/useProducts';
import useCart from '../../Hook/useCart';
import { Link } from 'react-router-dom';
import Shipment from '../AuthFiles/Shipment';


const Shop = () => {
    const [products, setProduct] = useProducts()
     const [cart, setCart] = useCart(products)

    // const [products, setProducts] = useState([])
    // const [cart, setCart] = useState([])

    // useEffect(() => {
    //     fetch('Products.json')
    //         .then(res => res.json())
    //         .then(data => setProducts(data))
    // }, [])


    // /* Cart display from loacl storage save cart */
    // useEffect(() => {
    //     const addedCart = getCurt()
    //     let newProductArray = []
    //     for (const cartId in addedCart) {
    //         const addedProduct = products.find(product => product.id === cartId)
    //         if (addedProduct) {
    //             const quantity = addedCart[cartId]
    //             addedProduct.quantity = quantity
    //             newProductArray.push(addedProduct)
    //         }

    //     }

    //     setCart(newProductArray)
    // }, [products])

    // console.log(cart)

    const handleAddToCart = (selectedProduct) => {

        /* local storage e add korar code start */
        //console.log(product)
        const existCart = getCurt()
        if (existCart[selectedProduct.id]) {
            existCart[selectedProduct.id] = existCart[selectedProduct.id] + 1
        }
        else {
            existCart[selectedProduct.id] = 1
        }
        //console.log(existCart)
        const existCartStringify = JSON.stringify(existCart)
        localStorage.setItem('cart', existCartStringify)
        /* local storage e add korar code end */

        /* cart add korar code start */

        let newCart = []
        const existProduct = cart.find(exist => exist.id === selectedProduct.id)
        if (!existProduct) {
            selectedProduct.quantity = 1
            newCart = [...cart, selectedProduct]

        }
        else {
            const rest = cart.filter(x => x.id !== selectedProduct.id)
            selectedProduct.quantity = existProduct.quantity + 1
            newCart = [...rest, selectedProduct]
        }

        /* cart add korar code end */


        setCart(newCart)
    }


    return (
        <div className='Shop-container'>
            <div className="Products-container">

                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    >
                    </Product>)
                }

            </div>
            <div className="Cart-order">
                <Cart
                    carts={cart}
                    setCart={setCart}
                >
                    <Link to='/Order'>Review Order</Link>
                </Cart>

            </div>
           <div id='ship'>
            <h2 style={{textAlign:"center", fontSize:"larger"}}> Shipment</h2>
           <Shipment/>
           </div>

        </div>
    );
};

export default Shop;