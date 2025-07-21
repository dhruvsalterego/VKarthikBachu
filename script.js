// Mobile menu functionality
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileNav = document.getElementById('mobileNav');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    mobileNav.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.mobile-nav a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        mobileNav.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!mobileMenuBtn.contains(e.target) && !mobileNav.contains(e.target)) {
        mobileMenuBtn.classList.remove('active');
        mobileNav.classList.remove('active');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Create more floating particles
function createParticles() {
    const hero = document.querySelector('.hero');
    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 4) + 's';
        hero.appendChild(particle);
    }
}

function createSectionParticles(sectionClass) {
    const section = document.querySelector(sectionClass);
    const container = section.querySelector('.section-particles');
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 8 + 's';
        particle.style.animationDuration = (Math.random() * 4 + 6) + 's';
        container.appendChild(particle);
    }
}

createSectionParticles('.about');
createSectionParticles('.skills');
createSectionParticles('.contact');

createParticles();

// Add particles to projects section
function createProjectParticles() {
    const projectsSection = document.querySelector('.projects');
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 4) + 's';
        projectsSection.appendChild(particle);
    }
}

createProjectParticles();

// Project modal functionality
function openProject(projectType) {
    const projects = {
        'ecommerce': {
            title: 'VendIn',
            description: 'VendIn is a Django-based web platform that helps vendors increase their visibility by creating online profiles. Vendors can add details about their offerings, specify their location, and showcase the services or products they provide. The goal of VendIn is to give local vendors a digital presence and make it easier for users to discover hidden businesses and opportunities around them.',
            tech: 'HTML, CSS, JavaScript (Django Templates), Django,SQLite,'
        },
        'social': {
            title: 'ConnectX', 
            description: 'ConnectX is an inclusive web platform designed to empower individuals with speech, hearing, or visual impairments. The site offers adaptive technologies such as text-to-speech, speech-to-text, and high-contrast modes, making knowledge resources easily accessible. Users can interact through real-time chat, access curated educational materials, and utilize assistive tools tailored for their needs. The goal is to bridge the accessibility gap and foster equal opportunities for learning and communication.',
            tech: 'Vue.js, Socket.io, Express.js, PostgreSQL'
        },
        'ecofriendly': {
            title: 'EcoPlay',
            description: 'EcoPlay is an interactive web application that motivates users to adopt eco-friendly habits by rewarding sustainable actions. Users can log their green activities, earn points and badges, and participate in community challenges. The platform features real-time progress tracking, educational resources, and a vibrant community space to share achievements and inspire others to make',
            tech: 'React, Three.js, Node.js'
        }
    };

    const project = projects[projectType];
    alert(`${project.title}\n\n${project.description}\n\nTechnologies: ${project.tech}`);
}

// Form submission
function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Simulate form submission
    alert(`Thank you ${name}! Your message has been received. I'll get back to you at ${email} soon.`);
    event.target.reset();
}

// Add typing effect to hero text
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Initialize typing effect after page load
window.addEventListener('load', () => {
    setTimeout(() => {
        const heroTitle = document.querySelector('.hero h1');
        const heroSubtitle = document.querySelector('.hero p');
        
        typeWriter(heroTitle, 'Sai Venkata Karthik Bachu', 100);
        setTimeout(() => {
            typeWriter(heroSubtitle, 'Computer Science Student | ML Enthusiast | Developer', 50);
        }, 1500);
    }, 1000);
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const rate = scrolled * -0.5;
    hero.style.transform = `translateY(${rate}px)`;
});

// Add mouse move effect to project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});