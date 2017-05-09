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
  if (elid === "contact-name"){
    filledName = e.currentTarget.value;
  }else if (elid === "contact-email"){
    filledEmail = e.currentTarget.value;
  }else if (elid === "contact-message"){
    filledMessage = e.currentTarget.value;
  }
}

function checkValues(){
  debugger
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
