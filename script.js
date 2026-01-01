// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    // Animate hamburger to X
    const bars = document.querySelectorAll('.bar');
    if (mobileMenu.classList.contains('active')) {
        bars[0].style.transform = 'rotate(45deg) translate(5px, 6px)';
        bars[1].style.opacity = '0';
        bars[2].style.transform = 'rotate(-45deg) translate(5px, -6px)';
    } else {
        bars[0].style.transform = 'none';
        bars[1].style.opacity = '1';
        bars[2].style.transform = 'none';
    }
});

// Close mobile menu on clicking a link
document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        const bars = document.querySelectorAll('.bar');
        bars[0].style.transform = 'none';
        bars[1].style.opacity = '1';
        bars[2].style.transform = 'none';
    });
});

// Risk Calculator Logic
document.getElementById('risk-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get values
    const age = parseInt(document.getElementById('age').value);
    const bmi = parseFloat(document.getElementById('bmi').value);
    const smoker = document.getElementById('smoker').value;
    
    // Simple Logic for demo purposes
    let riskScore = 0;
    
    if (age > 45) riskScore += 2;
    if (age > 60) riskScore += 2;
    
    if (bmi > 25) riskScore += 1;
    if (bmi > 30) riskScore += 2;
    
    if (smoker === 'yes') riskScore += 3;
    
    const resultDisplay = document.getElementById('result-display');
    const riskLevelSpan = document.getElementById('risk-level');
    const riskMessageP = document.getElementById('risk-message');
    
    resultDisplay.classList.remove('hidden');
    
    if (riskScore <= 1) {
        riskLevelSpan.textContent = 'Low Risk';
        riskLevelSpan.style.color = 'green';
        riskMessageP.textContent = 'Keep up the healthy lifestyle!';
        resultDisplay.style.background = '#E8F5E9'; // Light Green
    } else if (riskScore <= 4) {
        riskLevelSpan.textContent = 'Moderate Risk';
        riskLevelSpan.style.color = 'orange';
        riskMessageP.textContent = 'Consider booking a checkup soon to stay safe.';
        resultDisplay.style.background = '#FFF3E0'; // Light Orange
    } else {
        riskLevelSpan.textContent = 'High Risk';
        riskLevelSpan.style.color = 'red';
        riskMessageP.textContent = 'We highly recommend booking a consultation immediately.';
        resultDisplay.style.background = '#FFEBEE'; // Light Red
    }
});

// Booking Form Interaction
document.getElementById('booking-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you! Your appointment request has been received. We will contact you shortly.');
    this.reset();
});

// Scroll Animation Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

// Add fade-in class to sections for animation
document.querySelectorAll('.section').forEach(section => {
    section.classList.add('fade-in'); // Reuse existing animation class logic or add new
    // Actually, let's just use the fade-in logic for the hero elements primarily
    // For sections, we can add a simple slide-up logic if we want, but keeping it simple for now.
});
