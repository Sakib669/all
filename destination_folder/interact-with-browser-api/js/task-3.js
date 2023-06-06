
const getInputValue = (id) => {
    const inp = document.getElementById(id);
    const inpValue = inp.value;
    inp.value = '';
    return inpValue;
};

const setLocalStorage = (key, value) => {
    localStorage.setItem(key, value);
}

const removeFromLocalStorage = (key) => {
    localStorage.removeItem(key);
}


const addToLocalStorage = (inputId, keyName) => {
    const value = getInputValue(inputId);
    setLocalStorage(keyName, value);
};

// name section 
document.getElementById('send-name').addEventListener('click', () => {
    addToLocalStorage('name-input', 'name');
});


document.getElementById('delete-name').addEventListener('click', () => {
    removeFromLocalStorage('name');
});

// email section 

document.getElementById('send-email').addEventListener('click', () => {
    addToLocalStorage('email-input', 'email');
});

document.getElementById('delete-email').addEventListener('click', () => {
    removeFromLocalStorage('email');
});


// message section 
document.getElementById('send-message').addEventListener('click', () => {
    addToLocalStorage('message-input', 'message');
});

document.getElementById('delete-message').addEventListener('click', () => {
    removeFromLocalStorage('message');
});


// reset 
document.getElementById('reset').addEventListener('click', () => {
    localStorage.clear();
})

// global send
document.getElementById('send').addEventListener('click', () => {
    addToLocalStorage('name-input', 'name');
    addToLocalStorage('email-input', 'email');
    addToLocalStorage('message-input', 'message');
})