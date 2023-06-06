// option 1: directly set on the HTML element


// option 2: onclick function
// IMPORTANT: We will use this
function makeRed() {
    document.body.style.background = 'red';
}

// option 3: 
const makeBlueButton = document.getElementById
    ('make-blue');
makeBlueButton.onclick = makeBlue();
function makeBlue() {
    document.body.style.background = 'blue';
}

// option 3: another [we will use this sometime]
const purpleButton = document.getElementById('make-purple');
purpleButton.onclick = function makePurple() {
    document.body.style.background = 'purple';
}

// option 4
const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', pink())

function pink() {
    document.body.style.background = 'pink';
}

// option 4: final
// IMPORTANT: We will use this
const makeGreenButton = document.getElementById('make-green');
makeGreenButton.addEventListener('click', function () {
    document.body.style.background = 'green';
})