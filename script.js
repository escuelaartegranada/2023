// II Foro Internacional de la Paz - Granada 2025
// JavaScript for Interactive Features

document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile Navigation Toggle
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });
        
        // Close mobile menu when clicking on links
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
    
    // Smooth Scrolling for Anchor Links
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Header Scroll Effect
    const header = document.querySelector('.header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Active Navigation Link Highlighting
    const sections = document.querySelectorAll('section[id]');
    const navLinksArray = Array.from(document.querySelectorAll('.nav-link'));
    
    function updateActiveNavLink() {
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinksArray.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveNavLink);
    
    // Gallery Tabs Functionality
    const tabBtns = document.querySelectorAll('.tab-btn');
    const galleryGrids = document.querySelectorAll('.gallery-grid');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Remove active class from all tabs
            tabBtns.forEach(tab => tab.classList.remove('active'));
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Hide all gallery grids
            galleryGrids.forEach(grid => {
                grid.style.display = 'none';
                grid.classList.remove('active');
            });
            
            // Show target grid
            const targetGrid = document.getElementById(targetTab);
            if (targetGrid) {
                targetGrid.style.display = 'grid';
                targetGrid.classList.add('active');
                
                // Add fade-in animation
                targetGrid.style.opacity = '0';
                setTimeout(() => {
                    targetGrid.style.opacity = '1';
                    targetGrid.style.transition = 'opacity 0.3s ease';
                }, 50);
            }
        });
    });
    
    // Newsletter Form Submission
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            
            if (validateEmail(email)) {
                showNotification('¡Gracias por suscribirte! Te mantendremos informado sobre nuestros eventos.', 'success');
                this.reset();
            } else {
                showNotification('Por favor, ingresa un correo electrónico válido.', 'error');
            }
        });
    }
    
    // Contact Form Submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const message = this.querySelector('textarea').value;
            
            if (name && validateEmail(email) && message) {
                showNotification('¡Mensaje enviado exitosamente! Te contactaremos pronto.', 'success');
                this.reset();
            } else {
                showNotification('Por favor, completa todos los campos correctamente.', 'error');
            }
        });
    }
    
    // Email Validation Function
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    // Notification System
    function showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotifications = document.querySelectorAll('.notification');
        existingNotifications.forEach(notification => notification.remove());
        
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-icon">${type === 'success' ? '✓' : type === 'error' ? '✗' : 'ℹ'}</span>
                <span class="notification-message">${message}</span>
                <button class="notification-close" onclick="this.parentElement.parentElement.remove()">×</button>
            </div>
        `;
        
        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            z-index: 10000;
            background: ${type === 'success' ? '#28a745' : type === 'error' ? '#dc3545' : '#0d6efd'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            animation: slideInRight 0.3s ease;
            max-width: 400px;
            word-wrap: break-word;
        `;
        
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideInRight {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            .notification-content {
                display: flex;
                align-items: center;
                gap: 0.5rem;
            }
            .notification-close {
                background: none;
                border: none;
                color: white;
                font-size: 1.2rem;
                cursor: pointer;
                margin-left: auto;
                padding: 0;
                width: 20px;
                height: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .notification-close:hover {
                opacity: 0.8;
            }
        `;
        
        if (!document.querySelector('style[data-notification-styles]')) {
            style.setAttribute('data-notification-styles', 'true');
            document.head.appendChild(style);
        }
        
        document.body.appendChild(notification);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            if (notification.parentElement) {
                notification.style.animation = 'slideInRight 0.3s ease reverse';
                setTimeout(() => notification.remove(), 300);
            }
        }, 5000);
    }
    
    // Button Hover Effects
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = this.classList.contains('btn-primary') ? 'translateY(-2px)' : 'scale(1.02)';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
    
    // Card Hover Effects
    const cards = document.querySelectorAll('.about-card, .program-card, .news-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
    
    // Forum Poster Animation
    const forumPoster = document.querySelector('.forum-poster');
    if (forumPoster) {
        forumPoster.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05) rotateY(5deg)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        forumPoster.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    }
    
    // Scroll-triggered Animations
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.about-card, .program-card, .info-item, .table-item');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
                element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            }
        });
    };
    
    // Initial setup for scroll animations
    const setupScrollAnimations = () => {
        const elements = document.querySelectorAll('.about-card, .program-card, .info-item, .table-item');
        elements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
        });
    };
    
    setupScrollAnimations();
    window.addEventListener('scroll', animateOnScroll);
    
    // Initial call to set proper states
    animateOnScroll();
    
    // Logo Animation
    const logoCircles = document.querySelectorAll('.logo-circles .circle');
    if (logoCircles.length > 0) {
        setInterval(() => {
            logoCircles.forEach((circle, index) => {
                setTimeout(() => {
                    circle.style.transform = 'scale(1.1)';
                    circle.style.transition = 'transform 0.2s ease';
                    setTimeout(() => {
                        circle.style.transform = '';
                    }, 200);
                }, index * 100);
            });
        }, 3000);
    }
    
    // Dynamic Year Update
    const currentYear = new Date().getFullYear();
    const yearElements = document.querySelectorAll('.current-year');
    yearElements.forEach(element => {
        element.textContent = currentYear;
    });
    
    // Search Functionality (if needed)
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const searchableElements = document.querySelectorAll('.news-card, .table-item, .program-card');
            
            searchableElements.forEach(element => {
                const text = element.textContent.toLowerCase();
                if (text.includes(searchTerm)) {
                    element.style.display = '';
                    element.style.opacity = '1';
                } else {
                    element.style.display = 'none';
                }
            });
        });
    }
    
    // Countdown Timer (for forum dates)
    function createCountdown(targetDate, elementId) {
        const countdownElement = document.getElementById(elementId);
        if (!countdownElement) return;
        
        const countdown = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;
            
            if (distance < 0) {
                clearInterval(countdown);
                countdownElement.innerHTML = "¡El evento ha comenzado!";
                return;
            }
            
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            countdownElement.innerHTML = `
                <div class="countdown-container">
                    <div class="countdown-item">
                        <span class="countdown-number">${days}</span>
                        <span class="countdown-label">Días</span>
                    </div>
                    <div class="countdown-item">
                        <span class="countdown-number">${hours}</span>
                        <span class="countdown-label">Horas</span>
                    </div>
                    <div class="countdown-item">
                        <span class="countdown-number">${minutes}</span>
                        <span class="countdown-label">Minutos</span>
                    </div>
                    <div class="countdown-item">
                        <span class="countdown-number">${seconds}</span>
                        <span class="countdown-label">Segundos</span>
                    </div>
                </div>
            `;
        }, 1000);
    }
    
    // Initialize countdown for the forum (October 20, 2025)
    const forumDate = new Date("October 20, 2025 00:00:00").getTime();
    createCountdown(forumDate, "forum-countdown");
    
    // Copy to Clipboard Function
    function copyToClipboard(text) {
        navigator.clipboard.writeText(text).then(() => {
            showNotification('¡Copiado al portapapeles!', 'success');
        }).catch(() => {
            showNotification('Error al copiar al portapapeles', 'error');
        });
    }
    
    // Add copy functionality to email addresses
    const emailElements = document.querySelectorAll('.contact-item span');
    emailElements.forEach(element => {
        if (element.textContent.includes('@')) {
            element.style.cursor = 'pointer';
            element.title = 'Clic para copiar';
            element.addEventListener('click', () => {
                copyToClipboard(element.textContent);
            });
        }
    });
    
    // Modal Functionality (for gallery images or documents)
    function createModal(content, title = '') {
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-backdrop" onclick="this.parentElement.remove()"></div>
            <div class="modal-content">
                <div class="modal-header">
                    <h3>${title}</h3>
                    <button class="modal-close" onclick="this.closest('.modal').remove()">×</button>
                </div>
                <div class="modal-body">
                    ${content}
                </div>
            </div>
        `;
        
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 10000;
            display: flex;
            align-items: center;
            justify-content: center;
        `;
        
        const style = document.createElement('style');
        style.textContent = `
            .modal-backdrop {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.8);
                cursor: pointer;
            }
            .modal-content {
                position: relative;
                background: white;
                border-radius: 12px;
                max-width: 90vw;
                max-height: 90vh;
                overflow: auto;
                box-shadow: 0 8px 24px rgba(0,0,0,0.2);
            }
            .modal-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 1rem 1.5rem;
                border-bottom: 1px solid #e0e0e0;
            }
            .modal-body {
                padding: 1.5rem;
            }
            .modal-close {
                background: none;
                border: none;
                font-size: 1.5rem;
                cursor: pointer;
                color: #666;
                width: 30px;
                height: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .modal-close:hover {
                color: #000;
            }
        `;
        
        if (!document.querySelector('style[data-modal-styles]')) {
            style.setAttribute('data-modal-styles', 'true');
            document.head.appendChild(style);
        }
        
        document.body.appendChild(modal);
        
        // Prevent body scroll
        document.body.style.overflow = 'hidden';
        
        // Close modal on escape key
        const closeOnEscape = (e) => {
            if (e.key === 'Escape') {
                modal.remove();
                document.body.style.overflow = '';
                document.removeEventListener('keydown', closeOnEscape);
            }
        };
        document.addEventListener('keydown', closeOnEscape);
        
        // Restore body scroll when modal is removed
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'childList') {
                    mutation.removedNodes.forEach((node) => {
                        if (node === modal) {
                            document.body.style.overflow = '';
                            observer.disconnect();
                        }
                    });
                }
            });
        });
        observer.observe(document.body, { childList: true });
    }
    
    // Add click handlers for gallery items to open in modal
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach((item, index) => {
        item.style.cursor = 'pointer';
        item.addEventListener('click', () => {
            const title = item.querySelector('.gallery-placeholder')?.textContent || `Imagen ${index + 1}`;
            createModal(`
                <div style="text-align: center;">
                    <div style="width: 100%; height: 400px; background: linear-gradient(135deg, #dc3545 0%, #0d6efd 50%, #28a745 100%); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white; font-size: 1.5rem; font-weight: 600;">
                        ${title}
                    </div>
                    <p style="margin-top: 1rem; color: #666;">Esta imagen se cargará con contenido real del evento.</p>
                </div>
            `, title);
        });
    });
    
    // Initialize tooltips for important information
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    tooltipElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = this.getAttribute('data-tooltip');
            tooltip.style.cssText = `
                position: absolute;
                background: #333;
                color: white;
                padding: 0.5rem;
                border-radius: 4px;
                font-size: 0.8rem;
                white-space: nowrap;
                z-index: 1000;
                pointer-events: none;
            `;
            
            document.body.appendChild(tooltip);
            
            const rect = this.getBoundingClientRect();
            tooltip.style.left = (rect.left + rect.width / 2 - tooltip.offsetWidth / 2) + 'px';
            tooltip.style.top = (rect.top - tooltip.offsetHeight - 5) + 'px';
            
            this._tooltip = tooltip;
        });
        
        element.addEventListener('mouseleave', function() {
            if (this._tooltip) {
                this._tooltip.remove();
                this._tooltip = null;
            }
        });
    });
    
    // Performance optimization: Lazy loading for images
    const images = document.querySelectorAll('img[data-src]');
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for browsers that don't support IntersectionObserver
        images.forEach(img => {
            img.src = img.dataset.src;
        });
    }
    
    // Gallery Tab Functionality
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.gallery-tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');
            
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Show corresponding content
            const targetContent = document.getElementById(targetTab);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
    
    // Initialize Swiper for Gallery
    if (document.querySelector('.gallery-swiper') && typeof Swiper !== 'undefined') {
        const swiper = new Swiper('.gallery-swiper', {
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 40
                }
            }
        });
    }
    
    // Modal Functionality
    window.openModal = function(modalId) {
        createModal(modalId);
    };
    
    function createModal(modalId) {
        const modalContainer = document.getElementById('modal-container');
        let modalContent = '';
        
        switch(modalId) {
            case 'programa-modal':
                modalContent = createProgramModal();
                break;
            case 'ponentes-modal':
                modalContent = createSpeakersModal();
                break;
            case 'reglamento-modal':
                modalContent = createRegulationModal();
                break;
            case 'galeria-lodz-modal':
                modalContent = createLodzGalleryModal();
                break;
            case 'newsletter-modal':
                modalContent = createNewsletterModal();
                break;
            default:
                return;
        }
        
        modalContainer.innerHTML = modalContent;
        modalContainer.style.display = 'flex';
        modalContainer.style.position = 'fixed';
        modalContainer.style.top = '0';
        modalContainer.style.left = '0';
        modalContainer.style.width = '100%';
        modalContainer.style.height = '100%';
        modalContainer.style.zIndex = '9999';
        document.body.style.overflow = 'hidden';
        
        // Add close functionality
        const closeBtn = modalContainer.querySelector('.modal-close');
        
        if (closeBtn) {
            closeBtn.addEventListener('click', closeModal);
        }
        
        modalContainer.addEventListener('click', (e) => {
            if (e.target === modalContainer) {
                closeModal();
            }
        });
        
        // ESC key to close
        const escHandler = function(e) {
            if (e.key === 'Escape') {
                closeModal();
                document.removeEventListener('keydown', escHandler);
            }
        };
        document.addEventListener('keydown', escHandler);
    }
    
    function closeModal() {
        const modalContainer = document.getElementById('modal-container');
        modalContainer.style.display = 'none';
        modalContainer.innerHTML = '';
        document.body.style.overflow = '';
    }
    
    function createProgramModal() {
        return `
            <div class="modal-backdrop" style="position: fixed; inset: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; padding: 1rem;">
                <div class="modal" style="background: white; border-radius: 1.5rem; max-width: 64rem; max-height: 90vh; overflow-y: auto; width: 100%;">
                    <div class="modal-header" style="background: linear-gradient(135deg, #e53e3e 0%, #3182ce 30%, #38a169 70%, #9f7aea 100%); color: white; padding: 2rem; border-radius: 1.5rem 1.5rem 0 0;">
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <h2 style="font-size: 2rem; font-weight: bold; margin: 0;"><i class="fas fa-calendar"></i> Programa Detallado - Granada 2025</h2>
                            <button class="modal-close" style="background: none; border: none; color: white; font-size: 2rem; cursor: pointer;">&times;</button>
                        </div>
                    </div>
                    <div class="modal-body" style="padding: 2rem;">
                        <div class="program-days" style="display: flex; flex-direction: column; gap: 2rem;">
                            <div style="background: white; border: 1px solid #e2e8f0; border-left: 4px solid #e53e3e; border-radius: 0.75rem; padding: 1.5rem;">
                                <h3 style="font-size: 1.25rem; font-weight: bold; color: #e53e3e; margin-bottom: 1rem;"><i class="fas fa-star"></i> Lunes 20 de Octubre - Inauguración</h3>
                                <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                                    <div style="display: flex; gap: 1rem;">
                                        <span style="font-weight: bold; color: #e53e3e; min-width: 60px;">10:00</span>
                                        <span>Inauguración oficial - Palacio de Carlos V, Alhambra</span>
                                    </div>
                                    <div style="display: flex; gap: 1rem;">
                                        <span style="font-weight: bold; color: #e53e3e; min-width: 60px;">10:30</span>
                                        <span>Concierto del Conservatorio de Granada</span>
                                    </div>
                                    <div style="display: flex; gap: 1rem;">
                                        <span style="font-weight: bold; color: #e53e3e; min-width: 60px;">12:00</span>
                                        <span>Conferencia magistral: Federico Mayor Zaragoza</span>
                                    </div>
                                    <div style="display: flex; gap: 1rem;">
                                        <span style="font-weight: bold; color: #e53e3e; min-width: 60px;">17:00</span>
                                        <span>Conferencia: Francisco de Roux - "Verdad y Reconciliación"</span>
                                    </div>
                                    <div style="display: flex; gap: 1rem;">
                                        <span style="font-weight: bold; color: #e53e3e; min-width: 60px;">20:00</span>
                                        <span>Inauguración Exposición Abya Yala - Casa Max Moreau</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div style="background: white; border: 1px solid #e2e8f0; border-left: 4px solid #3182ce; border-radius: 0.75rem; padding: 1.5rem;">
                                <h3 style="font-size: 1.25rem; font-weight: bold; color: #3182ce; margin-bottom: 1rem;"><i class="fas fa-comments"></i> Martes 21 de Octubre - Paneles</h3>
                                <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                                    <div style="display: flex; gap: 1rem;">
                                        <span style="font-weight: bold; color: #3182ce; min-width: 60px;">09:00</span>
                                        <span>Panel 1: Memoria y Silencio</span>
                                    </div>
                                    <div style="display: flex; gap: 1rem;">
                                        <span style="font-weight: bold; color: #3182ce; min-width: 60px;">11:00</span>
                                        <span>Panel 2: Educación para la Paz</span>
                                    </div>
                                    <div style="display: flex; gap: 1rem;">
                                        <span style="font-weight: bold; color: #3182ce; min-width: 60px;">15:00</span>
                                        <span>Panel 3: Comunicación Transformadora</span>
                                    </div>
                                    <div style="display: flex; gap: 1rem;">
                                        <span style="font-weight: bold; color: #3182ce; min-width: 60px;">17:00</span>
                                        <span>Conferencia: Stefan Peters - "Construcción de Paz en Colombia"</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div style="text-align: center; margin-top: 2rem;">
                                <p style="color: #6b7280; margin-bottom: 1rem;">Y mucho más contenido durante los 6 días del foro...</p>
                                <button onclick="closeModal()" style="background: #e53e3e; color: white; border: none; padding: 0.75rem 1.5rem; border-radius: 0.75rem; cursor: pointer; font-weight: bold;">
                                    <i class="fas fa-times"></i> Cerrar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    
    function createSpeakersModal() {
        return `
            <div class="modal-backdrop" style="position: fixed; inset: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; padding: 1rem;">
                <div class="modal" style="background: white; border-radius: 1.5rem; max-width: 64rem; max-height: 90vh; overflow-y: auto; width: 100%;">
                    <div class="modal-header" style="background: linear-gradient(135deg, #e53e3e 0%, #3182ce 30%, #38a169 70%, #9f7aea 100%); color: white; padding: 2rem; border-radius: 1.5rem 1.5rem 0 0;">
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <h2 style="font-size: 2rem; font-weight: bold; margin: 0;"><i class="fas fa-users"></i> Ponentes Destacados</h2>
                            <button class="modal-close" style="background: none; border: none; color: white; font-size: 2rem; cursor: pointer;">&times;</button>
                        </div>
                    </div>
                    <div class="modal-body" style="padding: 2rem;">
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
                            <div style="background: white; border: 1px solid #e2e8f0; border-left: 4px solid #e53e3e; border-radius: 0.75rem; padding: 1.5rem; text-align: center;">
                                <div style="background: #e53e3e; color: white; border-radius: 50%; width: 4rem; height: 4rem; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem;">
                                    <i class="fas fa-user" style="font-size: 1.5rem;"></i>
                                </div>
                                <h3 style="font-size: 1.25rem; font-weight: bold; margin-bottom: 0.5rem;">Francisco de Roux</h3>
                                <p style="font-size: 0.875rem; color: #6b7280; margin-bottom: 0.75rem;">Expresidente Comisión de la Verdad - Colombia</p>
                                <p style="font-size: 0.875rem;">Jesuita, economista y teólogo. Lideró la Comisión para el Esclarecimiento de la Verdad, la Convivencia y la No Repetición en Colombia.</p>
                            </div>
                            
                            <div style="background: white; border: 1px solid #e2e8f0; border-left: 4px solid #3182ce; border-radius: 0.75rem; padding: 1.5rem; text-align: center;">
                                <div style="background: #3182ce; color: white; border-radius: 50%; width: 4rem; height: 4rem; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem;">
                                    <i class="fas fa-user" style="font-size: 1.5rem;"></i>
                                </div>
                                <h3 style="font-size: 1.25rem; font-weight: bold; margin-bottom: 0.5rem;">Jenny Pearce</h3>
                                <p style="font-size: 0.875rem; color: #6b7280; margin-bottom: 0.75rem;">London School of Economics</p>
                                <p style="font-size: 0.875rem;">Profesora emérita de Política Latinoamericana en LSE. Experta en construcción de paz, desarrollo y movimientos sociales en América Latina.</p>
                            </div>
                            
                            <div style="background: white; border: 1px solid #e2e8f0; border-left: 4px solid #38a169; border-radius: 0.75rem; padding: 1.5rem; text-align: center;">
                                <div style="background: #38a169; color: white; border-radius: 50%; width: 4rem; height: 4rem; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem;">
                                    <i class="fas fa-user" style="font-size: 1.5rem;"></i>
                                </div>
                                <h3 style="font-size: 1.25rem; font-weight: bold; margin-bottom: 0.5rem;">Ashok Swain</h3>
                                <p style="font-size: 0.875rem; color: #6b7280; margin-bottom: 0.75rem;">Universidad de Uppsala</p>
                                <p style="font-size: 0.875rem;">Profesor de Investigación para la Paz y Conflictos. Experto en conflictos ambientales, seguridad hídrica y cambio climático.</p>
                            </div>
                        </div>
                        
                        <div style="text-align: center; margin-top: 2rem;">
                            <p style="color: #6b7280; margin-bottom: 1rem;">Y muchos más académicos, activistas y líderes de la sociedad civil de todo el mundo.</p>
                            <button onclick="closeModal()" style="background: #3182ce; color: white; border: none; padding: 0.75rem 1.5rem; border-radius: 0.75rem; cursor: pointer; font-weight: bold;">
                                <i class="fas fa-times"></i> Cerrar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    
    function createRegulationModal() {
        return `
            <div class="modal-backdrop" style="position: fixed; inset: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; padding: 1rem;">
                <div class="modal" style="background: white; border-radius: 1.5rem; max-width: 48rem; max-height: 90vh; overflow-y: auto; width: 100%;">
                    <div class="modal-header" style="background: linear-gradient(135deg, #e53e3e 0%, #3182ce 30%, #38a169 70%, #9f7aea 100%); color: white; padding: 2rem; border-radius: 1.5rem 1.5rem 0 0;">
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <h2 style="font-size: 2rem; font-weight: bold; margin: 0;"><i class="fas fa-file-alt"></i> Reglamento del Simposio</h2>
                            <button class="modal-close" style="background: none; border: none; color: white; font-size: 2rem; cursor: pointer;">&times;</button>
                        </div>
                    </div>
                    <div class="modal-body" style="padding: 2rem;">
                        <div style="display: flex; flex-direction: column; gap: 2rem;">
                            <div>
                                <h3 style="font-size: 1.25rem; font-weight: bold; color: #9f7aea; margin-bottom: 0.75rem;">Objetivo</h3>
                                <p style="color: #374151;">El II Simposio Internacional de Investigación para la Paz tiene como objetivo crear un espacio académico para el intercambio de conocimientos, experiencias e investigaciones sobre construcción de paz, justicia social y noviolencia.</p>
                            </div>
                            
                            <div>
                                <h3 style="font-size: 1.25rem; font-weight: bold; color: #e53e3e; margin-bottom: 0.75rem;">Modalidad y Fechas</h3>
                                <ul style="list-style: disc; margin-left: 1.5rem; color: #374151;">
                                    <li><strong>Modalidad:</strong> 100% virtual</li>
                                    <li><strong>Fechas:</strong> 28-30 de octubre de 2025</li>
                                    <li><strong>Duración:</strong> 3 días académicos intensivos</li>
                                    <li><strong>Plataforma:</strong> Zoom y YouTube Live</li>
                                </ul>
                            </div>
                            
                            <div>
                                <h3 style="font-size: 1.25rem; font-weight: bold; color: #9f7aea; margin-bottom: 0.75rem;">Costos</h3>
                                <div style="background: #f7fafc; padding: 1rem; border-radius: 0.75rem;">
                                    <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                                        <span><strong>Ponentes:</strong></span>
                                        <span style="color: #9f7aea; font-weight: bold;">USD $40</span>
                                    </div>
                                    <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                                        <span>Asistentes:</span>
                                        <span>Gratuito</span>
                                    </div>
                                    <p style="font-size: 0.875rem; color: #6b7280; margin-top: 0.5rem;">Los fondos recaudados se destinan a becas para participantes de países en desarrollo.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div style="text-align: center; margin-top: 2rem;">
                            <button onclick="closeModal()" style="background: #9f7aea; color: white; border: none; padding: 0.75rem 1.5rem; border-radius: 0.75rem; cursor: pointer; font-weight: bold;">
                                <i class="fas fa-times"></i> Cerrar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    
    function createLodzGalleryModal() {
        return `
            <div class="modal-backdrop" style="position: fixed; inset: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; padding: 1rem;">
                <div class="modal" style="background: white; border-radius: 1.5rem; max-width: 64rem; max-height: 90vh; overflow-y: auto; width: 100%;">
                    <div class="modal-header" style="background: linear-gradient(135deg, #e53e3e 0%, #3182ce 30%, #38a169 70%, #9f7aea 100%); color: white; padding: 2rem; border-radius: 1.5rem 1.5rem 0 0;">
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <h2 style="font-size: 2rem; font-weight: bold; margin: 0;"><i class="fas fa-images"></i> I Foro de Paz - Łódź 2024</h2>
                            <button class="modal-close" style="background: none; border: none; color: white; font-size: 2rem; cursor: pointer;">&times;</button>
                        </div>
                    </div>
                    <div class="modal-body" style="padding: 2rem;">
                        <p style="text-align: center; color: #6b7280; margin-bottom: 2rem;">Galería de momentos destacados del primer Foro Internacional de Paz realizado en Łódź, Polonia.</p>
                        
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">
                            <div style="aspect-ratio: 16/9; border-radius: 0.75rem; overflow: hidden;">
                                <div style="width: 100%; height: 100%; background: #e53e3e; color: white; display: flex; align-items: center; justify-content: center; text-align: center; padding: 1rem;">
                                    <div>
                                        <i class="fas fa-microphone" style="font-size: 2rem; margin-bottom: 0.5rem;"></i>
                                        <p style="font-weight: bold; margin: 0.5rem 0;">Conferencia Inaugural</p>
                                        <p style="font-size: 0.875rem; opacity: 0.9; margin: 0;">Universidad de Łódź</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div style="aspect-ratio: 16/9; border-radius: 0.75rem; overflow: hidden;">
                                <div style="width: 100%; height: 100%; background: #3182ce; color: white; display: flex; align-items: center; justify-content: center; text-align: center; padding: 1rem;">
                                    <div>
                                        <i class="fas fa-users" style="font-size: 2rem; margin-bottom: 0.5rem;"></i>
                                        <p style="font-weight: bold; margin: 0.5rem 0;">Panel de Expertos</p>
                                        <p style="font-size: 0.875rem; opacity: 0.9; margin: 0;">Diálogo intercultural</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div style="aspect-ratio: 16/9; border-radius: 0.75rem; overflow: hidden;">
                                <div style="width: 100%; height: 100%; background: #38a169; color: white; display: flex; align-items: center; justify-content: center; text-align: center; padding: 1rem;">
                                    <div>
                                        <i class="fas fa-hands" style="font-size: 2rem; margin-bottom: 0.5rem;"></i>
                                        <p style="font-weight: bold; margin: 0.5rem 0;">Talleres Participativos</p>
                                        <p style="font-size: 0.875rem; opacity: 0.9; margin: 0;">Construcción colectiva</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div style="text-align: center; margin-top: 2rem;">
                            <button onclick="closeModal()" style="background: #38a169; color: white; border: none; padding: 0.75rem 1.5rem; border-radius: 0.75rem; cursor: pointer; font-weight: bold;">
                                <i class="fas fa-times"></i> Cerrar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    
    function createNewsletterModal() {
        return `
            <div class="modal-backdrop" style="position: fixed; inset: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; padding: 1rem;">
                <div class="modal" style="background: white; border-radius: 1.5rem; max-width: 28rem; width: 100%;">
                    <div class="modal-header" style="background: linear-gradient(135deg, #e53e3e 0%, #3182ce 30%, #38a169 70%, #9f7aea 100%); color: white; padding: 2rem; border-radius: 1.5rem 1.5rem 0 0;">
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <h2 style="font-size: 1.5rem; font-weight: bold; margin: 0;"><i class="fas fa-envelope"></i> Suscripción</h2>
                            <button class="modal-close" style="background: none; border: none; color: white; font-size: 2rem; cursor: pointer;">&times;</button>
                        </div>
                    </div>
                    <div class="modal-body" style="padding: 2rem;">
                        <p style="text-align: center; color: #6b7280; margin-bottom: 2rem;">Mantente informado sobre el III Foro Internacional de Paz y todas nuestras actividades.</p>
                        
                        <form style="display: flex; flex-direction: column; gap: 1rem;">
                            <div>
                                <label style="display: block; font-size: 0.875rem; font-weight: 600; color: #374151; margin-bottom: 0.5rem;">Correo electrónico</label>
                                <input type="email" style="width: 100%; padding: 0.75rem 1rem; border: 2px solid #e2e8f0; border-radius: 0.75rem; font-size: 1rem;" placeholder="tu@email.com" required>
                            </div>
                            
                            <button type="submit" style="background: #3182ce; color: white; border: none; padding: 0.75rem 1rem; border-radius: 0.75rem; cursor: pointer; font-weight: bold; width: 100%;">
                                <i class="fas fa-bell"></i> Suscribirse al Boletín
                            </button>
                        </form>
                        
                        <p style="font-size: 0.75rem; color: #6b7280; text-align: center; margin-top: 1rem;">
                            <i class="fas fa-shield-alt"></i> Respetamos tu privacidad. Puedes darte de baja en cualquier momento.
                        </p>
                    </div>
                </div>
            </div>
        `;
    }
    
    // Form Enhancements
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show success message (in a real implementation, this would submit to a server)
            const submitButton = form.querySelector('button[type="submit"]');
            const originalText = submitButton.innerHTML;
            
            submitButton.innerHTML = '<i class="fas fa-check"></i> ¡Enviado!';
            submitButton.style.background = '#38a169';
            submitButton.disabled = true;
            
            setTimeout(() => {
                submitButton.innerHTML = originalText;
                submitButton.style.background = '';
                submitButton.disabled = false;
                form.reset();
            }, 3000);
        });
    });
    
    console.log('🕊️ II Foro Internacional de la Paz - Granada 2025 - Sitio web cargado exitosamente');
});

// Utility Functions
const Utils = {
    // Debounce function for performance optimization
    debounce: function(func, wait, immediate) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                timeout = null;
                if (!immediate) func(...args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func(...args);
        };
    },
    
    // Throttle function for scroll events
    throttle: function(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },
    
    // Format date function
    formatDate: function(date, locale = 'es-ES') {
        return new Intl.DateTimeFormat(locale, {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }).format(new Date(date));
    }
};

// Export utilities for potential external use
window.ForumUtils = Utils;