// Display current year
document.getElementById("year")?.textContent =
    new Date().getFullYear();

// Handle contact form
const form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", function(event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value;

        const email =
            document.getElementById("email").value;

        const message =
            document.getElementById("message").value;

        alert(
            "Thank you " + name +
            "! Your message has been received."
        );

        form.reset();
    });
}