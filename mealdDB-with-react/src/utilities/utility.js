const addToDb2 = (a) => {
    const shoppingCart = getShoppingCart2();

    const quantity = shoppingCart[a];
    if(quantity){
        shoppingCart[a] =+ 1;
    }
    else{
        shoppingCart[a] = 1;
    }
}








const getShoppingCart2 = () => {
    let shoppingCart = {};


    // get data from local storage
    const a = localStorage.getItem('shopping-cart');
    if(a){
        shoppingCart = JSON.parse(a);
    }
    return shoppingCart;
};