// DRY ---> Do Not Repeat Yourself
document.getElementById("btn-deposit").addEventListener("click", function () {
  /* 
    1. get the element by id
    2. get the value from the element
    3. convert string value to a number
    */
  const newDepositAmount = parseFloat(document.getElementById("deposit-field").value);
  /* 
    1. get previous deposit total by id

    */
  const previousDepositTotal = parseFloat(document.getElementById("deposit-total").innerText);

  // calculate new deposit total
  const newDepositTotal = previousDepositTotal + newDepositAmount;
  console.log(newDepositTotal, previousDepositTotal, newDepositAmount);
  // set deposit total value
  setTextElementValueById("deposit-total", newDepositTotal);

  // get previous balance by using the function
  const previousBalanceTotal = parseFloat(document.getElementById("balance-total").innerText);
  const newBalanceTotal = previousBalanceTotal + newDepositAmount;
  setTextElementValueById("balance-total", newBalanceTotal);
});
