function toggledark() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

// Alternative to load event
document.onreadystatechange = () => {
  if (document.readyState === "complete") {
    document.getElementById("pagestate").innerHTML = document.readyState;
  }
};
