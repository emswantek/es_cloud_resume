function toggledark() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

function pagestate() {
 document.getElementById("pagestate").innerHTML = document.readyState();
}