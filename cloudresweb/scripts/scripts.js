document.addEventListener("DOMContentLoaded", getVisitorCount);
document.getElementById("dark-mode-toggle").addEventListener("click", toggleDarkMode);
document.getElementById("expired-cert-toggle").addEventListener("click", () => {
    togglePanelContent('#expired-cert-content', '#expired-cert-toggle');
});

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    toggleDarkMode();
}

function toggleDarkMode() {
    const primaryClass = 'mdl-color--primary';
    const primaryDarkClass = 'mdl-color--primary-dark';
    const primaryTextClass = 'mdl-color-text--primary-contrast';
    const primaryTextDarkClass = 'mdl-color-text--primary-dark-contrast';

    document.body.classList.toggle('dark-mode');
    document.querySelectorAll('li').forEach(element => element.classList.toggle('dark-mode'));

    const toggleButton = document.getElementById('dark-mode-toggle');

    if (!toggleButton) {
        console.error('Toggle button not found!');
        return;
    }

    if (toggleButton.textContent === 'Switch to Light Mode') {
        toggleButton.textContent = 'Switch to Dark Mode';
    } else {
        toggleButton.textContent = 'Switch to Light Mode';
    }

    const elementsToMDLToggle = document.querySelectorAll(`.${primaryClass}, .${primaryDarkClass}, .${primaryTextClass}, .${primaryTextDarkClass}`);

    function toggleMDLClasses(element) {
        element.classList.toggle(primaryDarkClass);
        element.classList.toggle(primaryClass);
        element.classList.toggle(primaryTextDarkClass);
        element.classList.toggle(primaryTextClass);
    }

    elementsToMDLToggle.forEach(element => toggleMDLClasses(element));
}

async function getVisitorCount() {
    try {
        const visitorSpinner = document.getElementById('visitorSpinner');
        const visitorBadge = document.getElementById('visitorBadge');

        if (!visitorSpinner || !visitorBadge) {
            console.error('Visitor spinner or badge not found!');
            return;
        }

        const response = await fetch("https://eswebfunctions01.azurewebsites.net/api/http_trigger3?");

        if (response.ok) {
            const jsonData = await response.json();

            setVisitorCount(jsonData.count);
            visitorBadge.style.display = 'flex';
        } else {
            console.error(`Error! Status: ${response.status}`);
        }

        visitorSpinner.style.display = 'none';
    } catch (error) {
        console.error('Failed to fetch visitor count:', error);
    }
}

function setVisitorCount(count) {
    const visitorCount = document.getElementById('visitorCount');
    const basePixels = 14

    if (!visitorCount) {
        console.error('Visitor count element not found!');
        return;
    }

    visitorCount.textContent = count;

    if (count < 1000) {
        visitorCount.style.fontSize = `${basePixels}px`;
    } else if (count < 10000) {
        visitorCount.style.fontSize = `${basePixels - 4}px`;
    } else if (count < 100000) {
        visitorCount.style.fontSize = `${basePixels - 6}px`;
    } else {
        visitorCount.style.fontSize = `${basePixels - 10}px`;
    }
}

function togglePanelContent(contentSelector, buttonSelector) {
    const content = document.querySelector(contentSelector);
    const button = document.querySelector(buttonSelector);

    if (!content || !button) {
        console.error('Content or button element not found!');
        return;
    }

    let buttonText = button.textContent;

    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
        buttonText = buttonText.replace('Show', 'Hide');
    } else {
        content.style.display = 'none';
        buttonText = buttonText.replace('Hide', 'Show');
    }

    button.textContent = buttonText;
}
