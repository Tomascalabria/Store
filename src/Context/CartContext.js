  import React,{ createContext,useState,useEffect} from 'react'

  export const CartContext = createContext()


  const init = JSON.parse(sessionStorage.getItem('cart'))||[]
  export const CartContextProvider =({children})=>{
    const [cart, setCart]=useState(init)


    const addOne = (item) => {
      let existingProduct = cart.find((p) => {
        return p.product_id === item.product_id && p.size === item.size;
      })
    
      if (existingProduct&&existingProduct.stock[item.size]>=existingProduct.quantity) {
        existingProduct.quantity = existingProduct.quantity + 1;
        setCart([...cart]);
        sessionStorage.setItem("cart", JSON.stringify(cart));
      }   
    }
    const takeOne = (item) => {
      let existingProduct = cart.find((p) => {
        return p.product_id === item.product_id && p.size === item.size
      })
    
      if (existingProduct) {
        if (existingProduct.quantity === 1) {
          removeItem(existingProduct)
        } else if (existingProduct.quantity > 0) {
          existingProduct.quantity--
          setCart([...cart])
        }
      }
    }
    
    

    
  const addToCart=(product)=> {
    
    /**
  addToCart - a function that adds an item to the cart.
  @param {Object} item - The item to be added to the cart.
  @returns {Array} - Returns an updated cart with the added item.
  */

    const cartProductIndex = cart.findIndex(
      (cartProduct) => cartProduct.id === product.id && cartProduct.size === product.size
    )
    if (cartProductIndex >= 0) {
      const updatedCart = [...cart]
      updatedCart[cartProductIndex].quantity++
      setCart(updatedCart)
    } else {
      const differentSizeProductIndex = cart.findIndex(
        (cartProduct) => cartProduct.id === product.id
      )
      if (differentSizeProductIndex >= 0) {
        setCart([...cart,product])
      } else {
        setCart([...cart,product])
      }
    }
  }
  
      const clearCart = () => {
        setCart([])
      }
      const calculateCartItems = () => {
        return cart.reduce( (acc, prod) => acc + prod.quantity, 0 )
      }
      
      const removeItem = (item) => {
        const newCart = cart.filter((prod) => {
          return prod.product_id !== item.product_id || prod.size !== item.size;
        });
        setCart(newCart);
      }
      
        const totalCost = () => {
            return cart.reduce( (acc, prod) => acc + 1 * prod.product_price*prod.quantity, 0)
        
          }
      
        
        useEffect(()=>{
          sessionStorage.setItem('cart', JSON.stringify(cart))
        
        }, [cart])
      
        
        
      return( 
      <CartContext.Provider value={{
          addToCart,
          calculateCartItems,
          removeItem,
          cart,
          totalCost,
          clearCart,
          addOne,
          takeOne
              }}>
      
      {children}
      
      </CartContext.Provider>

  );
  }

