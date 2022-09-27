const addToDb = (id)=>{
    const meal = storedCart()
    
    // if(meal[id]){
    //     meal[id] = 
    // }


}
const storedCart = ()=>{

    const savedData = localStorage.getItem('cart')
    let cart = {}
    if(savedData){
        cart = JSON.parse(savedData)
    }
    return cart

}