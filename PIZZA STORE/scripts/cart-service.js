const cartOperations = {
pizzas : [],

addToCart(pizzaId){

    //iterate through pizzas and return pizzas with id 

    // this.pizzas.find(function(currentPizza){return currentPizza.id == pizzaId })

    //arrow-function
    const pizza = this.pizzas.find(currentPizza => currentPizza.id == pizzaId);
    pizza.isInCart = 'true'; 

    //making a key value for pizzas that are added to the cart
    console.log(this.pizzas);
},

removeFromCart(){

},

viewAll(){
    return this.pizzas.filter(pizza => pizza.isInCart);
},

totalPrice(){

}
}

//export obj wrapped in obj 

export default cartOperations;
