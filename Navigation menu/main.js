let iconMenu = document.querySelector(".icon-menu");
let iconX = document.querySelector(".icon-x");
let menu = document.querySelector(".menu");


iconMenu.onclick = function () {
    menu.style.transform = "translatey(0)"
}
iconX.onclick = function () {
    menu.style.transform = "translatey(-100vh)"
}
window.onkeyup = function (e) {
    if (e.key === "Escape") {
        menu.style.transform = "translatey(-100vh)";
    }
}