import React, { useRef } from "react";
import { useContext } from "react";
import { CartContext } from '../../Context/Cart/CartContext'
import { CartIcon } from "./CartIcon";
import closeIcon from "../../Media/CloseIcon.png";
import { Link } from "react-router-dom";

export const Cart = () => {
const { cart, totalCost,addOne,takeOne,handleClick,style} = useContext(CartContext);
const ref = useRef(null);




return (
<>
<CartIcon props={{ handleClick }}  />

<div ref={ref} className={style}>
  {cart.length===0?
  <>
  <div className="close_cart_container">
  <img alt="Cerrar el carrito de compras. Hace click y cerrá el carrito."
    className="close_cart"
    src={closeIcon}
    onClick={handleClick}
  ></img>
</div>
  <div className="cart_items_outer_container">

  <h3 className="cart_title">Su carrito esta vacio</h3>
  </div>
  </>
  :
  <>
    <div className="close_cart_container">
      <img
        className="close_cart"
        alt="close the shopping cart"
        src={closeIcon}
        onClick={handleClick}
      ></img>
    </div>
    <h2 className="cart_title">Su Carrito</h2>
    <div className="cart_items_outer_container">
      <div className="cart_items_container">
        {cart.map((items) => {
          return (
            <>
              <div className="cart_items" key={items.product_id}>
                <img
                alt={items.product_name}
                  className="cart_product_img"
                  src={items.product_img}
                />
                <div className="product_info">
                  <h5 className="cart_product_name">
                    {items.product_name}
                  </h5>
                  <ul className="product_size">
                    <li className="product_size_number">
                      Talle: {items.size}
                    </li>
                  </ul>
                  <ul className="product_category">
                    <li className="product_category_name">
                      Tipo: {items.category_name}
                    </li>
                  </ul>
                </div>
                <div className="cart_product_price_container">
                <h4 className="cart_product_price">$ {items.product_price*items.quantity}</h4>
                <div className="manage_quantity_container">
                  <button className="manage_quantity_btn" onClick={()=>addOne(items)}> + </button>
                  <p className="quantity">{items.quantity}</p>
                  <button className="manage_quantity_btn" onClick={()=>takeOne(items)}> - </button>
                </div>
                </div>

              </div>
            </>
          );
        })}
        <div className="cart_cost_container">
        <h3 color="white" className="cart_cost">
          Sub total: ${totalCost()}</h3>
        <Link to={'/checkout'} ><button onClick={handleClick} className="checkOut_btn">Pagar</button></Link>
      </div>
      </div>
      
    </div>
    </>
}
  </div>

</>
);
};