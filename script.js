function showGreeting() {
    const message = "Thanks for visiting my portfolio! 😊";
    document.getElementById("greeting").textContent = message;
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    const btn = document.getElementById("darkModeBtn");
    btn.textContent = document.body.classList.contains("dark-mode")
        ? "Light Mode"
        : "Dark Mode";
}

window.onload = () => {
    console.log("Portfolio loaded.");
};
