const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const body = document.body;


// Abrir / cerrar menú
menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");
    body.classList.toggle("menu-open");

    const menuIsOpen =
        navLinks.classList.contains("active");

    menuToggle.textContent =
        menuIsOpen ? "✕" : "☰";

});


// Cerrar al seleccionar un enlace
navLinks.addEventListener("click", (event) => {

    if (event.target.tagName === "A") {

        navLinks.classList.remove("active");
        body.classList.remove("menu-open");

        menuToggle.textContent = "☰";
    }

});


// Cerrar al hacer clic fuera
document.addEventListener("click", (event) => {

    const clickedInsideMenu =
        navLinks.contains(event.target);

    const clickedToggle =
        menuToggle.contains(event.target);

    if (
        !clickedInsideMenu &&
        !clickedToggle &&
        navLinks.classList.contains("active")
    ) {

        navLinks.classList.remove("active");
        body.classList.remove("menu-open");

        menuToggle.textContent = "☰";
    }

});