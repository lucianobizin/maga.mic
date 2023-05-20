import { Link } from 'react-router-dom'
import "./Item.css"

const Item = ({ name, price, image, category, id}) => {

    return (

        <div className='cardProduct'>
            <img className='imgProduct' src={image} alt={name} />
            <h3 className='card-product-title'>{name} </h3>
            <p className='card-product-price'>Price: {price} Euros</p>
            <p className='card-product-id'>Product ID: {id} </p>
            <p className='card-product-category'>Prod. Cat.: {category}</p>
            <Link to={`/item/${id}`}> See Details </Link>
        </div>
    )
}

export default Item
