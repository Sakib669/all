fetch(`https://forbes400.onrender.com/api/forbes400`)
    .then(res => res.json())
    .then(data => getData(data))
    .catch(err => console.log(err));

function getData(data) {
    const cardContainer = document.getElementById('card-container');
    data.forEach(x => {
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
                    <h3 class="card-title">${x.person?.name}</h3>
                    <div class="card-body">
                        <div class="left">
                            <img src="${x.squareImage}" alt="">
                            <p><strong>Source:</strong> ${x.source}</p>
                        </div>
                        <div class="right">
                            <p><strong>Citizenship:</strong> ${x.countryOfCitizenship}</p>
                            <p><strong>City:</strong> ${x.city}</p>
                            <p><strong>Total Shares:</strong> ${x.privateAssetsWorth}</p>
                            <p><strong>Share Price:</strong> ${x.finalWorth}</p>
                        </div>
                    </div>
                    <div>
                            <button onclick="getModalData('${x.rank}')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            Launch static backdrop modal
                            </button>
                        </div>
        `;
        cardContainer.appendChild(div);
    })
}

function getModalData(modalParam){
    const modalBody = document.getElementById('modal-body');
    fetch(`https://forbes400.onrender.com/api/forbes400`)
    .then(res => res.json())
    .then(data => {
        data.map(a => {
            console.log(a);
            console.log(modalParam);
            const result = a.find(b => b.rank === modalParam);
            const div = document.createElement('div');
            div.classList.add('card');
            div.innerHTML = `
                        <h3 class="card-title">${result.person?.name}</h3>
                        <div class="card-body">
                            <div class="left">
                                <img src="${result.squareImage}" alt="">
                                <p><strong>Source:</strong> ${result.source}</p>
                            </div>
                            <div class="right">
                                <p><strong>Citizenship:</strong> ${result.countryOfCitizenship}</p>
                                <p><strong>City:</strong> ${result.city}</p>
                                <p><strong>Total Shares:</strong> ${result.privateAssetsWorth}</p>
                                <p><strong>Share Price:</strong> ${result.finalWorth}</p>
                            </div>
                        </div>
            `;
            modalBody.appendChild(div);
        });
    });

}