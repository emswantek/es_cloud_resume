function toggledark() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

document.getElementById("pagestate").addEventListener("load", pagestate);

function pagestate() {
 document.getElementById("pagestate").innerHTML = document.readyState;
}