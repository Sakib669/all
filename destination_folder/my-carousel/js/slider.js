const images = [
    'images/pic-1.jpg',
    'images/pic-2.jpg',
    'images/pic-3.jpg',
    'images/pic-4.jpg',
    'images/pic-5.jpg',
    'images/pic-6.jpg',
    'images/pic-7.jpg',
    'images/pic-8.jpg',
    'images/pic-9.jpg'
];
let imgIndex = 0;
const imgEl = document.getElementById('slider-image');
// setInterval(() => {
//     imgIndex === images.length ? imgIndex = 0 : imgIndex; 
//     // if(imgIndex === images.length){
//         // imgIndex = 0;
//     // }
//     const imgUrl = images[imgIndex];
//     imgEl.setAttribute('src', imgUrl);
//     console.log(imgIndex, imgUrl);
//     imgIndex++;
// }, 1000);

document.getElementById('change').addEventListener('click' , () => {
    const imgUrl = images[imgIndex];
    imgEl.setAttribute('src', imgUrl);
    console.log(imgIndex, imgUrl);
    imgIndex++;
});

const time = document.getElementById('time');

let timer = 0;
setInterval(() => {
    timer > 60 ? timer = 0 : timer;
    timer++;
    time.innerText = timer;
    console.log(timer);
}, 1000);