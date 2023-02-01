import React, { useRef, useState } from 'react';
export const Desktop_SelectSize = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState('');

  const handleSizeSelection = (e) => {
    setSelectedSize(e.target.value);
  };
  const getStock=()=>{
    for (const key in product.stock) {
      if (Object.hasOwnProperty.call(product.stock, key)) {
        const element = product.stock[key];
  console.log(element)
    }
    }
  }


  const windowSize = useRef([window.innerWidth, window.innerHeight]);

  return (
  
    <div className="wraper">
    <div className='content'>
  
    </div>
    </div>
  );
};


