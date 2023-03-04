  import React,{ createContext,useState,useEffect} from 'react'

  export const CartContext = createContext()

// --- handling the stock --- // 

const init = JSON.parse(sessionStorage.getItem('cart'))||[]
  export const CartContextProvider =({children})=>{
    const [cart, setCart]=useState(init)


  const addOne = (item) => {
      let existingProduct = cart.find((p) => {
        return p.product_id === item.product_id && p.size === item.size;
      })
    
      if (existingProduct&&existingProduct.stock[item.size]>existingProduct.quantity) {
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
    
      /**
  addToCart - a function that adds an item to the cart.
  @param {Object} item - The item to be added to the cart.
  @returns {Array} - Returns an updated cart with the added item.
  */
  const addToCart = (product) => {
    const cartProduct = cart.find(
        (item) => item.id === product.id && item.size === product.size
    );
    if (!cartProduct) {
        if (product.quantity > product.stock[product.size]) {
            return;
        }
        setCart([...cart, product]);
        return;
    }

    if (cartProduct.quantity >=cartProduct.stock[cartProduct.size]) {
        return;
    }

    let updatedCart = [...cart];
    const cartProductIndex = updatedCart.findIndex(
        (item) => item.id === product.id && item.size === product.size
    );
    updatedCart[cartProductIndex].quantity++;
    setCart(updatedCart);
};

  
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
      
// --- Handling the UI --- // 

const [style, setStyle] = useState("menu");
const [menuStatus, setMenuStatus] = useState("open");
const handleClick = () => {
  switch (menuStatus) {
    case "open":
      setMenuStatus("close");
      setStyle("menu active");
    break;
    case "close":
      setMenuStatus("open");
      setStyle("menu");
    break;
    default:
      setMenuStatus("open");
      setStyle("menu")
    break;
}}
useEffect(() => {
  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      setMenuStatus('close');
      setStyle('menu');
    }
  }
  document.addEventListener('keydown', handleKeyDown);
  return () => {
    document.removeEventListener('keydown', handleKeyDown);
  };
}, [menuStatus]);


      return( 
      <CartContext.Provider value={{
          addToCart,
          setCart,  
          calculateCartItems,
          removeItem,
          cart,
          totalCost,
          clearCart,
          addOne,
          handleClick,
          style,
          menuStatus,
          takeOne
              }}>
      
      {children}
      
      </CartContext.Provider>

  );
  }

