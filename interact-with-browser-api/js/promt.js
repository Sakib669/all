// alert('How are you ?');

const showAlert = () => {
    alert('Dosto, taka ase dhar dite parbi naki?')
}

const lendMoney = () => {
    const restult = confirm('Will you lend me 500 taka');
    console.log(restult);
    if(restult === true){
        alert('tui amar jaan er dosto!!!')
    }
    else{
        console.log('DGM..... toke ajke e block maira dimu.')
    }
}

const getInfo = () => {
    // alert
    // confirm
    const name = prompt('Tell me your name');
    console.log(name);
    if(name === null){
        alert('naam na dile kaam nai');
    }
    else{
        console.log(name, '  welcome my boi');
    }
}