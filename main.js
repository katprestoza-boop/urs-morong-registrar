// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {

    // Handle Request Form
    const requestForm = document.getElementById('requestForm');
    if(requestForm) {
        requestForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent actual form submission
            const message = document.getElementById('requestMessage');
            message.textContent = "✅ Your request has been submitted successfully!";
            message.style.color = "#28a745";
            requestForm.reset();
        });
    }

    // Handle Contact Form
    const contactForm = document.getElementById('contactForm');
    if(contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent actual form submission
            const message = document.getElementById('contactMessage');
            message.textContent = "📩 Your message has been sent successfully!";
            message.style.color = "#28a745";
            contactForm.reset();
        });
    }

});
