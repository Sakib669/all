const add = (x, y) => x + y;

const multiply = (x, y) => x * y;

const divide = (x, y) => x / y;

// export default add;

// const numbers = [1, 3, 5, 7, 9];
// // let initialValue = 0;
// const sumReduce = (previous, current) => previous + current;
// const total = numbers.reduce(sumReduce, 0);

// const items = [
//     {id: 1, name: 'alta', price: 100},
//     {id: 1, name: 'alta', price: 100},
//     {id: 1, name: 'alta', price: 100},
//     {id: 1, name: 'alta', price: 100},
//     {id: 1, name: 'alta', price: 100},
// ];

// const itemSumReducer = (previous, current) => previous + current.price;
// const itemTotal = items.reduce(itemSumReducer, 0);

const getTotalPrice = products => {
    const reducer = (previous, current) => previous + current.price;
    const total = products.reduce(reducer, 0);
    return total;
};

export {add,
     multiply,
     divide,
     getTotalPrice as getTotal}