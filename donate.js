//get radiobutton value
var value;

var radios = document.forms["donation"].elements["donate"];
for(var i = 0; i<radios.length; i++) {
    radios[i].onclick = function() {
        value = this.value;
        console.log(value);
      }
    };

//http://jsfiddle.net/T7gE7/4/     ~source sorta
var hideInput = function() {
  var field = document.getElementById("other");
  field.style.display = "none";
};

var showInput = function() {
  document.getElementById("other").style.display = "inline";
};

hideInput();

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

var billingForm = document.getElementById("paymentInfo");
var handleBilling = function (event) {
  event.preventDefault();

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

event.target.credit.value = null;
event.target.ccv.value = null;
event.target.firstName.value = null;
event.target.lastName.value = null;
event.target.phoneNumber.value = null;
event.target.email.value = null;
event.target.address.value = null;
event.target.city.value = null;
event.target.state.value = null;
event.target.zip.value = null;


var newBilling = new Billing(credit, ccv, first, last, number, email, add, city, state, zip);
console.log(credit + "okay");
alert("Thank you for your donation of, " + value +", " + first + "!" + " Look for a confirmation email at " + email, " and expect your thank-you gift in the mail soon!");

};



billingForm.addEventListener('submit', handleBilling);
