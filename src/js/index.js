/* Here goes your JS code */

const popup = document.getElementsByClassName("popup");
const showPopupBtn = document.getElementById("show-popup-form");
const agreeCheckbox = document.getElementById("customCheckboxInput");
const submitBtn = document.getElementById("btn-submit");
const mainScreen = document.getElementsByClassName("main");

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

const successMessageCreator = () => {
  popup[0].style.visibility = "hidden";
  let successMessage = document.createElement("div");
  successMessage.id = "success-message";
  successMessage.innerHTML = "Thank you!";
  mainScreen[0].appendChild(successMessage);
};
const customAlertGenerator = (errorText, topMargin) => {
  let alertBox = document.createElement("div");
  alertBox.innerHTML = errorText;
  alertBox.id = "validation-alert";
  alertBox.style.top = topMargin;
  mainScreen[0].appendChild(alertBox);
  setTimeout(() => {
    alertBox.remove();
  }, 2000);
};

const changeSubmitBgColor = () => {
  let emailInput = document.getElementById("email-input").value;
  let passwordInput = document.getElementById("password-input").value;
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

const validation = () => {
  let emailInput = document.getElementById("email-input").value;
  let passwordInput = document.getElementById("password-input").value;

  if (emailInput.length < 1 && passwordInput.length < 1) {
    customAlertGenerator("Please fill all fields", "30vh");
  } else if (passwordInput.length < 1) {
    customAlertGenerator("Password field is empty", "30vh");
  } else if (emailInput.length < 1) {
    customAlertGenerator("Email field is empty", "30vh");
  } else if (agreeCheckbox.checked === false) {
    customAlertGenerator(
      "  Please indicate that you have agree to the Terms & Conditions",
      "24vh"
    );
  } else if (
    emailInput.length > 0 &&
    passwordInput.length > 0 &&
    agreeCheckbox.checked === true
  ) {
    setTimeout(() => {
      successMessageCreator();
    }, 3000);
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
