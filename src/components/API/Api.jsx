/*
import { useState, useEffect } from "react";

const Api = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("https://643a5979bd3623f1b9b173dc.mockapi.io/api/products")
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.log(error))
    }, [])
    

    return (
        <>
            <div>
                <h1>Maga.Mic Services & Products</h1>

                <ul>
                    {
                        products === undefined ? <h2> There are not services or products to show </h2> : products.map(prod => (<li key={prod.id}> <img src={prod.image} /> {prod.name} </li>))
                    }
                </ul>

            </div>
        </>
    )
}

export default Api
*/