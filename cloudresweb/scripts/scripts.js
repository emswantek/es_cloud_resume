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
/*
window.addEventListener("load", (event) => {
  console.log("page is fully loaded");
});
*/
async function vcount(){
 const url = "https://eswebfunctions01.azurewebsites.net/api/http_trigger3?";
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Response status: ${response.status}');    
  }
  document.getElementById('vcount').innerHTML = response;
}