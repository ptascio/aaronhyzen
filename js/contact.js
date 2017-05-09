var contactName;
var contactEmail;
var contactMessage;
var contactForm;
var submitButton;

var filledName = "";
var filledEmail = "";
var filledMessage = "";

function handleInput(e){
  var elid = e.target.id;
  var elval = e.target.value;
  if (elid === "contact-name"){
    filledName = elval;
  }else if (elid === "contact-email"){
    filledEmail = elval;
  }else if (elid === "contact-message"){
    filledMessage = elval;
  }
}

function displayErrors(elid){
  var el = document.getElementById(elid);
  el.innerText = "*Entry Cannot Be Blank";
}

function displayEmailErrors(elid){
  var el = document.getElementById("email-errors");
  el.innerText = "*Not a valid email";
}

function removeErrors(elid){
  var el = document.getElementById(elid);
  el.innerText = "";
}

function checkValues(){
  if (filledName.length < 1){
    displayErrors("name-errors");
  }else {
    removeErrors("name-errors");
  }
  if (filledEmail.length < 1){
    displayErrors("email-errors");
  }else if (filledEmail.length > 0){
    checkEmail(filledEmail);
  }
  if (filledMessage.length < 1){
    displayErrors("message-errors");
  }else {
    removeErrors("message-errors");
  }
}

function checkEmail(email){
  var uppercasePassword = email.toUpperCase();
  var re = new RegExp("^([A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,})$");
  if (!re.test(uppercasePassword)){
    displayEmailErrors("email-errors");
  }else {
    removeErrors("email-errors");
  }
  return re.test(uppercasePassword);
}


document.addEventListener("DOMContentLoaded", () => {
  contactName = document.getElementById("contact-name");
  contactEmail = document.getElementById("contact-email");
  contactMessage = document.getElementById("contact-message");
  contactForm = document.getElementById("contact-form");
  submitButton = document.getElementById("form-button");
  contactForm.oninput = handleInput;
  submitButton.addEventListener("click", checkValues);
});
