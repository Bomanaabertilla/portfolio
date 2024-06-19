// Smooth scroll for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handler
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = this.name.value;
    const email = this.email.value;
    const message = this.message.value;

    if (name && email && message) {
        alert('Thank you for your message!');
        this.reset();
    } else {
        alert('Please fill in all fields.');
    }
});
