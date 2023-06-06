const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => displayCountries(data))
};

const displayCountries = (countries) => {
    const countriesContainer = document.getElementById('all-countries');
    const country = countries.map(country => {
        // console.log(country)
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
        <h3>Name: ${country.name.common}</h3>
        <p>Capita: ${country.capital}</p>
        <img src="${country.flags.svg}">
        <br/>
        <button onclick="loadCountryDetails('${country.cca2}')">Details</button>
        `;
        countriesContainer.appendChild(countryDiv);
    });
};

const loadCountryDetails = code =>{
    const url = `https://restcountries.com/v2/alpha/${code}`
    // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => showCountryDetails(data))
}

const showCountryDetails = country => {
    const detailContainer = document.getElementById('country-details');
    detailContainer.innerHTML = `
        <h3>Name: ${country.name}</h3>
        <img src="${country.flags.png}">
    `;
    // const div = document.createElement('div');
    // div.innerHTML = `
    //     <h3>Name: ${country.name}</h3>
    //     <img src="${country.flags.png}">
    // `;
    // detailContainer.appendChild(div);
}

loadCountries();