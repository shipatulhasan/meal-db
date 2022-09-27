import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Meal from '../Meal/Meal';
import './Meals.css'

const Meals = () => {
    const [meals,setMeals] = useState([])
    useEffect(()=>{

        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        .then(res=>res.json())
        .then(data=>setMeals(data.meals))
        
    }, [])
    const [cart, setCart] = useState([])
    const handleCart = (meals)=>{
        const newCart = [...cart, meals]
        setCart(newCart)
        console.log(newCart)
        

    }
    
    return (
        <section className='meals-container'>

        <div className='meal-container'>
            {
                meals.map(meal => <Meal meal = {meal} handleCart = {handleCart} key={meal.idMeal}></Meal>)
            }
        </div>
        <div className="cart-container">
            
            <Cart cart={cart}></Cart>

            
        </div>
        </section>
    );
};

export default Meals;