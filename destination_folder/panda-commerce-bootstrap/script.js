// task 2
const allH2 = document.getElementsByTagName('h2');
for(let h2 of allH2){
    h2.style.color = 'lightblue'
}
//task 3
const backPack = document.getElementById('backpack');
backPack.style.background = 'tomato';
// task 4
const cards = document.querySelectorAll('.card');
for(let card of cards){
    card.style.borderRadius = '30px';
}
// taskt 5
const homeLink = document.getElementById('home-link').addEventListener('click', function(){
    console.log('Home link clicked')
})
// task 6
const buyNowButtons = document.getElementsByClassName('buy-now');
for(let button of buyNowButtons){
    button.addEventListener('click', function(){
        button.style.display = 'none';
    })
}

// task 7
const inputBar = document.getElementById('exampleInputEmail1').addEventListener('keyup', function(event){
    const inputBarText = event.target.value;
    console.log(inputBarText)
    const submitButton = document.getElementById('submit-btn');
    if(inputBarText === 'email'){
        submitButton.removeAttribute('disabled');
    }
    else{
        submitButton.setAttribute('disabled');
    }

});
// task 8
const images = document.getElementsByTagName('img')
for(let img of images){
    img.addEventListener('mouseenter', function(){
        img.src = 'images/sahiba.jpg'
    })
}
// task 9
const footer = document.getElementById('subscribe').addEventListener('click', function(){
    document.getElementById('subscribe').style.background= 'green';
});
document.getElementById('exampleInputEmail1').addEventListener('click', function(event){
    event.stopImmediatePropagation()
})
document.getElementById('submit-btn').addEventListener('click', function(event){
    event.stopImmediatePropagation()
})