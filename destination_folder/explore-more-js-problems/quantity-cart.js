const shoppingCart = [
    {name: 'shoe', price: 1200, quantity: 2},
    {name: 'shirt', price: 2200, quantity: 5},
    {name: 'pant', price: 3700, quantity: 4},
    {name: 'belt', price: 600, quantity: 3},
];

function totalPrice(params){
    let sum = 0;
    for(let i = 0; i < params.length; i++) {
        const element = params[i];
        sum += element.price * element.quantity;
    }
    return sum;
}
let totalCost = totalPrice(shoppingCart);
console.log(totalCost);