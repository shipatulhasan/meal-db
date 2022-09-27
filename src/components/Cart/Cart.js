import React from 'react';
import './Cart.css'


const Cart = ({cart}) => {
    return (
        <div className='cart'>
            <h3 className='title'>My meal</h3>
            <ul>
              {cart.map(meal=> <li key={meal.idMeal}>{meal.strMeal}</li>)} 
            </ul>
        </div>
    );
};

export default Cart;