// global function for getting input field value
function getInputValue(param){
    const element = document.getElementById(param).value;
    const value = parseFloat(element);
    if(isNaN(value)|| element.length <= 0 || value <= 0){
        return alert("Invalid value");
    }
    return value; 
}

// function for creating an li to display summation of
function createLi(name, value){
    const calculationList = document.getElementById('calculation-list');
    const li = document.createElement('li');
    li.innerHTML = name + ' ' + value +'cm<sup>2</sup> <button class="btn"><strong>Convert to m</strong><sup>2</sup></button>';
    calculationList.appendChild(li);
};


// event listener for triangle calculate
document.getElementById('triangle-calculate').addEventListener('click', function (){
    const triangle = 'Triangle';
    const base = getInputValue('triangle-base-input');
    const height = getInputValue('triangle-height-input');
    const triangleArea = .5 * base * height;
    const triangleAreaFixed = triangleArea.toFixed(2);
    createLi(triangle, triangleAreaFixed);
});

// event listener for rectangle calculate
document.getElementById('rectangle-calculate').addEventListener('click', function(){
    const rectangle = 'Rectangle';
    const widht = getInputValue('rectangle-width-input');
    const height = getInputValue('rectangle-height-input');
    const rectangleArea = widht * height;
    const rectangleAreaFixed = rectangleArea.toFixed(2);
    createLi(rectangle, rectangleAreaFixed);
});


// event listener for parallelogram
document.getElementById('parallelogram-calculate').addEventListener('click', function(){
    const parallelogram = 'Parallelogram';
    const base = getInputValue('parallelogram-base-input');
    const height = getInputValue('parallelogram-height-input');
    const parallelogramArea = base * height;
    const parallelogramAreaFixed = parallelogramArea.toFixed(2);
    createLi(parallelogram, parallelogramAreaFixed);
});

// event listener for rhombus
document.getElementById('rhombus-calculate').addEventListener('click', function(){
    const rhombus = 'Rhombus';
    const baseD1 = getInputValue('rhombus-base-input');
    const heightD2 = getInputValue('rhombus-height-input');
    const rhombusArea = baseD1 * heightD2 * .5;
    const rhombusAreaFixed = rhombusArea.toFixed(2);
    createLi(rhombus, rhombusAreaFixed);
});

// event listener for pentagon
document.getElementById('pentagon-calculate').addEventListener('click', function(){
    const pentagon = 'Pentagon';
    const perimeter = getInputValue('pentagon-perimeter-input');
    const base = getInputValue('pentagon-base-input');
    const pentagonArea = base * perimeter * .5;
    const pentagonAreaFixed = pentagonArea.toFixed(2);
    createLi(pentagon, pentagonAreaFixed);
});

// event listener for ellipse
document.getElementById('ellipse-calculate').addEventListener('click', function(){
    const ellipse = 'Ellipse'
    const base = getInputValue('ellipse-base-input');
    const height = getInputValue('ellipse-height-input');
    const ellipseArea = base * height * 3.14;
    const ellipseAreaFixed = ellipseArea.toFixed(2);
    createLi(ellipse, ellipseAreaFixed);
});


// function for background color change on hover
const cards = document.querySelectorAll('.card');
for(const card of cards){
    card.addEventListener('mouseenter', function(event){
        const random = Math.round(Math.random()*255);
        const random2 = Math.round(Math.random()*250);
        const random3 = Math.round(Math.random()*225);
        card.style.backgroundColor = "rgb(" + random + "," + random2 + "," + random3 + ")";
    });
    card.addEventListener('mouseleave', function(){
        card.style.backgroundColor = '#fff'
    });
};