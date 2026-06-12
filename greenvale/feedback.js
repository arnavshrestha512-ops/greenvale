document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault();

        alert("Your feedback is submitted successfully!");

        this.reset();
    });

});

