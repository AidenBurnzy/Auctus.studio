'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const animatedSections = document.querySelectorAll('.fade-up');

    if (animatedSections.length) {
        // Check if mobile device
        const isMobile = window.innerWidth <= 768;
        
        if (isMobile) {
            // On mobile, show all sections immediately
            animatedSections.forEach((section) => {
                section.classList.add('is-visible');
            });
        } else {
            // On desktop, use intersection observer for scroll animations
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.2,
                rootMargin: '0px 0px -80px 0px'
            });

            animatedSections.forEach((section) => observer.observe(section));
        }
    }

    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();

            // Get submit button and show loading state
            const submitBtn = contactForm.querySelector('.submit-btn');
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span>Sending...</span>';

            // Store confirmation timestamp for the confirmation page
            sessionStorage.setItem('auctus-contact-confirmed', Date.now().toString());

            // Submit form data to Netlify
            const formData = new FormData(contactForm);
            
            fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(formData).toString()
            })
            .then(() => {
                // Redirect to confirmation page on success
                window.location.href = '/contact-confirmation.html';
            })
            .catch((error) => {
                console.error('Form submission error:', error);
                submitBtn.disabled = false;
                submitBtn.innerHTML = '<span>Launch The Introduction</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>';
                alert('Sorry, there was an error submitting your form. Please try again or email us directly at founder.auctusventures@gmail.com');
            });
        });
    }

    const heroCard = document.querySelector('.hero-card');

    if (heroCard) {
        heroCard.addEventListener('mousemove', (event) => {
            const rect = heroCard.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            heroCard.style.setProperty('--pointer-x', `${x}px`);
            heroCard.style.setProperty('--pointer-y', `${y}px`);
        });

        heroCard.addEventListener('mouseleave', () => {
            heroCard.style.setProperty('--pointer-x', '50%');
            heroCard.style.setProperty('--pointer-y', '50%');
        });
    }
});
