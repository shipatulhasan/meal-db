const addToDb = (meals)=>{
    const meal = storedCart()
    const {strMeal,idMeal} = meals
    if(meal){
        meal[idMeal] = strMeal
    }
    localStorage.setItem('cart', JSON.stringify(meal))

}
const storedCart = ()=>{

    const savedData = localStorage.getItem('cart')
    let cart = {}
    if(savedData){
        cart = JSON.parse(savedData)
    }
    return cart

}

export { addToDb, storedCart }