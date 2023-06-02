import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartItem = ({item, quantity}) => {

    const {deleteProduct} = useContext(CartContext)


    return (
        <div>
            <h4> {item.name}</h4>
            <p> Quantity: {quantity} </p>
            <p> Price: {item.price} </p>
            <button onClick={ () => deleteProduct(item.id)}> Delete </button>
        </div>
    )
}

export default CartItem
