import "./ItemDetail.css"
import { useState, useContext } from "react";
import ItemCount from "../ItemCount/ItemCount"
import { CartContext } from "../../context/CartContext";
import { Link } from 'react-router-dom';

const ItemDetail = ({ id, name, price, deliverables, image, stock }) => {

    const [addQuantity, setAddQuantity] = useState(0);

    const { addingProduct } = useContext(CartContext);

    // De dónde sale quantity (counter de ItemCount?)
    const quantityHandler = (quantity) => {
        setAddQuantity(quantity)

        const item = { id, name, price, image }
        addingProduct(item, quantity);
    }


    return (

        <div className='ItemContainer'>
            <div className='ItemContainer-info'>
                <h2 className='ItemContainer-h2'>{name}</h2>
                <h3 className='ItemContainer-h3'>Price: {price} Euros</h3>
                <h3 className='ItemContainer-h3'>ID: {id}</h3>
                <p className='ItemContainer-p'>Deliverables: {deliverables}</p>
                <p className='ItemContainer-p'>Stock: {stock}</p>
            </div>
            <img className='ItemContainer-img' src={image} alt={name} />

            {
                addQuantity > 0 ? (<div className="ItemContainer-div">
                    <Link className="ItemContainer-btn" to="/cart"> End purchase </Link>
                    <Link className="ItemContainer-btn" to="/market"> Continue buying</Link>
                    </div>) : 
                    (<ItemCount initial={1} stock={stock} addingFunction={quantityHandler} />)
            }

        </div>
    )
}

export default ItemDetail
