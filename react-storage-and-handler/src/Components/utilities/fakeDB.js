// use local storage to manage cart data 

const addToDB = (id) => {

    let shoppingCart = {};

    // get the shopping cart from local storage
    const stordCart = localStorage.getItem('shopping-cart');
    if(stordCart){
        shoppingCart = JSON.parse(stordCart);
    }
    // add quantity
    const quantity = shoppingCart[id];
    if(quantity){
        // const newQuantity = quantity + 1;
        // shoppingCart[id] = newQuantity;
        shoppingCart[id] += 1;
    }
    else{
        shoppingCart[id] = 1;
    }


    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));

    
};

const removeFromDB = (id) => {
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        const shoppingCart = JSON.parse(storedCart);
        if(id in shoppingCart){
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
    }
};

const deleteShoppingCart = (id) => {
    localStorage.removeItem('shopping-cart');
}


export {
    addToDB,
    removeFromDB,
    deleteShoppingCart
    };