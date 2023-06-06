const phones = [
    {name: 'Samsumg', camera: 12, storage: '32gb', price: 36000, color: 'silver'},
    {name: 'Walton', camera: 8, storage: '32gb', price: 22000, color: 'silver'},
    {name: 'Iphone', camera: 12, storage: '32gb', price: 82000, color: 'silver'},
    {name: 'Xaomi', camera: 20, storage: '32gb', price: 52000, color: 'silver'},
    {name: 'Oppo', camera: 25, storage: '32gb', price: 20000, color: 'silver'},
    {name: 'Nokia', camera: 16, storage: '32gb', price: 44000, color: 'silver'},
    {name: 'HTC', camera: 12, storage: '32gb', price: 62000, color: 'silver'},
]

function cheapestPhone(param){
    let cheapest = param[0];
    for(let i = 0; i < param.length; i++){
        const element = param[i];
        // console.log(element);
        if(element.price < cheapest.price){
            cheapest = element;
        }
    }
    return cheapest;
}
function highestCamera(param){
    let highest = param[0];
    for(let i = 0; i < param.length; i++){
        const element = param[i];
        // console.log(element);
        if(element.camera > highest.camera){
            highest = element;
        }
    }
    return highest;
}
let mySelection = cheapestPhone(phones);
let mySelection2 = highestCamera(phones);
console.log(mySelection);
console.log(mySelection2);