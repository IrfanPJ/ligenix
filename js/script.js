// Ligenix Website JavaScript

// Header scroll effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Enhanced scroll-triggered animations
const observerOptions = {
    rootMargin: '0px 0px -100px 0px',
    threshold: 0.1
};

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            sectionObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe sections and fade-in elements
document.querySelectorAll('.section').forEach(section => {
    sectionObserver.observe(section);
});

document.querySelectorAll('.fade-in-on-scroll').forEach(element => {
    fadeInObserver.observe(element);
});

// Enhanced particles.js configuration for hero (with hover effects)
particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 120,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": ["#00d4ff", "#ff006e", "#4facfe"]
        },
        "shape": {
            "type": ["circle", "triangle"],
            "stroke": {
                "width": 0,
                "color": "#000000"
            }
        },
        "opacity": {
            "value": 0.6,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 4,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 2,
                "size_min": 0.5,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#00d4ff",
            "opacity": 0.3,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 3,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": true,
                "rotateX": 600,
                "rotateY": 600
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "grab"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 200,
                "line_linked": {
                    "opacity": 0.8
                }
            },
            "push": {
                "particles_nb": 4
            }
        }
    },
    "retina_detect": true
});

// Base particles configuration for other sections (no hover effects)
const baseParticlesConfig = {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": ["#00d4ff", "#ff006e", "#4facfe"]
        },
        "shape": {
            "type": ["circle", "triangle"],
            "stroke": {
                "width": 0,
                "color": "#000000"
            }
        },
        "opacity": {
            "value": 0.6,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0.2,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 2,
                "size_min": 0.5,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 120,
            "color": "#00d4ff",
            "opacity": 0.2,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 2,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": false
            },
            "onclick": {
                "enable": false
            },
            "resize": true
        }
    },
    "retina_detect": true
};

// Initialize particles for all sections
particlesJS('particles-about', baseParticlesConfig);
particlesJS('particles-services', baseParticlesConfig);
particlesJS('particles-portfolio', baseParticlesConfig);
particlesJS('particles-why-us', baseParticlesConfig);
particlesJS('particles-contact', baseParticlesConfig);

// Enhanced testimonials slider
const testimonialsData = [
    {
        name: 'Sarah Chen',
        photo: 'media/images/testimonials/sarah-chen.jpg',
        quote: 'Ligenix revolutionized our marketing strategy! The AI-generated videos increased our engagement by 400% and saved us months of production time.'
    },
    {
        name: 'Marcus Rodriguez',
        photo: 'media/images/testimonials/marcus-rodriguez.jpg',
        quote: 'The quality and creativity of the AI-generated content is absolutely mind-blowing. Our clients can\'t believe these videos weren\'t made by a Hollywood studio.'
    },
    {
        name: 'Emily Thompson',
        photo: 'media/images/testimonials/emily-thompson.jpg',
        quote: 'From concept to final video in under 24 hours! Ligenix has transformed how we approach product launches and marketing campaigns.'
    },
    {
        name: 'David Kim',
        photo: 'media/images/testimonials/david-kim.jpg',
        quote: 'The cost savings alone made this worth it, but the creative possibilities are endless. Our ROI has tripled since partnering with Ligenix.'
    }
];

const testimonialsContainer = document.querySelector('.testimonials-slider');
let currentTestimonialIndex = 0;

function createTestimonialSlide(testimonial) {
    const slide = document.createElement('div');
    slide.classList.add('testimonial-slide');
    slide.innerHTML = `
        <img src="${testimonial.photo}" alt="${testimonial.name}" onerror="this.src='https://via.placeholder.com/100/4facfe/ffffff?text=${testimonial.name.split(' ').map(n => n[0]).join('')}'">
        <p class="quote">"${testimonial.quote}"</p>
        <p class="name">— ${testimonial.name}</p>
    `;
    return slide;
}

function updateTestimonial() {
    const currentSlide = testimonialsContainer.querySelector('.testimonial-slide.active');
    if (currentSlide) {
        currentSlide.classList.remove('active');
    }

    const newSlide = createTestimonialSlide(testimonialsData[currentTestimonialIndex]);
    testimonialsContainer.appendChild(newSlide);
    
    setTimeout(() => {
        newSlide.classList.add('active');
    }, 50);

    if (currentSlide) {
        setTimeout(() => {
            if (testimonialsContainer.contains(currentSlide)) {
                testimonialsContainer.removeChild(currentSlide);
            }
        }, 1000);
    }

    currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonialsData.length;
}

// Initialize testimonials
updateTestimonial();
setInterval(updateTestimonial, 4000);

// Enhanced portfolio lightbox
const portfolioItems = document.querySelectorAll('.portfolio-item');
const lightbox = document.getElementById('lightbox');
const lightboxContent = document.querySelector('.lightbox-content');
const lightboxClose = document.querySelector('.lightbox-close');

portfolioItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const imageUrl = item.getAttribute('data-src');
        const title = item.querySelector('.overlay h3').textContent;
        
        lightboxContent.innerHTML = `
            <img src="${imageUrl}" alt="${title}" onerror="this.src='${item.querySelector('img').src}'">
            <div style="position: absolute; bottom: 20px; left: 20px; right: 20px; background: rgba(0,0,0,0.8); padding: 20px; border-radius: 10px; backdrop-filter: blur(10px);">
                <h3 style="color: var(--accent-color); margin: 0; font-size: 1.5rem;">${title}</h3>
                <p style="color: white; margin: 10px 0 0 0; opacity: 0.9;">Click to explore this AI-generated masterpiece</p>
            </div>
        `;
        
        lightbox.classList.add('visible');
        document.body.style.overflow = 'hidden';
    });
});

lightboxClose.addEventListener('click', closeLightbox);

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

function closeLightbox() {
    lightbox.classList.remove('visible');
    document.body.style.overflow = 'auto';
}

// Enhanced form handling
const contactForm = document.querySelector('.contact-form form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    // Simulate form submission with loading state
    submitBtn.textContent = 'Sending...';
    submitBtn.style.background = 'var(--gradient-secondary)';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        submitBtn.textContent = '✅ Message Sent!';
        submitBtn.style.background = 'var(--gradient-accent)';
        
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.style.background = '';
            submitBtn.disabled = false;
            contactForm.reset();
        }, 2000);
    }, 1500);
});

// Add floating animation to cards
const cards = document.querySelectorAll('.card');
cards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.2}s`;
    card.addEventListener('mouseenter', () => {
        card.style.animation = 'pulse 0.6s ease-in-out';
    });
    card.addEventListener('mouseleave', () => {
        card.style.animation = '';
    });
});

// Keyboard navigation for lightbox
document.addEventListener('keydown', (e) => {
    if (lightbox.classList.contains('visible') && e.key === 'Escape') {
        closeLightbox();
    }
});

// Add loading animation to images
const images = document.querySelectorAll('img');
images.forEach(img => {
    img.addEventListener('load', () => {
        img.style.animation = 'fadeIn 0.5s ease-in-out';
    });
});

// Performance optimization: Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Mobile menu toggle (for future enhancement)
function toggleMobileMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('mobile-active');
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('Ligenix Website Loaded Successfully!');
    
    // Add any initialization code here
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        setTimeout(() => {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.remove();
            }, 500);
        }, 1000);
    }
});

// Add scroll to top functionality
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show/hide scroll to top button
window.addEventListener('scroll', () => {
    const scrollTopBtn = document.getElementById('scroll-top-btn');
    if (scrollTopBtn) {
        if (window.scrollY > 300) {
            scrollTopBtn.style.display = 'block';
        } else {
            scrollTopBtn.style.display = 'none';
        }
    }
});