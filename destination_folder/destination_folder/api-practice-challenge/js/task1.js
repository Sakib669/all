fetch('./data/api1.json')
.then(res => res.json())
.then(data => {
    console.log(data)
    for(const results of data.result){
        console.log(results);
        const container = document.getElementById('container');
        const parentDiv = document.createElement('div');
        parentDiv.classList.add('parent-div');
        parentDiv.innerHTML = `
        <h4>Person: ${results.name.common}</h4>
        <hr/>
        <p>age: ${results.age}</p>
        <p>Street: ${results.address.street} Home No: ${results.address.house}</p>
        `;
        container.appendChild(parentDiv);
    }
})