// import "./Cart.css";
// import { useState } from "react";
// import { CartIcon } from "../Navbar/CartIcon";
// import { animated, useTransition } from "react-spring";

// export const Cart=()=> {
//   const [show, setShow] = useState();
//   const transitions = useTransition(show, null, {
//     from: { position: "fixed", opacity: 0, width: 0 },
//     enter: { opacity: 1, width: 520 },
//     leave: { opacity: 0, width: 0 }
//   });
  
//   return (
//     <div className="Cart">
//      <CartIcon props={{setShow}}  />
//       {transitions?.map(
//         ({ item, key, props }) =>
//           item && (
//             <animated.div
//               key={key}
//               style={{ opacity: props.opacity }}
//               className="overlay"
//             >
//               <animated.div style={{ width: props.width }} className="drawer">
//                 Hey look it's a side drawer!
//               </animated.div>
//               <div className="fill" onClick={() => setShow(false)} />
//             </animated.div>
//           )
//       )}
//     </div>
//   );
// }
