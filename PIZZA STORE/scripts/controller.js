
window.addEventListener('load', displayPizzas);

import { getPizzas } from "./api.client.js";

function displayPizzas(){
    document.querySelector('#message').innerText = "Loading...";

    const promise = getPizzas();
    promise.then(function(response){
        
        const p = response.json();
        p.then(function(obj){
           document.querySelector('#message').innerText = "";
           console.log('Data is : ', obj['Vegetarian']);
           printPizzas(obj['Vegetarian']);

        }).catch(function(err){
            console.log("INVALID JSON", err);
        })

    }).catch(function(e){
        document.querySelector('#message').innerText = "ERROR IN SERVER NO PIZZAS FETCHED";
        console.log(e);
    });
}

function printPizzas(pizzas){
    
    // let allHtml = '';
    for(let pizza of pizzas){

        console.log('pizza' ,pizza);
        createPizzaCard(pizza);

    }
    // document.querySelector('#pizzas').innerHTML = allHtml;
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
    divTag.style.width = '18rem';

    const imgTag = document.createElement('img');
    imgTag.src = singlePizza.assets.menu[0].url;
    imgTag.className = 'card-img-top';

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    const h5 = document.createElement('h5');
    h5.className = 'card-title';
    h5.innerText = 'card-title';

    const p = document.createElement('p');
    p.className = 'card-text';
    p.innerText = singlePizza.name;

    const p2 = document.createElement('p');
    p.className = 'card-text';
    p.innerText = '$'+ singlePizza.price;

    const aTag = document.createElement('a');
    aTag.href = '';
    aTag.className = 'btn-btn-primary';
    aTag.innerText = 'ADD TO CART';

    cardBody.appendChild(imgTag);
    cardBody.appendChild(h5);
    cardBody.appendChild(p);
    cardBody.appendChild(p2);
    cardBody.appendChild(aTag);

    divTag.appendChild(cardBody);
    mainDiv.appendChild(divTag);

}   