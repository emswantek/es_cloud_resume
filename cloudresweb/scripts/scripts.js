function toggledark() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

// Commented out... may not need this with Azure Function
/* document.onreadystatechange = () => {
    if (document.readyState === "complete") {
      initApplication();
    }
  };
  */ 