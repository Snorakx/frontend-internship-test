/* Here goes your JS code */

const popup = document.getElementsByClassName("popup");
const showPopupBtn = document.getElementById("show-popup-form");
const agreeCheckbox = document.getElementById("customCheckboxInput");
const submitBtn = document.getElementById("btn-submit");

const openPopup = () => {
  popup[0].style.visibility = "visible";
  showPopupBtn.style.visibility = "hidden";
};

const closePopup = () => {
  let customAlert = document.getElementById("validation-alert");
  popup[0].style.visibility = "hidden";
  showPopupBtn.style.visibility = "visible";
  customAlert.remove();
};

const validation = () => {
  let emailInput = document.getElementById("email-input").value;
  let passwordInput = document.getElementById("password-input").value;
  if (emailInput.length < 1 && passwordInput.length < 1) {
    let alertBox = document.createElement("div");
    alertBox.innerHTML = "Please fill all fields";
    alertBox.id = "validation-alert";
    let abc = document.getElementsByClassName("main");
    abc[0].appendChild(alertBox);
  } else if (passwordInput.length < 1) {
    let alertBox = document.createElement("div");
    alertBox.innerHTML = "Password field is empty";
    alertBox.id = "validation-alert";
    let abc = document.getElementsByClassName("main");
    abc[0].appendChild(alertBox);
  } else if (emailInput.length < 1) {
    let alertBox = document.createElement("div");
    alertBox.innerHTML = "Email field is empty";
    alertBox.id = "validation-alert";
    let abc = document.getElementsByClassName("main");
    abc[0].appendChild(alertBox);
  } else if (agreeCheckbox.checked === false) {
    let alertBox = document.createElement("div");
    alertBox.innerHTML =
      "Please indicate that you have agree to the Terms & Conditions";
    alertBox.id = "validation-alert";
    alertBox.style.top = "24vh";
    let abc = document.getElementsByClassName("main");
    abc[0].appendChild(alertBox);
  } else if (
    emailInput.length > 1 &&
    passwordInput.length > 1 &&
    agreeCheckbox.checked === true
  ) {
    popup[0].style.visibility = "hidden";
  }
  let alertTimeOut = document.getElementById("validation-alert");
  setTimeout(() => {
    alertTimeOut.remove();
  }, 3000);
};

const changeSubmitBgColor = () => {
  let emailInput = document.getElementById("email-input").value;
  let passwordInput = document.getElementById("password-input").value;
  console.log(emailInput.length);
  if (
    agreeCheckbox.checked === true &&
    emailInput.length > 1 &&
    passwordInput.length > 1
  ) {
    submitBtn.style.backgroundColor = "#fd878e";
  } else {
    submitBtn.style.backgroundColor = "black";
  }
};

agreeCheckbox.addEventListener("change", () => {
  changeSubmitBgColor();
});

submitBtn.addEventListener("click", () => {
  validation();
});

document.getElementById("close-popup-form").addEventListener("click", () => {
  closePopup();
});

document.getElementById("show-popup-form").addEventListener("click", () => {
  openPopup();
});
