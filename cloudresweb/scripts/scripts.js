function toggleDarkMode() {
    const body = document.body;
    const darkModeButton = document.getElementById('darkModeButton');

    const colorClass = 'mdl-button--colored';
    const accentClass = 'mdl-button--accent';

    body.classList.toggle('dark-mode');

    if (darkModeButton.classList.contains(colorClass)) {
        darkModeButton.classList.remove(colorClass);
        darkModeButton.classList.add(accentClass);
    } else {
        darkModeButton.classList.remove(accentClass);
        darkModeButton.classList.add(colorClass);
    }
}

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    toggleDarkMode();
}

async function getVisitorCount() {
    try {
        const visitorSpinner = document.getElementById('visitorSpinner')
        const visitorBadge = document.getElementById('visitorBadge')
        const response = await fetch("https://eswebfunctions01.azurewebsites.net/api/http_trigger3?")

        if (response.ok) {
            const jsonData = await response.json()

            setVisitorCount(jsonData.count)
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

function setVisitorCount(count) {
    const visitorCount = document.getElementById('visitorCount');
    visitorCount.textContent = count;

    if (count < 1000) {
        visitorCount.style.fontSize = "16px";
    } else if (count < 10000) {
        visitorCount.style.fontSize = "12px";
    } else if (count < 100000) {
        visitorCount.style.fontSize = "8px";
    } else {
        visitorCount.style.fontSize = "4px"; // pls don't
    }
}