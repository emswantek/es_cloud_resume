function toggledark() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

async function fetchcount() {
  try {
    var vcount = document.getElementById('vcount');
    var jsondata
    var response = await fetch("https://eswebfunctions01.azurewebsites.net/api/http_trigger3?");

    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }

    jsondata = await response.json()

    vcount.innerHTML = jsondata.count
  } catch (error) {
    console.log(error);
  }
}

