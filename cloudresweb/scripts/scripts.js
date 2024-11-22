function toggleDarkMode() {
    const primaryClass = 'mdl-color--primary';
    const primaryDarkClass = 'mdl-color--primary-dark';
    const primaryTextClass = 'mdl-color-text--primary-contrast';
    const primaryTextDarkClass = 'mdl-color-text--primary-dark-contrast';

    document.body.classList.toggle('dark-mode');
    document.querySelectorAll('li').forEach(element => element.classList.toggle('dark-mode'));

    const elementsToMDLToggle = document.querySelectorAll(`.${primaryClass}, .${primaryDarkClass}, .${primaryTextClass}, .${primaryTextDarkClass}`);

    function toggleMDLClasses(element) {
        element.classList.toggle(primaryDarkClass);
        element.classList.toggle(primaryClass);
        element.classList.toggle(primaryTextDarkClass);
        element.classList.toggle(primaryTextClass);
    }

    elementsToMDLToggle.forEach(element => toggleMDLClasses(element));
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