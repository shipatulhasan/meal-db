import React, { useEffect, useState } from 'react';
import { addToDb, storedCart } from '../../utitilities/fakeDb';
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

    useEffect(()=>{

        const getMeal = storedCart()
        const savedCart = []
        for(const id in getMeal){
           const addedMeal = meals.find(meal => meal.idMeal === id)
           if(addedMeal){
            savedCart.push(addedMeal)
           }
        }
        setCart(savedCart)

    }, [meals])
    const handleCart = (myMeal)=>{
        addToDb(myMeal)
        let newCart = []
        const exists = cart.find(meal => meal.idMeal === myMeal.idMeal)
        if(!exists){

            newCart = [...cart, myMeal]
        }
        else{
            alert('you already selected this product')
            return
        } 
        setCart(newCart)
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