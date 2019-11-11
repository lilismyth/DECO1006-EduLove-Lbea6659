//Congratulations Message
var congratulationsMessage = document.getElementById("congratsName");
var firstName = document,getElementsById("FirstName");
var nameNode = document.createTextNode(FirstName);

congratulationsMessage.appendChild(nameNode);

appendChild(h1) {
    document.idSelector("#")
}

function loadStore() {
  document.getElementById("firstname").innerHTML = localStorage.getItem("firstname")
}


//Validation
var constraints = {
  firstName: {
    presence: true,
    length: {
      minimum: 3,
    },
    format: {
      pattern: "[a-z ]+",
      flags: "i",
      message: "can only contain letters"
    }
  },
  email: {
    presence: true,
    email: true
  },

};

// Submit form for validation Page 2
var form = document.querySelector("#p2form");
if(form) {
form.addEventListener("submit", function(ev) {
  ev.preventDefault();
  handleFormSubmit(form);
});
}

var inputs = document.querySelectorAll("input, textarea, select");
console.log(inputs);
for (var i = 0; i < inputs.length; ++i) {
  inputs.item(i).addEventListener("change", function(ev) {

    var errors = validate(form, constraints) || {};
    showErrorsForInput(this, errors[this.name])
  });
}

//redirect page
function handleFormSubmit(form, input) {
console.log(form);
  var errors = validate(form, constraints);
  showErrors(form, errors || {});
  if (!errors) {
    redirect();
  }
}

function redirect() {
  window.location = "page23.html";
}

// Submit form for validation Page 3
var form = document.querySelector("#p3divform");
if(form) {
form.addEventListener("submit", function(ev) {
  ev.preventDefault();
  handleFormSubmit(form);
});
}

var inputs = document.querySelectorAll("input, textarea, select");
console.log(inputs);
for (var i = 0; i < inputs.length; ++i) {
  inputs.item(i).addEventListener("change", function(ev) {

    var errors = validate(form, constraints) || {};
    showErrorsForInput(this, errors[this.name])
  });
}

//redirect page
function handleFormSubmit(form, input) {
console.log(form);
  var errors = validate(form, constraints);
  showErrors(form, errors || {});
  if (!errors) {
    redirect();
  }
}

function redirect() {
  window.location = "page24.html";
}




















function showErrors(form, errors) {
  form.querySelectorAll("input[name], select[name]").forEach( function(input) {
    showErrorsForInput(input, errors && errors[input.name]);
  });
}


function showErrorsForInput(input, errors) {
  var formGroup = closestParent(input.parentNode, "form-group")
  resetFormGroup(formGroup);
  if (errors) {
    formGroup.classList.add("has-error");
    errors.forEach(function(error) {
      addError(messages, error);
    });
  } else {
    formGroup.classList.add("has-success");
  }
}

function closestParent(child, className) {
  if (!child || child == document) {
    return null;
  }
  if (child.classList.contains(className)) {
    return child;
  } else {
    return closestParent(child.parentNode, className);
  }
}

function resetFormGroup(formGroup) {
  formGroup.classList.remove("has-error");
  formGroup.classList.remove("has-success");
  formGroup.querySelectorAll(".help-block.error").forEach(function(el) {
    el.parentNode.removeChild(el);
  });
}

function addError(messages, error) {
  var block = document.createElement("p");
  block.classList.add("help-block");
  block.classList.add("error");
  block.innerText = error;
  messages.appendChild(block);
}

function showSuccess() {
  alert("Success!");
}
