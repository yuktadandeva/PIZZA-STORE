
export async function getPizzas(){
    const URL ="https://raw.githubusercontent.com/yuktadandeva/pizza-api/main/pizza.json";

    // const promise = fetch(URL);

    // return promise;
   try{
    const response = await fetch(URL);
    return response; //this is wrapped in a promise
    }catch(err){
        throw err;
    }


}