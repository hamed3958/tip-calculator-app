var bill = document.getElementById("bill-input");
var people = document.getElementById("people-input");
var total = document.querySelector("#total");
var amount = document.querySelector("#amount");
var percent;

function percentCounter(value) {
  percent = value;
}

console.log(percent)

function tipCounter() {
  if (bill.value > 0 && people.value > 0) {
    let result = bill.value * percent / people.value;
    let totalResult = bill.value * percent;
    amount.innerHTML = result.toFixed(2);
    total.innerHTML = totalResult.toFixed(2);
  } else if (bill.value <= 0) {
    document.querySelector('.error1').style.visibility = 'visible';
    setTimeout(() => {
      document.querySelector('.error1').style.visibility = 'hidden';
    }, 1500);
    // alert("Bill input can't be zero !")
  } else if (people.value <= 0) {
    document.querySelector('.error2').style.visibility = 'visible';
    document.querySelector("#people-input");
    setTimeout(() => {
      document.querySelector('.error2').style.visibility = 'hidden';
    }, 1500);
    // alert("Number of people input can't be zero !")
  }
}

function reset() {
  bill.value = null;
  people.value = null;
  total.innerHTML = "$0.00";
  amount.innerHTML = "$0.00";
  document.getElementById("little-input").value = "";
  document.querySelector('.error1').style.visibility = 'hidden';
  document.querySelector('.error2').style.visibility = 'hidden';
}