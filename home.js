// function to get input value 
function getInputValue(id){
    const inputField = document.getElementById(id);
    const inputFieldValue = inputField.value;
    const inputValueConverted = parseInt(inputFieldValue);
    return inputValueConverted;
}

// function to get inner text value
function getInnerText(id){
   const value = parseInt(document.getElementById(id).innerText); 
   return value;
}

// function to set innerText
function setInnerText (value){
    document.getElementById("available-balance").innerText = value;
}

// function to toggle features
function handleToggle(id){
    const forms = document.getElementsByClassName("form");

    for(const form of forms){
        form.style.display = "none";
    }
    document.getElementById(id).style.display = "block";

}

// function to toggle button 
function handleButtonToggle(id){
    const formBtns = document.getElementsByClassName("form-btn");
    
    for(const btn of formBtns){
        btn.classList.remove("border-[#0874f2]", "bg-[#f2f8fe]");
        btn.classList.add("border-[#08080880]");
    }

    document.getElementById(id).classList.add("border-[#0874f2]", "bg-[#f2f8fe]");
    document.getElementById(id).classList.remove("border-[#08080880]");
}


const validPin = 1234;
const validAccountNumber = 1894142714;

document.getElementById("btn-add-money")
    .addEventListener("click", function (event) {
        event.preventDefault();

        const bank = getInputValue("bank");
        const accountNumber = getInputValue("account-number");
        const addAmount = getInputValue("add-amount");
        const addPin = getInputValue("add-pin");

        const availableBalance = getInnerText("available-balance");

        

        if(validAccountNumber !== accountNumber){
            alert("Invalid account number");
            return;
        }
        if(addPin !== validPin){
            alert("Invalid pin");
            return;
        }
        const totalBalance = availableBalance + addAmount;

        setInnerText(totalBalance);

        document.getElementById("add-amount").value = '';


    })

    // cash out section 
    document.getElementById("btn-withdraw-money").addEventListener("click", function(event){
        event.preventDefault();
        const amount = getInputValue("withdraw-amount");

        const availableBalance = getInnerText("available-balance");

        const totalAvailableBalance = availableBalance - amount;

        setInnerText(totalAvailableBalance);

        document.getElementById("withdraw-amount").value = '';
    })

    // toggle features 
    document.getElementById("add-money-button").addEventListener("click", function(){
           handleToggle("add-money-parent");
           handleButtonToggle("add-money-button");
    })
    document.getElementById("cashout-button").addEventListener("click", function(){
         handleToggle("cashout-parent");
         handleButtonToggle("cashout-button");
    })