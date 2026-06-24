import { createContext, useEffect, useState } from "react";
import { useProducts } from "../hooks/useProducts";

export const CartContext = createContext(null);

export function CartProvider({ children }) {
    const { getProductById } = useProducts();

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

    function removeItemFromCart(id) {
        setCartItems(cartItems.filter((items) => items.id !== id));
    }

    function updateQuantity(id, quantity) {
        if (quantity <= 0) {
            removeItemFromCart(id);
            return;
        }

        setCartItems(cartItems.map((item) => item.id === id ? { ...item, quantity: quantity } : item));
    }

    function getTotal() {
        const total = cartItems.reduce((total, item) => {
            const product = getProductById(item.id);
            return total + (product ? product.price * item.quantity : 0);
        }, 0);

        return total;
    }

    const orderItems = cartItems.map((item) => {
        const product = getProductById(item.id);

        return {
            ...product,
            ...item,
            totalPerProduct: product.price * item.quantity
        };
    });

    const [orderId, setOrderId] = useState(
        localStorage.getItem('cova-order-id')
            ? JSON.parse(localStorage.getItem('cova-order-id'))
            : ''
    );
    const [orderDetails, setOrderDetails] = useState(
        localStorage.getItem('cova-order')
            ? JSON.parse(localStorage.getItem('cova-order') || '{}')
            : {}
    );

    useEffect(() => {
        localStorage.setItem('cova-order-id', JSON.stringify(orderId));
    }, [orderId]);

    useEffect(() => {
        localStorage.setItem('cova-order', JSON.stringify(orderDetails));
    }, [orderDetails]);

    function clearCart() {
        setCartItems([]);
        setOrderItems([]);
        setOrderId('');
        setOrderDetails({});
    }

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeItemFromCart, updateQuantity, getTotal, orderItems, orderId, setOrderId, orderDetails, setOrderDetails, clearCart }}>{children}</CartContext.Provider>
    )
}