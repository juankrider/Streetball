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
});
