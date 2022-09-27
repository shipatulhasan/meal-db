import React from 'react';

import './Meal.css'

const Meal = ({meal,handleCart}) => {

    const {strMeal,strMealThumb,strInstructions} = meal
    return (
            <div className='card'>
            <div className="card-body">
                <img src={strMealThumb} alt="" />
                <div className="card-content">
                    <h4>{strMeal}</h4>
                    <p>{strInstructions.slice(0,100)+'...'}</p>
                </div>
            </div>

            <div className="card-footer">  
                <button onClick={()=>handleCart(meal)}>
                    <p>Select Meal</p>
                     </button>

            </div>   
        </div>
       
    );
};

export default Meal;