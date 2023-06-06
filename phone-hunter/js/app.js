const loadPhone = async (searchText, dataLimit) => {
    url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    const res = await fetch(url);
    const data = await res.json();
    displayPhones(data.data, dataLimit);
    console.log(searchText, dataLimit);
}

const displayPhones = (phones, dataLimit) => {
    console.log(phones, dataLimit);
    const phonesContainer = document.getElementById('phone-container');
    phonesContainer.innerText = '';
    // display 10 phones only
    const showAll = document.getElementById('show-all');
    if(dataLimit && phones.length > 10){
        phones = phones.slice(0, 10);
        showAll.classList.remove('d-none');
    }
    else{
        showAll.classList.add('d-none');
    }

    // display no phone found
    const noPhone = document.getElementById('no-phones-message');
    if(phones.length === 0){
        noPhone.classList.remove('d-none');
        toggleSpinner(false);
    }
    else{
        noPhone.classList.add('d-none');
    }

    // display all phones
    phones.forEach(phone => {
        // console.log(phone);
        const phoneDiv = document.createElement('div');
        phoneDiv.innerHTML = `
        <div class="col">
                  <div class="card">
                     <img src="${phone.image}" class="img-fluid" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${phone.brand}</h5>
                      <p class="card-text">${phone.phone_name}</p>
                      <button onclick="loadPhoneDetails('${phone.slug}')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#phoneDetailModal">Go somewhere</button>
                    </div>
                  </div>
                </div>
        `;
        phonesContainer.appendChild(phoneDiv);
        toggleSpinner(false);
    });
    // stop spinner loader
}

const processSearch = (dataLimit) => {
    console.log(dataLimit);
    // start spinner loader
    toggleSpinner(true);
    const searchField = document.getElementById('exampleFormControlInput1');
    const searchFieldValue = searchField.value;
    loadPhone(searchFieldValue, dataLimit);
}

// handle search button click
document.getElementById('btn-search').addEventListener('click', () => {
    processSearch(10);
})

document.getElementById('exampleFormControlInput1').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      processSearch(10);
    }
});


const toggleSpinner = isLoading => {
    const loaderSection = document.getElementById('loader');
    if(isLoading === true){
        loaderSection.classList.remove('d-none');
    }
    else{
        loaderSection.classList.add('d-none');
    }
}


// not the best way to load show All
document.getElementById('btn-show-all').addEventListener('click', () => {
    processSearch();
});


const loadPhoneDetails = async id => {
    url = ` https://openapi.programming-hero.com/api/phone/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    displayPhoneDetails(data.data);
}

const displayPhoneDetails = phone => {
    console.log(phone);
    const modalTitle = document.getElementById('phoneDetailModalLabel');
    modalTitle.innerText = phone.name;
    const phoneDetails = document.getElementById('phone-details');
    phoneDetails.innerHTML = `
    <p>Release Date: ${phone.releaseDate ? phone.releaseDate : 'No Relese Date Found'}</p>
    <p>Other: ${phone.others ? phone.others.Bluetooth : 'No bluetooth Information'}</p>
    <p>Storage: ${phone.mainFeatures ? phone.mainFeatures.storage : 'No Storage Information'}</p>
    `;
}

loadPhone('oppo');