fetch('./data/api2.json')
.then(res => res.json())
.then(data => {
    // console.log(data);
    for(const dataset of data){
        console.log(dataset);
        const container = document.getElementById('container');
        const card = document.createElement('div');
        card.classList.add('card');
        card.style.width = '18rem';
        card.innerHTML = `
        <img src="${dataset.imageURL}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Car Name: ${dataset.name}</h5>
              <p class="card-text">Car Details: ${dataset.description}</p>
              <a href="#" class="btn btn-primary">Car Price: ${dataset.price}</a>
            </div>
        `;
        container.appendChild(card);
    }
})