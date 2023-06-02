import React, { useState, createContext } from "react";

export const CartContext = createContext({  cart: [],
    alreadyInCart: () => {},
    addingProduct: () => {},
    deleteProduct: () => {},
    emptyCart: () => {}});

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    console.log(cart)

    const addingProduct = (item, quantity) => {
        console.log(quantity)
        console.log(item.id)
        if (!alreadyInCart(item.id)) {
            setCart(prev => [...prev, { item, quantity }]);
            console.log("Hola")
        } else {
            setCart(prev => prev.map(cartItem =>{
                if (cartItem.item.id === item.id) {
                    return {
                        item: cartItem.item,
                        quantity: cartItem.quantity + quantity
                    }
                }
            }))
            console.log("¡The product has been added successfully!");
        }
    }

    const alreadyInCart = (id) => {
        console.log(cart.some(prod => prod.item.id === id))
        return cart.some(prod => prod.item.id === id);
    }

    const deleteProduct = (id) => {
        const updatedCart = cart.filter(prod => prod.item.id !== id);
        setCart(updatedCart);
    }

    const emptyCart = () => {
        setCart([]);
    };

    const totalQuantity = cart.reduce((total, product) => total + product.quantity, 0)

    const total = cart.reduce((total, product) => total + (product.item.price * product.quantity), 0)

    return (
        
        <CartContext.Provider value={{ cart, addingProduct, deleteProduct, alreadyInCart, emptyCart, totalQuantity, total}}>
            {children}
        </CartContext.Provider>
    )

}
