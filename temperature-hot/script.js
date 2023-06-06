// DO NOT show your API key on your js file
const API_KEY = 'f92315dcfc858271cb70282585f61144';

const loadTemperatures = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data));
};

const displayTemperature = data => {
    console.log(data);
    setTemperature('temperature', data.main.temp);
    setTemperature('city-name', data.name);
    setTemperature('weather-condition', data.weather[0].main);
}

const setTemperature = (id, text) => {
    const element = document.getElementById(id);
    element.innerText = text;
};

document.getElementById('search-btn').addEventListener('click', () =>{
    const inputField = document.getElementById('input-field').value;
    loadTemperatures(inputField);
    inputField.value = '';
});

const inputField = document.getElementById('input-field').addEventListener('keypress', (event) => {
    if(event.key === 'Enter'){
        const inputFieldValue = inputField.value;
        console.log(inputFieldValue);
    }
});

loadTemperatures('dhaka');