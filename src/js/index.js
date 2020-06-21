/* Here goes your JS code */

const popup = document.getElementsByClassName("popup");
const showPopupBtn = document.getElementById("show-popup-form");
const openPopup = () => {
  popup[0].style.visibility = "visible";
  showPopupBtn.style.visibility = "hidden";
};
const closePopup = () => {
  popup[0].style.visibility = "hidden";
  showPopupBtn.style.visibility = "visible";
};

document.getElementById("close-popup-form").addEventListener("click", () => {
  closePopup();
});

document.getElementById("show-popup-form").addEventListener("click", () => {
  openPopup();
});
