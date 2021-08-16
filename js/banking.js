function getInputAmount(inputId){
    const inputField = document.getElementById(inputId);
    const inputText = inputField.value;
    const inputAmount = parseFloat(inputText);
    inputField.value = '';
    return inputAmount;
}

function updateAmount(totalFieldId, newAmount, isAdd){
    const totalField = document.getElementById(totalFieldId);
    const totalFieldText = totalField.innerText;
    const totalAmount = parseFloat(totalFieldText);
    if(isAdd == true){
        const updateTotal = totalAmount + newAmount;
        totalField.innerText = updateTotal;
    }
    else{
        const updateTotal = totalAmount - newAmount;
        totalField.innerText = updateTotal;
    }
    
}

document.getElementById('deposit-btn').addEventListener('click', function(){
    const newDepositAmount = getInputAmount('deposit-field');
    if(newDepositAmount > 0){
        updateAmount('deposit-total', newDepositAmount, true);
        updateAmount('balance-total', newDepositAmount, true);
    }
})

document.getElementById('withdraw-btn').addEventListener('click', function(){
    const newWithdrawAmount = getInputAmount('withdraw-field');
    if(newWithdrawAmount > 0){
        updateAmount('withdraw-total', newWithdrawAmount, true);
        updateAmount('balance-total', newWithdrawAmount, false);
    }
})