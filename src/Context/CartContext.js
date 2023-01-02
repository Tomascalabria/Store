import React,{ createContext,useState,useEffect} from 'react'

export const CartContext = createContext()


const init = JSON.parse(sessionStorage.getItem('carrito'))||[]
export const CartContextProvider =({children})=>{


    const [carrito, setCarrito]=useState(init)

    const addToCart = (item) => {
    
      setCarrito( [...carrito, item] )
    
    }
    const clearCart = () => {
      setCarrito([])
    }
    
    const calculateCartItems = () => {
      return carrito.reduce( (acc, prod) => acc + 1, 0 )
    }
      const removeItem  = (itemId) => {
        const newCart = carrito.filter( (prod) => prod.id !== itemId)
        setCarrito( newCart )
      }
      const totalCost = () => {
        return carrito.reduce( (acc, prod) => acc + prod.cantidad * prod.precio, 0)
      }
    
      useEffect(()=>{
        sessionStorage.setItem('carrito', JSON.stringify(carrito))
      }, [carrito])
    
      
       
    return( 
    <CartContext.Provider value={{
        addToCart,
        calculateCartItems,
        removeItem,
        carrito,
        totalCost,
        clearCart
    }}>
    
    {children}
    
    </CartContext.Provider>

);
}

