// step-1: add click event listener with the submit button
document.getElementById('btn-submit').addEventListener('click', function(event){
    // step-2: get the email address inside the email input field
    // always remember to use .value to get text from an input field
    const email = document.getElementById('user-email').value;
    // step-3: get password
    const password = document.getElementById('user-password').value;
    // DANGER: Do Not Verify email password on the client side
    // step-4: verify email and password
    if(email === 'sontan@baap.com' && password === 'secret'){
        window.location.href = 'bank.html';
    }
    else{
        alert('ওই বেটা সঠিক তথ্য ইনপুট কর!');
    }
})