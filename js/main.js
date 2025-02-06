document.addEventListener("DOMContentLoaded", function() {
    const five = document.querySelector(".five");
    const seven = document.querySelector(".seven");
    const body = document.body;

    five.addEventListener("mouseenter", function() {
        body.classList.add("five-hover");
        body.classList.remove("seven-hover");
    });
    five.addEventListener("mouseleave", function() {
        body.classList.remove("five-hover");
    });

    seven.addEventListener("mouseenter", function() {
        body.classList.add("seven-hover");
        body.classList.remove("five-hover");
    });
    seven.addEventListener("mouseleave", function() {
        body.classList.remove("seven-hover");
    });

    // Comprobar si el usuario ya aceptó las cookies
    if (!localStorage.getItem("cookiesAccepted")) {
        document.getElementById("cookie-banner").style.display = "block"; // Mostrar el banner
    }

    // Al hacer clic en "Aceptar"
    document.getElementById("accept-cookies").addEventListener("click", function() {
        localStorage.setItem("cookiesAccepted", "true"); // Guardar la aceptación en el almacenamiento local
        document.getElementById("cookie-banner").classList.add("fade"); // Añadir la clase fade para desvanecer
        setTimeout(function() {
            document.getElementById("cookie-banner").style.display = "none"; // Ocultar después de la animación
        }, 500); // Tiempo de desvanecimiento (500ms)
    });
});
