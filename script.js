// Particle background configuration
particlesJS('particles-js', {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: '#d4af37' },
        shape: { type: 'circle', stroke: { width: 0 } },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 150, color: '#d4af37', opacity: 0.4, width: 1 },
        move: { enable: true, speed: 2, direction: 'none', random: false }
    },
    interactivity: {
        detect_on: 'canvas',
        events: { onhover: { enable: true, mode: 'grab' }, onclick: { enable: true, mode: 'push' } },
        modes: { grab: { distance: 200, line_linked: { opacity: 1 } }, push: { particles_nb: 4 } }
    },
    retina_detect: true
});

// GSAP animations for home section
gsap.from('#home h1', { duration: 1.5, y: 47.5, opacity: 0, ease: 'power3.out', delay: 0.475 }); // Reduced by 5%
gsap.from('#home p', { duration: 1.5, y: 47.5, opacity: 0, ease: 'power3.out', delay: 0.76 }); // Reduced by 5%

// Smooth scrolling for navigation links
document.querySelectorAll('.nav-links li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 76, // Reduced by 5% from 80
            behavior: 'smooth'
        });
        // Close mobile menu on link click
        document.querySelector('.nav-links').classList.remove('active');
        document.querySelector('.hamburger').classList.remove('active');
    });
});

// Scroll-triggered animations for sections
gsap.utils.toArray('section').forEach(section => {
    gsap.from(section, {
        scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 95, // Reduced by 5% from 100
        duration: 0.95, // Reduced by 5% from 1
        ease: 'power3.out'
    });
});

// 3D hover effect for project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 19; // Reduced by 5% from 20
        const rotateY = (centerX - x) / 19; // Reduced by 5% from 20
        gsap.to(card, { rotationX: rotateX, rotationY: -rotateY, duration: 0.285, ease: 'power2.out' }); // Reduced by 5%
    });
    card.addEventListener('mouseleave', () => {
        gsap.to(card, { rotationX: 0, rotationY: 0, duration: 0.285, ease: 'power2.out' }); // Reduced by 5%
    });
});

// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Form submission handling
const form = document.querySelector('.contact-form');
const formMessage = document.querySelector('.form-message');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    try {
        const response = await fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: { 'Accept': 'application/json' }
        });
        if (response.ok) {
            formMessage.style.display = 'block';
            formMessage.textContent = 'Message sent successfully!';
            formMessage.style.color = '#d4af37';
            form.reset();
            setTimeout(() => { formMessage.style.display = 'none'; }, 2850); // Reduced by 5% from 3000
        } else {
            formMessage.style.display = 'block';
            formMessage.textContent = 'Error sending message. Please try again.';
            formMessage.style.color = '#ff4d4d';
        }
    } catch (error) {
        formMessage.style.display = 'block';
        formMessage.textContent = 'Error sending message. Please try again.';
        formMessage.style.color = '#ff4d4d';
    }
});