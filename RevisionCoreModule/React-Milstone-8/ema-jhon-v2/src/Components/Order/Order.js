import { Link } from "react-router-dom";
import useCart from "../../Hook/useCart";
import useProduct from "../../Hook/useProducts";
import Cart from "../Cart/Cart";
import ReviewOrder from "../ReviewOrder/ReviewOrder";
import { removeItem } from "../Utility/LocalStorageDb/LocalDb";



const Order = () => {
    const [products] = useProduct()
    const [cart, setCart] = useCart(products)

    const handleRemoveCurt=product=>{
        const rest = cart.filter(item=> item.id !== product.id)
        setCart(rest)
        removeItem(product.id)
        
    }

    return (
        <div className=" mx-4 grid grid-cols-5 ">

            <div className="col-span-4 mx-auto gap-2 my-4">
                <h2>The product No: {products.length}</h2>
                <h2> the cart no: {cart.length}</h2>
                <h3 className="font-large text-cyan-500 Text-center">The Order Review List</h3>
                {
                    cart.map(product => <ReviewOrder
                        key={product.id}
                        cart={product}
                        handleRemoveCurt={handleRemoveCurt}
                    ></ReviewOrder>)
                }
            </div>
            <div>
                
                <Cart
                    carts={cart}
                    setCart={setCart}
                >
                    <Link to='/Inventory'>Order Checkout</Link>
                </Cart>
            </div>

        </div>
    );
};

export default Order;