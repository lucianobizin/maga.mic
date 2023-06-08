import './ItemCount.css'
import { useState } from "react";


const ItemCount = ({initial, stock, addingFunction} ) => {

    const [counter, setCounter] = useState(initial);

    const increase = () => {
        if (counter < stock) {
            setCounter(counter + 1);

        }
    }

    const decrease = () => {
        if (counter > initial) {
            setCounter(counter - 1)
        }
    }

    return (
        <>
            <div className='buttons'>
                <button className="button-item" onClick={decrease}> - </button>
                <p> {counter} </p>
                <button className="button-item" onClick={increase}> + </button>
            </div>

            <button className="button-item-addToCart" onClick={() => addingFunction(counter)}> Add to Cart </button >
        </>
    )
}

export default ItemCount
