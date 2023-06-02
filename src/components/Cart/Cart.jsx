import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import CartItem from "../CartItem/CartItem"

const Cart = () => {

const { cart, totalQuantity, total, emptyCart } = useContext(CartContext) 

if (totalQuantity === 0){

    return(
        <>
            <h2>There are not products in the cart</h2>
            <Link to='/'> Buy one of our products or services </Link>
        </>
    )
}

    return (
        <div>
            {cart.map(product => <CartItem key={product.id} { ...product }/>)}
            <h3>Total Purchase: {totalQuantity}</h3>
            <h3>Total: {total} €</h3>
            <button onClick={ () => emptyCart()}> Empty cart</button>
            <Link to='/checkout'>End purchase</Link>
        </div>
    )
}

export default Cart
