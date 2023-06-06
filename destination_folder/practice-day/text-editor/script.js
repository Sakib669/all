document.getElementById('bold').addEventListener('click', function(){
    document.getElementById('text-area').style.fontWeight = 'bold';
});



document.getElementById('italic').addEventListener('click', function(){
    document.getElementById('text-area').style.fontStyle = 'italic';
});


document.getElementById('underline').addEventListener('click', function(){
    document.getElementById('text-area').style.textDecoration = 'underline';
});
document.getElementById('red').addEventListener('click', function(){
    document.getElementById('text-area').style.color = 'red';
});
document.getElementById('green').addEventListener('click', function(){
    document.getElementById('text-area').style.color = 'green';
});
document.getElementById('magenta').addEventListener('click', function(){
    document.getElementById('text-area').style.color = 'magenta';
});
document.getElementById('clear').addEventListener('click', function(){
    document.getElementById('text-area').value = '';
});

document.getElementById('font-size').addEventListener('click', function(){
    const fontSize = document.getElementById('font-size-number').value;
    const fontSizeNumber = parseFloat(fontSize);
    fontSizeNumber.toFixed(2);
    document.getElementById('text-area').style.fontSize = fontSizeNumber + "px";
});