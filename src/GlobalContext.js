import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate, useLocation } from "react-router-dom";
import api from "./api";

const GlobalContext = React.createContext();

const GlobalProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [users, setUsers] = useState(null);
    const [loggedIn, setLoggedIn] = useState(false);
    const [accessToken, setAccessToken] = useState(null);
    const [refreshToken, setRefreshToken] = useState(null);
    const [items, setItems] = useState([]);
    const [cart, setCart] = useState([]); // Cart state added
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        api.getProducts()
          .then(data => setItems(data))
          .catch(error => {
            console.error('Error fetching products:', error);
            toast.error("Error fetching products:");
        });
    }, []);


    const headerConfig = () => {
        return { headers: { Authorization: `Bearer ${accessToken}`, "Content-Type": "application/json" } };
    };

    const handleLogin = (obj)=>{
        if(obj){
            setAccessToken(obj.accessToken);
            setRefreshToken(obj.refreshToken);
            setLoggedIn(true);
            setUser(obj.user);
        }
    }

    const handleLogout = ()=>{
        setAccessToken(null);
        setAccessToken(null);
        setLoggedIn(false);
        setUser(null);
    }

    // Function to add item to cart
    const addToCart = (item) => {
        //console.log(item);
        setCart((prevCart) => {
            const itemExists = prevCart.find(cartItem => cartItem.componentId === item.componentId);
            if (itemExists) {
                return prevCart.map(cartItem =>
                    cartItem.componentId === item.componentId
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                );
            } else {
                return [...prevCart, { ...item, quantity: 1 }];
            }
        });
        toast.success(`${item.name} added to cart.`);
    };

    // Function to remove item from cart
    const removeFromCart = (itemId) => {
        setCart((prevCart) => {
            const updatedCart = prevCart
                .map(cartItem =>
                    cartItem.componentId === itemId && cartItem.quantity > 1
                        ? { ...cartItem, quantity: cartItem.quantity - 1 }
                        : cartItem
                )
                .filter(cartItem => cartItem.quantity > 0);
            return updatedCart;
        });
        toast.info(`Item removed from cart.`);
    };

    // Function to clear cart
    const clearCart = () => {
        setCart([]);
        toast.info("Cart cleared.");
    };

    return (
        <GlobalContext.Provider value={{
            user,
            setUser,
            users,
            loggedIn,
            accessToken,
            items,
            cart,
            addToCart,
            removeFromCart,
            clearCart,
            handleLogin,
            handleLogout
        }}>
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalContext;
export { GlobalProvider };
