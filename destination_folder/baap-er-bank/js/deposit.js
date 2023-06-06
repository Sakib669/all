// step-1: add event listener to deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){
    // step-2: get the deposit amount from the deposit input field
    const depositField = document.getElementById('user-deposit');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    
    // step-7: clear the deposit input field
    depositField.value = '';

    if(isNaN(newDepositAmount)){
        return alert('ওই বেটা নাম্বার লেখার জায়গায় তুই অক্ষর লেখসস কেন?');
    }

    // step-3: get the current deposit total
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    // step-4: add numbers to set the total deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = currentDepositTotal;

    // step-5: get balance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step-6: calculate current total balance
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    // set the total balance
    balanceTotalElement.innerText = currentBalanceTotal;

    
    // const userBalance = document.getElementById('user-balance');
    // const balanceString = userBalance.innerText
    // const balance = parseFloat(balanceString);
    // const balanceSum = balance + currentDepositTotal;
    // userBalance.innerText = balanceSum;
})

