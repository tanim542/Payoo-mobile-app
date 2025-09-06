document.getElementById('btn-login').addEventListener('click', function(event) {
    event.preventDefault();

    const mobileNum = 1815916490;
    const pinNum = 1234;
    
    const mobileNumValue = document.getElementById("mobile-number").value;
    const pinNumValue = document.getElementById("pin-number").value;


    const mobileNumConverted = parseInt(mobileNumValue);
    const pinNumConverted = parseInt(pinNumValue);

    if(mobileNumConverted === mobileNum && pinNumConverted === pinNum){
       window.location.href="./home.html";
    }
    else{
        alert("Invalid Number or Pin")
    }
})