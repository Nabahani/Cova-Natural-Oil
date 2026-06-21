import { createContext, useEffect, useState } from "react";

export const CartContext = createContext(null);

export function CartProvider({ children }) {

    const [cartItems, setCartItems] = useState(
        localStorage.getItem('cart')
            ? JSON.parse(localStorage.getItem('cart'))
            : []
    );

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    function addToCart(id) {
        const existing = cartItems.find((item) => item.id === id);

        if (existing) {
            const currentQuantity = existing.quantity;
            setCartItems(
                cartItems.map((item) => item.id === id
                    ? { ...item, quantity: currentQuantity + 1 }
                    : item
                )
            );
        } else {
            setCartItems([...cartItems, { id: id, quantity: 1 }]);
        }
    }

    function removeFromCart(id) {
        setCartItems(cartItems.filter((items) => items.id !== id));
    }

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>{children}</CartContext.Provider>
    )
}