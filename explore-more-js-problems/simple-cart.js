const shoppingCart = [
    {name: 'shoe', price: 1200},
    {name: 'shirt', price: 2200},
    {name: 'pant', price: 3700},
    {name: 'belt', price: 600},
];
function totalPrice(params){
    let sum = 0;
    for(let i = 0; i < params.length; i++) {
        const element = params[i];
        sum += element.price;
    }
    return sum;
}
let totalCost = totalPrice(shoppingCart);
console.log(totalCost);