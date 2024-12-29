import React from 'react';
import './cart.css'
import Cart from './Cart';
import About from './About';
const Card = ({handleisactive,isactive,selectPrice,handledelete}) => {
    return (
        <div className='py-5' >
            
           <button onClick={() => handleisactive('cart')} className={`${isactive.cart?'btn active mx-5':'btn'}`}>Available</button>
          <button onClick={() => handleisactive('about')} className={`${isactive.cart?'btn':'active btn mx-5'}`}>Selected</button>

          { isactive.cart? <Cart></Cart>:
            <About  handledelete={handledelete} selectPrice={selectPrice}></About>}
        </div>
    );
};

export default Card;