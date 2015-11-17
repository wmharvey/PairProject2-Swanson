//get radiobutton value
var value;
var radios = document.forms["donation"].elements["donate"];
var radioForm = document.getElementById("donation");
var billingForm = document.getElementById("paymentInfo");

for(var i = 0; i < 6; i++) {
  radios[i].onclick = function() {
    value = parseInt(this.value);
    console.log(value);
  }
};

var handleRadio = function(event){
  event.preventDefault();
  var other = event.target.otherAmount.value;
  value = parseInt(other);
  console.log(value);
  hideInput();
  var newLabel = document.getElementById("label7");
  newLabel.textContent ="$" + value;
};

//http://jsfiddle.net/T7gE7/4/     ~source sorta
var hideInput = function() {
  var empty = document.getElementById("empty");
  var field = document.getElementById("hidden");
  field.style.display = "none";
  empty.style.display = "none";
};

var showInput = function() {
  document.getElementById("hidden").style.display = "inline";
};
//get info from forms

var Billing = function (creditNum, ccv, firstName, lastName, phone, email, address, city, state, zip) {
  this.creditNum = creditNum;
  this.ccv = ccv;
  this.firstName = firstName;
  this.lastName = lastName;
  this.phone = this.phone;
  this.email = email;
  this.address = address;
  this.city = city;
  this.state = state;
  this.zip = zip;
};

var handleBilling = function (event) {
    event.preventDefault();

  if ((!event.target.credit.value) || (!event.target.ccv.value) || (!event.target.firstName.value) || (!event.target.lastName.value) || (!event.target.phoneNumber.value) || (!event.target.email.value) || (!event.target.address.value) || (!event.target.city.value) || (!event.target.state.value) || (!event.target.zip.value)) {
      return alert("Please Fill All Fields");
    }

  var credit = event.target.credit.value;
  var ccv = event.target.ccv.value;
  var first = event.target.firstName.value;
  var last = event.target.lastName.value;
  var number = event.target.phoneNumber.value;
  var email = event.target.email.value;
  var add = event.target.address.value;
  var city = event.target.city.value;
  var state = event.target.state.value;
  var zip = event.target.zip.value;

  var newBilling = new Billing(credit, ccv, first, last, number, email, add, city, state, zip);
  console.log(credit + " is your credit card number");

  var hideForms = function() {
    var box = document.getElementById("giftForms");
    box.style.display = "none";
    }

  var response = function() {
    var giftPic = document.createElement('img');
    var greeting = document.createElement("h3");
    var position = document.getElementById("empty");
    giftPic.src = "";
    greeting.textContent = "Thank you " + first + ", for the donation of $" + value + "! Every little bit counts. Your gift will arrive shortly."; //change responses to insults from swanson or anything better than this
    position.appendChild(giftPic);
    position.appendChild(greeting);
    position.style.display = "inline";
    }
  hideForms();
  response();
};

hideInput();

radioForm.addEventListener('submit', handleRadio);
billingForm.addEventListener('submit', handleBilling);
