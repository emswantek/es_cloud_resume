function toggleDarkMode() {
    let body = document.body;

    body.classList.toggle("dark-mode");
}

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    toggleDarkMode();
}

async function getVisitorCount() {
    try {
        let visitorCount = document.getElementById('visitorCount')
        let response = await fetch("https://eswebfunctions01.azurewebsites.net/api/http_trigger3?")

        if (response.ok) {
            let jsonData = await response.json()

            visitorCount.innerHTML = jsonData.count
        } else {
            console.error(`Error! Status: ${response.status}`)
        }
    } catch (error) {
        console.error(error);
    }
}

