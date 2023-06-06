fetch('https://api.adviceslip.com/advice')
.then(res => res.json())
.then(data => {
    console.log(data)
    const parentDiv = document.getElementById('parent-div');
    parentDiv.innerHTML = `
    <div class=" mx-auto my-8 text-center card w-96 bg-[#1e293b] shadow-xl">
    <div class="card-body">
        <h2 class="font-extrabold text-center text-green-500">ADVICE #${data.slip.id}</h2>
        <p class="font-semibold text-white">${data.slip.advice}</p>
    </div>
</div>
    `;
})