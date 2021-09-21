var bill = document.getElementById("bill-input");
var people = document.getElementById("people-input");
var custom = document.getElementById("little-input");
var total = document.querySelector("#total");
var amount = document.querySelector("#amount");

function tipCounter(value) {

  if (bill.value > 0 && people.value > 0) {
    let result = bill.value * value / people.value;
    let totalResult = bill.value * value;
    amount.innerHTML = result.toFixed(2);
    total.innerHTML = totalResult.toFixed(2);
  } else {
    document.querySelector('.error1').style.visibility = 'visible';
    document.querySelector('.error2').style.visibility = 'visible';
    // alert("inputs can't be zero !")
  }
}

function reset() {
  bill.value = null;
  people.value = null;
  total.innerHTML = "$0.00";
  amount.innerHTML = "$0.00";
  custom.value = "";
  document.querySelector('.error1').style.visibility = 'hidden';
    document.querySelector('.error2').style.visibility = 'hidden';
}
