
export function getPizzas(){
    const URL ="https://raw.githubusercontent.com/yuktadandeva/pizza-api/main/pizza.json";

    const promise = fetch(URL);

    return promise;
}