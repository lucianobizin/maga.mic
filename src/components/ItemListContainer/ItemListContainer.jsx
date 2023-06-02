import { useState, useEffect } from 'react'
// import { getProducts, getProductByCategory } from "../../products"
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { db } from '../../service/config'
import { collection, getDocs, where, query } from 'firebase/firestore'
import "./ItemListContainer.css"

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const { idCategory } = useParams();

    useEffect(() => {
        const myProducts = idCategory ? query(collection(db, "Products"), where("category", "==", idCategory)) : collection(db, "Products")
        getDocs(myProducts)
            .then(res => {
                const newProducts = res.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data }
                })
                setProducts(newProducts)
            })
            .catch(err => console.log(err))
    }, [idCategory])



    return (
        <>
            <h2 className="products-heading"> PRODUCTS 4 YOU </h2>
            <ItemList products={products} />
        </>
    )
}

export default ItemListContainer
