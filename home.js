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

    // cash out section 
    document.getElementById("btn-withdraw-money").addEventListener("click", function(event){
        event.preventDefault();
        const amount = parseInt(document.getElementById("withdraw-amount").value);

        const availableBalance = parseInt(document.getElementById("available-balance").innerText);

        const totalAvailableBalance = availableBalance - amount;

        document.getElementById("available-balance").innerText = totalAvailableBalance;
        document.getElementById("withdraw-amount").value = '';
    })

    // toggle features 
    document.getElementById("add-money-button").addEventListener("click", function(){
        document.getElementById("cashout-parent").style.display = "none";
        document.getElementById("add-money-parent").style.display = "block";   
    })
    document.getElementById("cashout-button").addEventListener("click", function(){
        document.getElementById("add-money-parent").style.display = "none";
        document.getElementById("cashout-parent").style.display = "block";   
    })