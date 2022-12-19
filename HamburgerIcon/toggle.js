const allIcons = document.querySelectorAll(".nav-icon");

allIcons.forEach((icon) => {
    icon.addEventListener("click", () => icon.classList.toggle("open"));
});
