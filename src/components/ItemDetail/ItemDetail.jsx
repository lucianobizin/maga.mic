import "./ItemDetail.css"

const ItemDetail = ({ id, name, price, deliverables, image }) => {
    return (
        <div className='ItemContainer'>
            <div className='ItemContainer-info'>
                <h2 className='ItemContainer-h2'>{name}</h2>
                <h3 className='ItemContainer-h3'>Price: {price} Euros</h3>
                <h3 className='ItemContainer-h3'>ID: {id}</h3>
                <p className='ItemContainer-p'>Deliverables: {deliverables}</p>
            </div>
            <img className='ItemContainer-img' src={image} alt={name} />
        </div>
    )
}

export default ItemDetail
