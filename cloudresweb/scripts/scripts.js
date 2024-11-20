function toggledark() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
/*
function totalvisitors() {
  getvisitors();
  document.getElementById("vcount").innerHTML =totalvisitors();
*/
/*
}
function getvisitors() {
  const triggerurl = "https://cloudresumepython1.azurewebsites.net";
}
*/

// Alternative to load event
/*
document.onreadystatechange = () => {
  if (document.readyState === "complete") {
    document.getElementById("pagestate").innerHTML = document.readyState;
  }
};
*/

window.addEventListener("load", (event) => {
  console.log("page is fully loaded");
  fetchcount()
});

/*async function fetchcount() {
  //const url = "https://eswebfunctions01.azurewebsites.net/api/http_trigger3?";
  // const response = await fetch(url);
  var response = await fetch("https://eswebfunctions01.azurewebsites.net/api/http_trigger3?").then(response => response.json())
  if (!response.ok) {
    throw new Error('Response status: ${response.status}');
  }
  document.getElementById('vcount').innerHTML = response.body;
}*/

function fetchcount() {
  //const url = "https://eswebfunctions01.azurewebsites.net/api/http_trigger3?";
  // const response = await fetch(url);
  var response = fetch("https://eswebfunctions01.azurewebsites.net/api/http_trigger3?").then(response => response.json())
  if (!response.ok) {
    throw new Error('Response status: ${response.status}');
  }
  document.getElementById('vcount').innerHTML = response.body;
}