import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"
import { db } from "../../service/config"
import { collection, addDoc } from "firebase/firestore"
import { Link } from "react-router-dom"
import './Checkout.css'


const Checkout = () => {

    const { cart, emptyCart, total } = useContext(CartContext)
    const [name, setName] = useState("")
    const [surnname, setSurname] = useState("")
    const [telephone, setTelephone] = useState("")
    const [email, setEmail] = useState("")
    const [emailConfirmation, setEmailConfirmation] = useState("")
    const [error, setError] = useState("")
    const [idOrder, setIdOrder] = useState("")

    const submitHandler = (event) => {
        event.preventDefault()

        if (!name || !surnname || !telephone || !email || !emailConfirmation) {
            setError("Please, fill in all labels")
            return;
        }

        if (email !== emailConfirmation) {
            setError("You passed two different emails, please check it")
            return;
        }

        const order = {
            items: cart.map(product => ({
                id: product.item.id,
                name: product.item.name,
                quantity: product.quantity
            })),
            total: { total },
            name,
            surnname,
            telephone,
            email
        };

        addDoc(collection(db, "Collection"), order)
            .then((docRef) => {
                setIdOrder(docRef.id)
                emptyCart()
            })
            .catch((error) => {
                setError("An errer occurred, please, come back in a few minutes again")
            })
    }

    return (
        <div className="container">
            <h2>Checkout</h2>
            <form onSubmit={submitHandler}>

                {
                    cart.map(product => (
                        <div key={product.item.id}>
                            <p> {product.item.name} x {product.quantity} </p>
                            <p> Price: € {product.item.price} </p>
                            <hr />

                        </div>
                    ))
                }
                <hr />
                <div>
                    <label className="form-labels" htmlFor="">Name</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label className="form-labels" htmlFor="">Surname</label>
                    <input type="text" value={surnname} onChange={(e) => setSurname(e.target.value)} />
                </div>
                <div>
                    <label className="form-labels" htmlFor="">Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label className="form-labels" htmlFor="">Email confirmation</label>
                    <input type="email" value={emailConfirmation} onChange={(e) => setEmailConfirmation(e.target.value)} />
                </div>
                <div>
                    <label className="form-labels" htmlFor="">Telephone</label>
                    <input type="text" value={telephone} onChange={(e) => setTelephone(e.target.value)} />
                </div>

                {error && !idOrder && (
                    <p className="error-message">{error}</p>
                )}

                <button type="submit" disabled={idOrder}>
                    {idOrder ? "Order Placed" : "End Order"}
                </button>

                {idOrder && (
                    <Link to="/market" className="back-to-market-button">
                        Back to Market
                    </Link>
                )}

                {idOrder && (
                    <div className="order-id">
                        <strong>
                            Thank you so much for your purchase! Your order ID is: {idOrder}
                        </strong>
                    </div>
                )}
            </form>
        </div>
    )
}

export default Checkout
