import './CartWidget.css'
import imgCarrito from './carrito.png'

const CartWidget = () => {
    //const imgCarrito = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBM-ymc5w0mBrSEBU7Wp2xpd5Rg9DFFfmSWQ&usqp=CAU"
    return (
        <div>
            <img className="imgCarrito" src={imgCarrito} alt="Cart image" />
            <strong>5</strong>
        </div>
    )
}

export default CartWidget
