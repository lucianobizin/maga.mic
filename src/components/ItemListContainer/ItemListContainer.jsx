import { useState, useEffect } from 'react'
import { getProducts, getProductByCategory } from "../../products"
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import "./ItemListContainer.css"

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const { idCategory } = useParams();

    useEffect( () => {

        const productsFunction = idCategory ? getProductByCategory : getProducts;

        productsFunction(idCategory)
            .then(res => setProducts(res))
            .catch(error => console.log(error))
    }, [idCategory])

    return (
        <>
            <h2 className="products-heading"> PRODUCTS 4 YOU </h2>
            <ItemList products={products} />
        </>
    )
}

export default ItemListContainer
