window.onload = function () {
    var preloader = document.getElementById('preloader');
    preloader.style.display = "none";
}


const htmlTag = document.getElementsByTagName("html")[0];


const toggleBtn = document.getElementById("theme-toggle");


toggleBtn.addEventListener("click", function () {

    if (htmlTag.getAttribute("data-theme") === "light") {
        htmlTag.setAttribute("data-theme", "dark");
    } else {
        htmlTag.setAttribute("data-theme", "light");
    }
});