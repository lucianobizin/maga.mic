import './CartWidget.css'
import imgCarrito from './carrito.png'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'

const CartWidget = () => {

    const { cart, totalQuantity, total } = useContext(CartContext)

    return (
        <Link to='/cart'>
            <img className="imgCarrito" src={imgCarrito} alt="Cart image" />
            {
                totalQuantity > 0 && <span> {totalQuantity} </span>
            }
        </Link>
    )
}

export default CartWidget
