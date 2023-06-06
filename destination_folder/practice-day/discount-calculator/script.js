
document.getElementById('get-discount').addEventListener('click', function(){
    const a = document.getElementById('input-price').value;
    const b = parseFloat(a);
    
    const discountValue = document.getElementById('discount-input').value;

    if(discountValue == 'DISC30'){
        const c = b * 30 / 100;
        document.getElementById('price').innerText = c;
    }
    else{
        document.getElementById('price').innerText = b; 
    }
})