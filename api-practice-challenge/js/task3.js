const getData = (region) => {
    fetch(`https://restcountries.com/v3.1/region/${region}`)
.then(res => res.json())
.then(data => {
    // console.log(data);
    for(const country of data){
        console.log(country);
        const container = document.getElementById('container');
        // container.innerText = '';
        const div = document.createElement('div');
        div.classList.add('card');
        div.style.width = '18rem';
        div.innerHTML = `
            <img class="img-fluid" src="${country.flags.svg}">
            <br/>
            <h5 class="card-title">${country.name.common}</h5>
        `;
        container.appendChild(div);
    }
})
};

    const btnAfrica = document.getElementById('btn-africa').addEventListener('click', function(){
        getData('africa');
    });

    const btnAmerica = document.getElementById('btn-america').addEventListener('click', function(){
 getData('america');
    });
    const btnAsia = document.getElementById('btn-asia').addEventListener('click', function(){
        getData('asia');
    });
    const btnEurope = document.getElementById('btn-europe').addEventListener('click', function(){
        getData('europe');
    });
    const btnOceania = document.getElementById('btn-oceania').addEventListener('click', function(){
        getData('oceania');
    });