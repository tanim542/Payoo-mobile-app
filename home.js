// function to get input value 
function getInputValue(id) {
    const inputField = document.getElementById(id);
    const inputFieldValue = inputField.value;
    const inputValueConverted = parseInt(inputFieldValue);
    return inputValueConverted;
}

// function to get inner text value
function getInnerText(id) {
    const value = parseInt(document.getElementById(id).innerText);
    return value;
}

// function to set innerText
function setInnerText(value) {
    document.getElementById("available-balance").innerText = value;
}

// function to toggle features
function handleToggle(id) {
    const forms = document.getElementsByClassName("form");

    for (const form of forms) {
        form.style.display = "none";
    }
    document.getElementById(id).style.display = "block";

}

// function to toggle button 
function handleButtonToggle(id) {
    const formBtns = document.getElementsByClassName("form-btn");

    for (const btn of formBtns) {
        btn.classList.remove("border-[#0874f2]", "bg-[#f2f8fe]");
        btn.classList.add("border-[#08080880]");
    }

    document.getElementById(id).classList.add("border-[#0874f2]", "bg-[#f2f8fe]");
    document.getElementById(id).classList.remove("border-[#08080880]");
}


const validPin = 1234;
const validAccountNumber = 1894142714;
const transactionData = []

// add money section
document.getElementById("btn-add-money")
    .addEventListener("click", function (event) {
        event.preventDefault();

        const bank = getInputValue("bank");
        const accountNumber = getInputValue("account-number");
        const addAmount = getInputValue("add-amount");
        const addPin = getInputValue("add-pin");

        const availableBalance = getInnerText("available-balance");

        if (validAccountNumber !== accountNumber) {
            alert("Invalid account number");
            return;
        }
        if (addPin !== validPin) {
            alert("Invalid pin");
            return;
        }
        const totalBalance = availableBalance + addAmount;
        setInnerText(totalBalance);
        document.getElementById("add-amount").value = '';

        const data = {
            name: "Add Money",
            date: new Date().toLocaleDateString()
        }
        transactionData.push(data);

    })
document.getElementById("transaction-button").addEventListener("click", function () {
  const transactionContainer = document.getElementById("transaction-container") 
  transactionContainer.innerText = ""; 

  for(const data of transactionData){
    const div = document.createElement("div")
    div.innerHTML = `<div class="flex justify-between items-center p-3 bg-white rounded-xl mt-3">
                <div class="flex items-center">
                    <div class="bg-[#f4f5f7] p-3 rounded-full">
                        <img class="mx-auto" src="./assets/wallet1.png" alt="">
                    </div>
                    <div class="ml-3">
                        <h1>${data.name}</h1>
                        <p>${data.date}</p>
                    </div>
                </div>
                <div>
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                </div>
            </div>`
        transactionContainer.appendChild(div)
  }
})

// cash out section 
document.getElementById("btn-withdraw-money").addEventListener("click", function (event) {
    event.preventDefault();
    const amount = getInputValue("withdraw-amount");

    const availableBalance = getInnerText("available-balance");

    const totalAvailableBalance = availableBalance - amount;

    setInnerText(totalAvailableBalance);

    document.getElementById("withdraw-amount").value = '';
    const data = {
        name: "Cash out",
        date: new Date().toLocaleDateString()
    }
    transactionData.push(data);
})

// toggle features 
document.getElementById("add-money-button").addEventListener("click", function () {
    handleToggle("add-money-parent");
    handleButtonToggle("add-money-button");
})
document.getElementById("cashout-button").addEventListener("click", function () {
    handleToggle("cashout-parent");
    handleButtonToggle("cashout-button");
})
document.getElementById("paybill-button").addEventListener("click", function () {
    handleToggle("paybill-parent");
    handleButtonToggle("paybill-button");
})
document.getElementById("getbonus-button").addEventListener("click", function () {
    handleToggle("getbounus-parent");
    handleButtonToggle("getbonus-button");
})
document.getElementById("transferMoney-button").addEventListener("click", function () {
    handleToggle("transferMoney-parent");
    handleButtonToggle("transferMoney-button");
})
document.getElementById("transaction-button").addEventListener("click", function () {
    handleToggle("transaction-parent");
    handleButtonToggle("transaction-button");
})
