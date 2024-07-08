
window.addEventListener('load', displayPizzas);

import { getPizzas } from "./api.client.js";
import cartOperations from "./cart-service.js";

async function displayPizzas(){
    document.querySelector('#message').innerText = "Loading...";


    try{
    const response = await getPizzas();
    const obj = await response.json();
   
    
    console.log('Data is : ', obj['Vegetarian']);
    printPizzas(obj['Vegetarian']);
}catch(err){
    throw err;
    
}


    // const promise = getPizzas();
    // promise.then(function(response){
        
    //     const p = response.json();
    //     p.then(function(obj){
    //        document.querySelector('#message').innerText = "";
    //        console.log('Data is : ', obj['Vegetarian']);
    //        printPizzas(obj['Vegetarian']);

    //     }).catch(function(err){
    //         console.log("INVALID JSON", err);
    //     })

    // }).catch(function(e){
    //     document.querySelector('#message').innerText = "ERROR IN SERVER NO PIZZAS FETCHED";
    //     console.log(e);
    // });
}

function printPizzas(pizzas){
    cartOperations.pizzas = pizzas;
    document.querySelector('#message').innerText = "";
    // let allHtml = '';
    for(let pizza of pizzas){

        console.log('pizza' ,pizza);
        createPizzaCard(pizza);

    }
    // document.querySelector('#pizzas').innerHTML = allHtml;
}

function addToCart(){
    const pizzaId = this.getAttribute('pizza-id');
    cartOperations.addToCart(pizzaId);
    console.log(pizzaId);
    console.log("ADD TO CART");

    printInCart();
    
}

function printTotal(pizzas){

    const total = pizzas.reduce((acc, pizza)=> acc + parseFloat(pizza.price),0).toFixed(2);
    const totalPrice = document.createElement('p');
    totalPrice.innerText = 'TOTAL BILL IS ' + total;
    return totalPrice;

}

function printInCart(){
    const pizzasInCart = cartOperations.viewAll();
    document.getElementById('cart').innerHTML ='';
    pizzasInCart.forEach(p => printCartItem(p));
    document.getElementById('cart').appendChild(printTotal(pizzasInCart));
}

function printCartItem(pizzaInCart){
    const pTag = document.createElement('p');
    pTag.innerText = `${pizzaInCart.name} ${pizzaInCart.price}`;

    const div = document.getElementById('cart');
    div.appendChild(pTag);
}

function createPizzaCard(singlePizza){
    // const html = `<div>
    // <img src ="${singlePizza.assets.menu[0].url}">
    // <p>${singlePizza.name}</p>
    // <p>${singlePizza.price}</p>
    // <button>ADD TO CART</button>
    // </div>`;

    // return html;

    const mainDiv = document.getElementById('pizzas');

    const divTag = document.createElement('div');
    divTag.className = 'card me-4';
    divTag.style.width = '14rem';

    const imgTag = document.createElement('img');
    imgTag.src = singlePizza.assets.menu[0].url;
    imgTag.className = 'card-img-top';

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    const h5 = document.createElement('h5');
    h5.className = 'card-title';
    h5.innerText = singlePizza.name;

    const p = document.createElement('p');
    p.className = 'card-text';
    p.innerText = singlePizza['menu_description'];

    const p2 = document.createElement('p');
    p2.className = 'card-text';
    p2.innerText = '$'+ singlePizza.price;

    const btn = document.createElement('button');
    btn.className = 'btn-btn-primary';
    btn.setAttribute('pizza-id', singlePizza.id)
    btn.innerText = 'ADD TO CART';
    btn.addEventListener('click', addToCart);

    cardBody.appendChild(imgTag);
    cardBody.appendChild(h5);
    cardBody.appendChild(p);
    cardBody.appendChild(p2);
    cardBody.appendChild(btn);

    divTag.appendChild(cardBody);
    mainDiv.appendChild(divTag);

}   
