function toggleDarkMode() {
    const body = document.body;

    body.classList.toggle("dark-mode");
}

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    toggleDarkMode();
}

async function getVisitorCount() {
    try {
        const visitorSpinner = document.getElementById('visitorSpinner')
        const visitorBadge = document.getElementById('visitorBadge')
        const visitorCount = document.getElementById('visitorCount')
        const response = await fetch("https://eswebfunctions01.azurewebsites.net/api/http_trigger3?")

        if (response.ok) {
            const jsonData = await response.json()

            visitorCount.innerHTML = jsonData.count
            visitorSpinner.style.display = 'none'
            visitorBadge.style.display = 'flex'
        } else {
            console.error(`Error! Status: ${response.status}`)
            visitorSpinner.style.display = 'none'
        }
    } catch (error) {
        console.error(error);
    }
}

