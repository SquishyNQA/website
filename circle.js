document.addEventListener("DOMContentLoaded", function() {
    const contactRight = document.getElementById("contactRight");

    // Function to generate a random number between min and max
    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Create 10 circles and position them randomly in the contact-right div
    for (let i = 0; i < 10; i++) {
        const circle = document.createElement("div");
        circle.style.width = "20px"; // Adjust circle size as needed
        circle.style.height = "20px"; // Adjust circle size as needed
        circle.style.backgroundColor = "#007bff"; // Circle color
        circle.style.borderRadius = "50%"; // Create a circle shape
        circle.style.position = "absolute";
        circle.style.top = `${getRandomNumber(0, contactRight.clientHeight - 20)}px`; // Random top position
        circle.style.left = `${getRandomNumber(0, contactRight.clientWidth - 20)}px`; // Random left position
        contactRight.appendChild(circle);
    }
});
