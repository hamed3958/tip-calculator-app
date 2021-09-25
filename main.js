var bill = document.getElementById("bill-input");
var people = document.getElementById("people-input");
var total = document.querySelector("#total");
var amount = document.querySelector("#amount");
var percent = 0;

document.getElementById("reset-btn").disabled = true;

function percentCounter(value) {
  percent = value;
}

function tipCounter() {

  if (bill.value != "" || people.value != "" || percent != 0) {
    document.getElementById("reset-btn").disabled = false;
  }

  if (bill.value > 0 && people.value > 0 && percent > 0) {
    let result = bill.value * percent / people.value;
    let totalResult = bill.value * percent;
    amount.innerHTML = ("$" + result.toPrecision(3));
    total.innerHTML = ("$" + totalResult.toPrecision(3));

    length((amount.innerHTML), "amount");
    length((total.innerHTML), "total");

  } else if (bill.value <= 0) {
    document.querySelector('.error1').style.visibility = 'visible';
    document.querySelector("#bill-input").classList.add("error-border");
    setTimeout(() => {
      document.querySelector('.error1').style.visibility = 'hidden';
      document.querySelector("#bill-input").classList.remove("error-border");
    }, 2000);
  } else if (percent <= 0) {
    document.querySelector('.error3').style.visibility = 'visible';
    setTimeout(() => {
      document.querySelector('.error3').style.visibility = 'hidden';
    }, 2000);
  } else if (people.value <= 0) {
    document.querySelector('.error2').style.visibility = 'visible';
    document.querySelector("#people-input").classList.add("error-border");
    setTimeout(() => {
      document.querySelector("#people-input").classList.remove("error-border");
      document.querySelector('.error2').style.visibility = 'hidden';
    }, 2000);
  }
}

function reset() {
  document.getElementById("reset-btn").disabled = true;
  percent = 0;
  bill.value = null;
  people.value = null;
  total.innerHTML = "$0.00";
  amount.innerHTML = "$0.00";
  document.getElementById("little-input").value = "";
  if (document.getElementsByClassName("active")[0]) {
    document.getElementsByClassName("active")[0].classList.remove("active");
  }
  document.getElementById("amount").style.fontSize = "48px";
  document.getElementById("total").style.fontSize = "48px";
}

//  btn active  //

// Get the container element
var btnContainer = document.getElementById("btn-holder");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("act");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");

    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }

    // Add the active class to the current/clicked button
    this.className += " active";
  });
}

function length(x, y) {
  if (x.length > 6) {
    document.getElementById(y).style.fontSize = "36px";
  } else {
    document.getElementById(y).style.fontSize = "48px";
  }
}