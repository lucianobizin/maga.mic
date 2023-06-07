import './Cart.css'
import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import CartItem from "../CartItem/CartItem"

const Cart = () => {
    const { cart, totalQuantity, total, emptyCart } = useContext(CartContext)

    if (totalQuantity === 0) {
        return (
            <div className="container">
                <h2 className="empty-cart-message">There are no products in the cart</h2>
                <Link to="/" className="back-to-market-button">Buy one of our products or services</Link>
            </div>
        );
    }

    return (
        <div className="cart-container">
            {cart.map((product) => (
                <div key={product.item.id} className="cart-item">
                    <img
                        className="cart-item-image"
                        src={product.item.image}
                        alt={product.item.name}
                    />
                    <div className="cart-item-details">
                        <h3 className="cart-item-title">{product.item.name}</h3>
                        <p className="cart-item-price">Price: {product.item.price} Euros</p>
                        <p className="cart-item-quantity">Quantity: {product.quantity}</p>
                    </div>
                </div>
            ))}
            <h3 className="cart-total">
                Total Purchase: {totalQuantity}
            </h3>
            <h3 className="cart-total">
                Total: {total} €
            </h3>
            <div className='btns'>
                <button className="empty-cart-button" onClick={() => emptyCart()}>
                    Empty cart
                </button>
                <Link className="end-purchase-button" to="/checkout">
                    End purchase
                </Link>
                <Link className="end-purchase-button" to="/market">
                    Continue buying
                </Link>
            </div>
        </div>
    )
}

export default Cart