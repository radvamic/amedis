// ===================================
// AMEDIS — Interactivity
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    // ---- Navbar scroll effect ----
    const navbar = document.querySelector('.navbar');
    const scrollThreshold = 60;

    const handleScroll = () => {
        if (window.scrollY > scrollThreshold) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // ---- Hamburger menu ----
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('open');
            document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
        });
    }

    // ---- Smooth scroll for anchor links ----
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                const offset = 80; // navbar height
                const top = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: 'smooth' });

                // Close mobile menu
                if (navLinks.classList.contains('open')) {
                    hamburger.classList.remove('active');
                    navLinks.classList.remove('open');
                    document.body.style.overflow = '';
                }
            }
        });
    });

    // ---- Scroll reveal animations ----
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    revealObserver.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        }
    );

    revealElements.forEach(el => revealObserver.observe(el));

    // ---- Contact form handling ----
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const formData = new FormData(form);
            const name = formData.get('name');
            const email = formData.get('email');
            const phone = formData.get('phone');
            const message = formData.get('message');

            // Basic validation
            if (!name || !email || !message) {
                showFormMessage('Prosím vyplňte všechna povinná pole.', 'error');
                return;
            }

            if (!isValidEmail(email)) {
                showFormMessage('Prosím zadejte platnou e-mailovou adresu.', 'error');
                return;
            }

            // Simulate sending (replace with actual endpoint)
            const submitBtn = form.querySelector('button[type="submit"]');
            submitBtn.textContent = 'Odesílání...';
            submitBtn.disabled = true;

            setTimeout(() => {
                showFormMessage('Děkujeme za Vaši zprávu! Ozveme se Vám co nejdříve.', 'success');
                form.reset();
                submitBtn.textContent = 'Odeslat zprávu';
                submitBtn.disabled = false;
            }, 1200);
        });
    }

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function showFormMessage(msg, type) {
        let msgEl = document.querySelector('.form-message');
        if (!msgEl) {
            msgEl = document.createElement('div');
            msgEl.className = 'form-message';
            form.insertAdjacentElement('afterend', msgEl);
        }

        msgEl.textContent = msg;
        msgEl.style.cssText = `
      margin-top: 1rem;
      padding: 0.85rem 1.2rem;
      border-radius: 0.5rem;
      font-size: 0.875rem;
      font-weight: 500;
      animation: fadeIn 0.3s ease;
      color: ${type === 'success' ? '#166534' : '#991b1b'};
      background: ${type === 'success' ? '#dcfce7' : '#fee2e2'};
      border: 1px solid ${type === 'success' ? '#bbf7d0' : '#fecaca'};
    `;

        setTimeout(() => {
            msgEl.style.opacity = '0';
            msgEl.style.transition = 'opacity 0.3s ease';
            setTimeout(() => msgEl.remove(), 300);
        }, 5000);
    }

    // ---- Animated counters ----
    const counters = document.querySelectorAll('[data-count]');
    const counterObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    counterObserver.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.5 }
    );

    counters.forEach(el => counterObserver.observe(el));

    function animateCounter(el) {
        const target = parseInt(el.getAttribute('data-count'), 10);
        const suffix = el.getAttribute('data-suffix') || '';
        const duration = 2000;
        const start = performance.now();

        function update(now) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
            const current = Math.round(target * eased);
            el.textContent = current + suffix;

            if (progress < 1) {
                requestAnimationFrame(update);
            }
        }

        requestAnimationFrame(update);
    }
});
