document.getElementById("btn-add-money")
    .addEventListener("click", function (event) {
        event.preventDefault();

        const bank = document.getElementById("bank").value;
        const accountNumber = document.getElementById("account-number").value;
        const addAmount = parseInt(document.getElementById("add-amount").value);
        const addPin = document.getElementById("add-pin").value;

        const availableBalance = parseInt(document.getElementById("available-balance").innerText);

        const totalBalance = availableBalance + addAmount;

        document.getElementById("available-balance").innerText = totalBalance;

        document.getElementById("add-amount").value = '';


    })