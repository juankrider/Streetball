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

    document.addEventListener("DOMContentLoaded", function() {
        // Mostrar el banner si aún no se ha aceptado
        if (!localStorage.getItem("cookiesAccepted")) {
            document.getElementById("cookie-banner").style.display = "block";
        }
    
        // Al hacer clic en "Aceptar"
        document.getElementById("accept-cookies").addEventListener("click", function() {
            localStorage.setItem("cookiesAccepted", "true"); // Guardar la aceptación
            document.getElementById("cookie-banner").style.display = "none"; // Ocultar el banner
        });
    });
    
    document.addEventListener("DOMContentLoaded", function () {
        let streetBallHeight = document.querySelector(".streetball").offsetHeight;
        document.querySelector(".footer").style.height = streetBallHeight + "px";
    });    

});
