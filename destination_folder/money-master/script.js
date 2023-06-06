// local function
function inputBarValue(elementId){
    const a = document.getElementById(elementId);
    const b = a.value;
    if(b.length >= 0){
        return alert('you cannot let any input field be empty');
    }
    const c = parseFloat(b)
    return c;
}

const totalExpenseElement = document.getElementById('total-expense');

const balanceElement = document.getElementById('balance');

const savingAmountElement = document.getElementById('saving-amount');

const remainingBalanceElement = document.getElementById('remaining-balance');

document.getElementById('calculate-btn').addEventListener('click', function(){
    const income = inputBarValue('income');
    
    const foodExpense = inputBarValue('food');

    const rentExpense = inputBarValue('rent');

    const clothesExpense = inputBarValue('clothes');

    const totalExpense = foodExpense + rentExpense + clothesExpense;

    if(isNaN(income) || isNaN(rentExpense) || isNaN(clothesExpense) || isNaN(foodExpense)){
        return alert('Please enter an integer in all input fields');
    }

    if(income <= 0 || foodExpense <= 0 || rentExpense <= 0 || clothesExpense <= 0){
        return alert('Don not input an negative number');
    }

    if(totalExpense > income){
        return alert('Your Expense cannot be more than Your Income');
    }

    const balance = income - totalExpense;

    totalExpenseElement.innerText = totalExpense;

    balanceElement.innerText = balance;
});


document.getElementById('save-btn').addEventListener('click', function(){
    const savingAmount = inputBarValue('save');
    if(savingAmount > 100){
        return alert('You Cannot save more than 100%')
    }

    const saving = parseFloat(balanceElement.innerText) * savingAmount / 100;
    
    const balance = inputBarValue('balance');

    // if(saving > balance){
    //     return alert('You cannot save more than your balance');
    // }

    const remainingBalance = balance - saving;

    savingAmountElement.innerText = saving;


    remainingBalanceElement.innerText = remainingBalance;
});