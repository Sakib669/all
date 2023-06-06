const sections = document.querySelectorAll('section');
for(let section of sections){
    section.style.border = '1px solid steelblue';
    section.style.borderRadius = '10px';
    section.style.paddingLeft = '30px';
    section.style.marginBottom = '30px';
}

// const places = document.getElementById('places-container');
// places.style.background = 'lightgreen';

const places = document.getElementById('places-container');
places.setAttribute('class', 'yellow-bg');
places.classList.add('text-center');
places.classList.add('list-none');