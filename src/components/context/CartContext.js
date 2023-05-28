import React, { useState, createContext } from "react";

export const CartContext = createContext({  cart: [],
    addingProduct: () => {},
    deleteProduct: () => {},
    emptyCart: () => {}});

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    console.log(cart)

    const addingProduct = (item, quantity) => {
        if (!alreadyInCart(item.id)) {
            setCart((prev) => [...prev, { item, quantity }]);
        } else {
            console.log("¡The product has been added successfully!");
        }
    };

    const alreadyInCart = (id) => {
        return cart.some(prod => prod.id === id);
    };

    const deleteProduct = (id) => {
        const updatedCart = cart.filter(prod => prod.id !== id);
        setCart(updatedCart);
    };

    const emptyCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, addingProduct, deleteProduct, emptyCart }}>
            {children}
        </CartContext.Provider>
    )

}
