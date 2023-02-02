import React,{ createContext,useState,useEffect} from 'react'

export const CartContext = createContext()


const init = JSON.parse(sessionStorage.getItem('carrito'))||[]
export const CartContextProvider =({children})=>{


    const [cart, setCart]=useState(init)
/**
addToCart - a function that adds an item to the cart.
@param {Object} item - The item to be added to the cart.
@returns {Array} - Returns an updated cart with the added item.
*/
    const addToCart = (item) => {
    
      setCart( [...cart, item] )
    
    }
    const clearCart = () => {
      setCart([])
    }
    
    const calculateCartItems = () => {
      return cart.reduce( (acc, prod) => acc + 1, 0 )
    }
      const removeItem  = (itemId) => {
        const newCart = cart.filter( (prod) => prod.id !== itemId)
        setCart( newCart )
      }
      const totalCost = () => {
       return cart.reduce( (acc, prod) => acc + 1 * prod.product_price, 0)
      }
    
      useEffect(()=>{
        sessionStorage.setItem('carrito', JSON.stringify(cart))
      }, [cart])
    
      
       
    return( 
    <CartContext.Provider value={{
        addToCart,
        calculateCartItems,
        removeItem,
        cart,
        totalCost,
        clearCart
    }}>
    
    {children}
    
    </CartContext.Provider>

);
}

