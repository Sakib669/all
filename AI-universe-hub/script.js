const fetchData = dataAmout => {
    fetch(`https://openapi.programming-hero.com/api/ai/tools`)
        .then(response => response.json())
        .then(data => getConentData(data, dataAmout))
        .catch(err => console.error(err));

}

function getConentData(data, dataAmout) {
    // toggling spinner 
    toggleSpinner(true);

    // card div and card container
    const showAllDiv = document.getElementById('show-all');
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerText = '';

    document.getElementById('sort-all').addEventListener('click', () => {

    })

    // splicing data to diplay only 6 cards 
    let slicedData = data.data.tools;
    if (dataAmout === undefined || dataAmout <= 0) {
        slicedData.splice(0, 6);
        showAllDiv.classList.remove('d-none');
    }
    else {
        showAllDiv.classList.add('d-none')
    }

    // loop to get all data inside sliced data 
    for (const x of slicedData) {
        const date = []
        date.push(x.published_in);
        const allFeatures = x.features.map(el => `<li>${el}</li>`);
        const div = document.createElement('div');
        div.classList.add('col-sm-12', 'col-md-3');
        div.innerHTML = `
        <img src="${x.image}" class="img-fluid w-100 rounded">
        <div class="card-body">
        <p><strong>Features</strong></p>
        <ol id="features-list" class="text-secondary">
        ${allFeatures.toString().split(",").join(" ")}
        </ol>
        </div>
        <hr>
        <div class="card-body d-flex justify-content-between align-items-center">
        <div>
        <h6>
        ${x.name}
        </h6>
        <span class="align-items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-check" viewBox="0 0 16 16">
        <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
        </svg>
        <p class="d-inline">${x.published_in}</p>
        </span>
        </div>
        <button onclick="modalFunction('${x.id}')" type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#dc3545" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
        </svg>
  </button
        </div>
        `;
        cardContainer.appendChild(div);
    }
    // toggiling spinner 
    toggleSpinner(false);
}

// modal function

const modalFunction = async id => {
    const url = await `https://openapi.programming-hero.com/api/ai/tool/${id}`;
    const response = await fetch(url);
    const data = await response.json();

    // loop for features section 
    let li = [];
    const abc = data.data.features
    for (const index in abc) {
        const feature = `<li>${abc[index].feature_name}</li>`;
        li.push(feature);
    }

    // all integrations
    const allIntegrations = data?.data?.integrations?.map(el => `<li>${el === undefined || el === null ? 'No data found' : el}</li>`);

    // modal left and right side
    const modalBodyLeft = document.getElementById('modal-body-left');
    const modalBodyRight = document.getElementById('modal-body-right');


    // left side modal
    modalBodyLeft.innerHTML = `
    <p><strong>${data.data.description}</strong></p>
      <div class="d-flex justify-content-between text-center ">
        <div class="text-success">
          <p><strong>${data.data.pricing && data.data.pricing[0].price != 0 ? data.data.pricing[0].price : 'Free of Cost'}</strong></p>
          <p>${data.data.pricing ? data.data.pricing[0]?.plan : ''}</p>
        </div>
        <div class="text-warning mx-3">
        <p><strong>${data.data.pricing ? data.data.pricing[1].price : 'Free of Cost'}</strong></p>
        <p>${data.data.pricing ? data.data.pricing[1].plan : ''}</p>
        </div>
        <div class="text-danger">
        <p><strong>${data.data.pricing ? data?.data?.pricing[2]?.price : 'Free of Cost'}</strong></p>
        <p>${data.data.pricing ? data.data.pricing[2].plan : ''}</p>
        </div>
        </div>
        <div class="d-flex justify-content-between gap-x-2 mt-2">
           <div>
           <p><strong>Features</strong></p>
            <ol>
                ${li.map(el => el ? el : 'No data found')}
            </ol> 
           </div>
           <div>
           <p><strong>Integrations</strong></p>
            <ol>
                ${allIntegrations ? allIntegrations : 'No data found'}
            </ol> 
           </div>
        </div>
    `;

    // right side modal
    modalBodyRight.innerHTML = `
                <div class="position-relative">
                <img src="${data?.data?.image_link[0]}" class="img-fluid rounded">
                <button class="btn btn-danger text-white translate-btn ${data.data.accuracy.score === null ? 'd-none' : 'a'}">
                ${data.data.accuracy.score} accuracy
                </button>
                </div>
                <p class="text-center"><strong>
                ${data.data.input_output_examples ? data.data.input_output_examples[0].input : 'Can you give any example?'}
                </strong></p>
                <p class="text-secondary text-center">
                ${data.data.input_output_examples ? data.data.input_output_examples[0].output : 'No! Not Yet! Take a break!!!'}
                </p>
    `;
}

const toggleSpinner = isLoading => {
    const spinnerSection = document.getElementById('spinner');
    if (isLoading === true) {
        spinnerSection.classList.remove('d-none');
    }
    else {
        spinnerSection.classList.add('d-none');
    }
}


document.getElementById('show-all-btn').addEventListener('click', () => {
    toggleSpinner(true);
    loadSixData(1)
        ;
})


const loadSixData = dataAmout => {
    fetchData(dataAmout);

}



loadSixData()


// sort all function


document.getElementById('sort-all').addEventListener('click', () => {
    fetch(`https://openapi.programming-hero.com/api/ai/tools`)
        .then(response => response.json())
        .then(data => dataSort(data, 1))
        .catch(err => console.error(err));
})


const dataSort = function(data, dataAmout) {
    toggleSpinner(true);
    const parameterData = data.data.tools;
    const y = parameterData.sort((a, b) => new Date(a.published_in) - new Date(b.published_in));
    // toggling spinner 

    // card div and card container
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerText = '';

    // splicing data to diplay only 6 cards 
    let slicedData = y;
    if (dataAmout === undefined || dataAmout <= 0) {
        slicedData.splice(0, 6);
    }

    // loop to get all data inside sliced data 
    for (const x of slicedData) {
        const date = []
        date.push(x.published_in);
        const allFeatures = x.features.map(el => `<li>${el}</li>`);
        const div = document.createElement('div');
        div.classList.add('col-sm-12', 'col-md-3');
        div.innerHTML = `
        <img src="${x.image}" class="img-fluid w-100 rounded">
        <div class="card-body">
        <p><strong>Features</strong></p>
        <ol id="features-list" class="text-secondary">
        ${allFeatures.toString().split(",").join(" ")}
        </ol>
        </div>
        <hr>
        <div class="card-body d-flex justify-content-between align-items-center">
        <div>
        <h6>
        ${x.name}
        </h6>
        <span class="align-items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-check" viewBox="0 0 16 16">
        <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
        </svg>
        <p class="d-inline">${x.published_in}</p>
        </span>
        </div>
        <button onclick="modalFunction('${x.id}')" type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#dc3545" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
        </svg>
  </button
        </div>
        `;
        cardContainer.appendChild(div);
    }
    // toggiling spinner 
    toggleSpinner(false);
}
