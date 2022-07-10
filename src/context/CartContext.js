import React, {createContext, useState} from 'react';

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cartItems, setCartItem] = useState([]);

    const getItemTotalPrice = (item) => {
        return item.price * item.counter;
    }

    const totalPrice = () => {
        let total = 0;
        cartItems.map((item) => {
            total += item.price * item.counter;
            return total;
        });
        return total;
    }

    const getQuantity = () => {
        let quantity = 0;

        cartItems.forEach((img) => {
           quantity += img.counter;
        })        
        return quantity;
    }

    const addQuantity = (id) => {
        setCartItem(cartItems.map((item) => {
            if(item.id === id && item.counter < item.stock){
                item.counter += 1;
            }
            return item;
        }))
    }

    const removeQuantity = (id) => {
        setCartItem(cartItems.map((item) => {
            if(item.id === id && item.counter > 1){
                item.counter -= 1;
            }
            return item;
        }))
    }

    const isInCart = (id) => {
        return cartItems.some(img => img.id === id);
    }

    const addItem = (img, counter) => {
        isInCart(img.id) ? setCartItem(cartItems.map((item) => {
            if(item.id === img.id && item.counter + counter <= img.stock){
                item.counter += counter
            }
            return item
        })) : setCartItem([...cartItems, { id: img.id, counter: counter, name: img.name, price: img.price, img: img.img, stock: img.stock }])
    }

    const removeItem = (itemId) => {
        setCartItem(cartItems.filter(item => item.id !== itemId));
    }

    const clear = () => {
        setCartItem([])
    }

    return (
        <CartContext.Provider value={{cartItems, setCartItem, addItem, removeItem, clear, isInCart, addQuantity, removeQuantity, getQuantity, getItemTotalPrice, totalPrice }}>
        {children}
        </CartContext.Provider>
    )
}