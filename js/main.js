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

    // Mostrar el banner si aún no se ha aceptado
    if (!localStorage.getItem("cookiesAccepted")) {
        document.getElementById("cookie-banner").style.display = "block";
    }

    // Al hacer clic en "Aceptar"
    document.getElementById("accept-cookies").addEventListener("click", function() {
        localStorage.setItem("cookiesAccepted", "true"); // Guardar la aceptación
        document.getElementById("cookie-banner").style.display = "none"; // Ocultar el banner
    });

    let streetBallHeight = document.querySelector(".streetball").offsetHeight;
    document.querySelector(".footer").style.height = streetBallHeight + "px";

    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.addEventListener('click', function() {
            sections.forEach(s => s.classList.remove('active'));
            this.classList.add('active');
        });
    });

    function login() {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const errorMessage = document.getElementById("error-message");
    
        const validUser = "admin";
        const validPass = "1234";
    
        if (username === validUser && password === validPass) {
            sessionStorage.setItem("loggedIn", "true");
            window.location.href = "../index.html";
        } else {
            errorMessage.style.display = "block";
        }
    }
    
    // Iniciar sesión con Google
    document.getElementById("google-login").addEventListener("click", function () {
        window.location.href = "https://accounts.google.com/signin"; // URL de Google OAuth
    });
    
    // Iniciar sesión con Apple
    document.getElementById("apple-login").addEventListener("click", function () {
        window.location.href = "https://appleid.apple.com/auth/authorize"; // URL de Apple OAuth
    });
    
    // Iniciar sesión con Facebook
    document.getElementById("facebook-login").addEventListener("click", function () {
        window.location.href = "https://www.facebook.com/v12.0/dialog/oauth"; // URL de Facebook OAuth
    });

    function register() {
        const username = document.getElementById("new-username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("new-password").value;
        const errorMessage = document.getElementById("register-error");
    
        if (username && email && password) {
            localStorage.setItem("user", JSON.stringify({ username, email, password }));
            alert("Registro exitoso. Ahora puedes iniciar sesión.");
            window.location.href = "login.html";
        } else {
            errorMessage.style.display = "block";
        }
    }
    
});
