const validPin = 1234;
const validAccountNumber = "1894142714";
document.getElementById("btn-add-money")
    .addEventListener("click", function (event) {
        event.preventDefault();

        const bank = document.getElementById("bank").value;
        const accountNumber = document.getElementById("account-number").value;
        const addAmount = parseInt(document.getElementById("add-amount").value);
        const addPin = parseInt(document.getElementById("add-pin").value);

        const availableBalance = parseInt(document.getElementById("available-balance").innerText);
        if(accountNumber.length !== 10){
            alert("Please enter a valid account number");
            return;
        }
        if(validAccountNumber !== accountNumber){
            alert("Invalid account number");
            return;
        }
        if(addPin !== validPin){
            alert("Invalid pin");
            return;
        }
        const totalBalance = availableBalance + addAmount;

        document.getElementById("available-balance").innerText = totalBalance;

        document.getElementById("add-amount").value = '';


    })