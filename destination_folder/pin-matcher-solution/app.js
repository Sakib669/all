function getPin(){
    const pin = generatePin();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }
    else{
        console.log('pin not 3 digti func');
        return generatePin();
    }
}

function generatePin(){
    const random = Math.round(Math.random()*10000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click', function(){
    const pin = getPin();
    // display pin
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;
});


document.getElementById('calculator').addEventListener('click', function(event){
    const typedNumberField = document.getElementById('typed-numbers');
    const number = event.target.innerText;
    if(isNaN(number)){
        if(number === 'C'){
            typedNumberField.value = '';
        }
        else if(number === '<'){
            const previousTypedNumbers = typedNumberField.value;
            const digits = previousTypedNumbers.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typedNumberField.value = remainingDigits;
        }
    }
    else{
        typedNumberField.value += number;
    }
});


document.getElementById('verify-pin').addEventListener('click', function(){
    const displayPinField = document.getElementById('display-pin');
    const currentPin = displayPinField.value;


    const typedNumberField = document.getElementById('typed-numbers');
    const typedNumber = typedNumberField.value;
    if(typedNumber === currentPin){
        document.getElementById('pin-succesful').style.display = 'block';
        document.getElementById('pin-unsuccesful').style.display = 'none';
    }
    else{
        document.getElementById('pin-unsuccesful').style.display = 'block';
        document.getElementById('pin-succesful').style.display = 'none';
    }
})