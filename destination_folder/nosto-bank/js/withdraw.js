/* 
1. add withdraw button event handler
2. get withdraw amount by using getInputFieldValueById function
3. get previous withdraw amount by using getTextElementValueById function
4. calculate new withdraw Total and set the value
4-5: set new withdraw total by using setTextElementValueById function
5. get previous balance total by using getTextElementValueById function
6. calculate new balance total
7. set balance total using setTextElementValueById
*/

document.getElementById("btn-withdraw").addEventListener("click", function () {
  const newWithdrawAmount = parseFloat(document.getElementById("withdraw-field").value);
  const previousWithdrawTotal = parseFloat(document.getElementById("withdraw-total").innerText);
  const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  setTextElementValueById('withdraw-total', newWithdrawTotal);
  const previousBalanceTotal = parseFloat(document.getElementById("balance-total").innerText);
  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  setTextElementValueById("balance-total", newBalanceTotal);
});
