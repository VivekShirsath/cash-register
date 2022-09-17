const next = document.querySelector("#next-btn");
const check = document.querySelector("#check-btn");
var notes = document.querySelectorAll(".values");
const table = document.querySelector("#table");
const arr = [2000, 500, 100, 20, 10, 5, 1];
const bill = document.querySelector("#bill");
const cash = document.querySelector("#cash");
var message = document.querySelector("#error-message");
var cashbox = document.querySelector(".cashgiven");
var input = document.querySelector("#cash");

function BillValidation() {
  message.innerText = "";
  if (billValue < 0) {
    message.innerText = "Bill value must be greater than 0";
  } else if (billValue == "") {
    message.innerText = "Bill value must be number";
  } else {
    cashbox.style.display = "block";
  }
}

function CashValidation() {
  var inputCash = Number(input.value);
  message.innerText = "";
  if (inputCash == 0) {
    message.innerText = "Cash cannot be zero";
  } else if (billValue == inputCash) {
    message.innerText = "No amount to be returned";
    table.style.display = none;
  } else if (billValue > inputCash) {
    message.innerText = "Cash Value must be greater than bill value";
    return false;
  } else {
    return true;
  }
}

function calculateChange(amountToReturn) {
  for (let i = 0; i < arr.length; i++) {
    var numberOfNotes = Math.trunc(amountToReturn / arr[i]);
    notes[i].innerText = numberOfNotes;
    amountToReturn = amountToReturn % arr[i];
  }
}

next.addEventListener("click", () => {
  billValue = Number(bill.value);
  BillValidation();
});

check.addEventListener("click", () => {
  if (CashValidation()) {
    var amountToReturn = input.value - billValue;
    console.log(amountToReturn);
    calculateChange(amountToReturn);
  }
});
