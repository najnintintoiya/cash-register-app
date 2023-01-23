const billAmount = document.querySelector("#bill-input");
const cashAmount = document.querySelector("#cash-input");
const checkButton = document.querySelector("#btn-check");
const message = document.querySelector(".error-msg");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const notes = ["2000", "500", "200", "100", "50", "20", "10", "5", "2", "1"];

checkButton.addEventListener("click", function validateBillandCashAmount() {
    errorMessageHide();
    if (billAmount.value > 0) {
        if (cashAmount.value > billAmount.value) {
            const returnCash = cashAmount.value - billAmount.value;
            returnCashCounter(returnCash);
        } else {
            errorMessageShow("Cash amount should be more then Bill Amount");
        }
    } else {
        errorMessageShow("Please enter valid Bill Amount");
    }
});

function returnCashCounter(amount) {
    for (let i = 0; i < notes.length; i++) {
        const numerOfNotes = Math.trunc(amount / notes[i]);
        amount = amount % notes[i];
        noOfNotes[i].innerText = numerOfNotes;
    }
}

function errorMessageHide() {
    message.style.display = "none";
}

function errorMessageShow(msg) {
    message.style.display = "block";
    message.innerText = msg;
}