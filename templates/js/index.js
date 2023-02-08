var mylogo = document.querySelector(".logo");
var myinfo = document.querySelector(".info");

mylogo.addEventListener("mouseover", showPopup);
mylogo.addEventListener("mouseout", hidePopup);

function showPopup() {
    myinfo.style.display = "block";
}

function hidePopup() {
    myinfo.style.display = "none";
}