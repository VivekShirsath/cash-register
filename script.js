const next = document.querySelector("#next-btn");
const check = document.querySelector("#check-btn");
var notes = document.querySelectorAll(".values");
const table = document.querySelector("#table");
const arr = [2000, 500, 100, 20, 10, 5, 1];
const bill = document.querySelector("#bill");
const cash = document.querySelector("#cash");
var message = document.querySelector("#error-message");
var cashbox = document.querySelector(".cashgiven");

next.addEventListener("click", billValidate);
check.addEventListener("click", cashvalidate);

function billValidate() {
  if (bill.value) {
    cashbox.style.display = "block";
  }
}

function cashvalidate() {
  hideMessage();
  if (bill.value > 0) {
    if (cash.value > bill.value) {
      var amountReturn = cash.value - bill.value;
      calculateAmount(amountReturn);
    } else if (cash.value === bill.value) {
      showMessage("No change ");
      resetTable();
    } else {
      showMessage("Cash Value must be greater than bill value");
      resetTable();
    }
  } else {
    showMessage("Enter Valid Bill Amount,Should be greater than Zero");
    resetTable();
  }
}

function resetTable() {
  for (let i = 0; i < arr.length; i++) {
    notes[i].innerText = 0;
  }
}

function calculateAmount(amount) {
  for (let i = 0; i < arr.length; i++) {
    var noOfNotes = Math.trunc(amount / arr[i]);
    amount = amount % arr[i];
    notes[i].innerText = noOfNotes;
  }
}

function showMessage(msg) {
  console.log("jj");
  message.innerText = msg;
  message.style.display = "block";
}

function hideMessage() {
  message.style.display = "none";
}
