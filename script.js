// Animate skill bars
document.addEventListener("DOMContentLoaded", function() {
    const bars = document.querySelectorAll('.bar div');
    bars.forEach(bar => {
        let width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 300);
    });
});

// Simple form submission alert
const form = document.getElementById('contactForm');
form.addEventListener('submit', function(e){
    e.preventDefault();
    alert('Thank you! Your message has been sent.');
    form.reset();
});
