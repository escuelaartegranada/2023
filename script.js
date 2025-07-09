/**
 * II Foro Internacional de Paz Granada 2025
 * Interactive JavaScript functionality
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // ==========================================
    // DOM Elements
    // ==========================================
    const preloader = document.getElementById('preloader');
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const backToTop = document.getElementById('backToTop');
    const registrationForm = document.getElementById('registrationForm');
    const ponenciaSection = document.getElementById('ponenciaSection');
    
    // ==========================================
    // Preloader
    // ==========================================
    function hidePreloader() {
        setTimeout(() => {
            preloader.style.opacity = '0';
            preloader.style.visibility = 'hidden';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }, 1500);
    }
    
    // Hide preloader when page loads
    if (document.readyState === 'complete') {
        hidePreloader();
    } else {
        window.addEventListener('load', hidePreloader);
    }
    
    // ==========================================
    // Navigation Functionality
    // ==========================================
    
    // Mobile navigation toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Back to top button
        if (window.scrollY > 300) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });
    
    // Back to top functionality
    if (backToTop) {
        backToTop.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // ==========================================
    // Smooth Scrolling for Navigation Links
    // ==========================================
    const navLinksAll = document.querySelectorAll('a[href^="#"]');
    navLinksAll.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ==========================================
    // Registration Form Functionality
    // ==========================================
    
    // Show/hide ponencia section based on checkbox
    const participationCheckboxes = document.querySelectorAll('input[name="participation"]');
    participationCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const ponenciaCheckbox = document.querySelector('input[value="ponencia"]');
            if (ponenciaCheckbox && ponenciaCheckbox.checked) {
                ponenciaSection.style.display = 'block';
                // Make mesa tematica required
                const mesaTematica = document.getElementById('mesaTematica');
                if (mesaTematica) {
                    mesaTematica.required = true;
                }
            } else {
                ponenciaSection.style.display = 'none';
                // Remove required from mesa tematica
                const mesaTematica = document.getElementById('mesaTematica');
                if (mesaTematica) {
                    mesaTematica.required = false;
                }
            }
        });
    });
    
    // Form validation
    if (registrationForm) {
        registrationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (validateForm()) {
                submitForm();
            }
        });
    }
    
    function validateForm() {
        let isValid = true;
        const errors = [];
        
        // Required fields validation
        const requiredFields = [
            { id: 'firstName', name: 'Nombre' },
            { id: 'lastName', name: 'Apellidos' },
            { id: 'email', name: 'Correo Electrónico' },
            { id: 'country', name: 'País' },
            { id: 'city', name: 'Ciudad' },
            { id: 'profession', name: 'Profesión/Ocupación' },
            { id: 'motivacion', name: 'Motivación para participar' }
        ];
        
        requiredFields.forEach(field => {
            const element = document.getElementById(field.id);
            if (element && !element.value.trim()) {
                errors.push(`${field.name} es obligatorio`);
                element.style.borderColor = '#e74c3c';
                isValid = false;
            } else if (element) {
                element.style.borderColor = '';
            }
        });
        
        // Email validation
        const email = document.getElementById('email');
        if (email && email.value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email.value)) {
                errors.push('El formato del correo electrónico no es válido');
                email.style.borderColor = '#e74c3c';
                isValid = false;
            }
        }
        
        // Participation type validation
        const participationBoxes = document.querySelectorAll('input[name="participation"]:checked');
        if (participationBoxes.length === 0) {
            errors.push('Debe seleccionar al menos un tipo de participación');
            isValid = false;
        }
        
        // Privacy policy validation
        const privacyBox = document.querySelector('input[name="privacy"]');
        if (privacyBox && !privacyBox.checked) {
            errors.push('Debe aceptar la política de privacidad para continuar');
            isValid = false;
        }
        
        // Mesa temática validation if ponencia is selected
        const ponenciaCheckbox = document.querySelector('input[value="ponencia"]');
        const mesaTematica = document.getElementById('mesaTematica');
        if (ponenciaCheckbox && ponenciaCheckbox.checked && mesaTematica && !mesaTematica.value) {
            errors.push('Debe seleccionar una mesa temática para presentar ponencia');
            mesaTematica.style.borderColor = '#e74c3c';
            isValid = false;
        }
        
        // ORCID validation (if provided)
        const orcid = document.getElementById('orcid');
        if (orcid && orcid.value) {
            const orcidRegex = /^\d{4}-\d{4}-\d{4}-\d{3}[\dX]$/;
            if (!orcidRegex.test(orcid.value)) {
                errors.push('El formato ORCID no es válido (ejemplo: 0000-0000-0000-0000)');
                orcid.style.borderColor = '#e74c3c';
                isValid = false;
            }
        }
        
        // Show errors if any
        if (errors.length > 0) {
            showFormErrors(errors);
        }
        
        return isValid;
    }
    
    function showFormErrors(errors) {
        // Remove existing error messages
        const existingErrors = document.querySelectorAll('.form-error-message');
        existingErrors.forEach(error => error.remove());
        
        // Create error message container
        const errorContainer = document.createElement('div');
        errorContainer.className = 'form-error-message';
        errorContainer.style.cssText = `
            background: #fee;
            border: 1px solid #e74c3c;
            border-radius: 8px;
            padding: 1rem;
            margin-bottom: 1rem;
            color: #c0392b;
        `;
        
        const errorTitle = document.createElement('h4');
        errorTitle.textContent = 'Por favor corrija los siguientes errores:';
        errorTitle.style.cssText = 'margin: 0 0 0.5rem 0; color: #c0392b;';
        errorContainer.appendChild(errorTitle);
        
        const errorList = document.createElement('ul');
        errorList.style.cssText = 'margin: 0; padding-left: 1.5rem;';
        
        errors.forEach(error => {
            const errorItem = document.createElement('li');
            errorItem.textContent = error;
            errorItem.style.cssText = 'margin-bottom: 0.25rem;';
            errorList.appendChild(errorItem);
        });
        
        errorContainer.appendChild(errorList);
        
        // Insert error container at the top of the form
        const formTitle = registrationForm.querySelector('h3');
        formTitle.parentNode.insertBefore(errorContainer, formTitle.nextSibling);
        
        // Scroll to error message
        errorContainer.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center' 
        });
    }
    
    function submitForm() {
        // Show loading state
        const submitButton = registrationForm.querySelector('button[type="submit"]');
        const originalText = submitButton.innerHTML;
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
        submitButton.disabled = true;
        
        // Simulate form submission (replace with actual submission logic)
        setTimeout(() => {
            // Collect form data
            const formData = new FormData(registrationForm);
            const formObject = {};
            
            // Convert FormData to object
            for (let [key, value] of formData.entries()) {
                if (formObject[key]) {
                    // Handle multiple values (like checkboxes)
                    if (Array.isArray(formObject[key])) {
                        formObject[key].push(value);
                    } else {
                        formObject[key] = [formObject[key], value];
                    }
                } else {
                    formObject[key] = value;
                }
            }
            
            // Handle checkboxes that weren't checked
            const checkboxes = registrationForm.querySelectorAll('input[type="checkbox"]');
            checkboxes.forEach(checkbox => {
                if (!checkbox.checked && !formObject[checkbox.name]) {
                    formObject[checkbox.name] = false;
                }
            });
            
            console.log('Form Data:', formObject);
            
            // Show success message
            showSuccessMessage();
            
            // Reset button
            submitButton.innerHTML = originalText;
            submitButton.disabled = false;
            
        }, 2000);
    }
    
    function showSuccessMessage() {
        // Remove existing messages
        const existingMessages = document.querySelectorAll('.form-success-message, .form-error-message');
        existingMessages.forEach(msg => msg.remove());
        
        // Create success message
        const successContainer = document.createElement('div');
        successContainer.className = 'form-success-message';
        successContainer.style.cssText = `
            background: #e8f5e8;
            border: 1px solid #27ae60;
            border-radius: 8px;
            padding: 1.5rem;
            margin-bottom: 1rem;
            color: #27ae60;
            text-align: center;
        `;
        
        successContainer.innerHTML = `
            <i class="fas fa-check-circle" style="font-size: 2rem; margin-bottom: 0.5rem; display: block;"></i>
            <h4 style="margin: 0 0 0.5rem 0; color: #27ae60;">¡Inscripción Enviada Exitosamente!</h4>
            <p style="margin: 0;">Gracias por tu interés en el II Foro Internacional de Paz Granada 2025. Recibirás un correo de confirmación pronto.</p>
        `;
        
        // Insert at the top of the form
        const formTitle = registrationForm.querySelector('h3');
        formTitle.parentNode.insertBefore(successContainer, formTitle.nextSibling);
        
        // Scroll to success message
        successContainer.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center' 
        });
        
        // Reset form after showing success
        setTimeout(() => {
            registrationForm.reset();
            ponenciaSection.style.display = 'none';
            // Reset border colors
            const inputs = registrationForm.querySelectorAll('input, select, textarea');
            inputs.forEach(input => {
                input.style.borderColor = '';
            });
        }, 3000);
    }
    
    // ==========================================
    // Dynamic Form Interactions
    // ==========================================
    
    // Auto-format ORCID input
    const orcidInput = document.getElementById('orcid');
    if (orcidInput) {
        orcidInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/[^\dX]/g, ''); // Remove non-digits and non-X
            if (value.length > 0) {
                // Format as 0000-0000-0000-0000
                value = value.match(/.{1,4}/g).join('-').substr(0, 19);
            }
            e.target.value = value;
        });
    }
    
    // Phone number formatting
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            // Remove non-numeric characters except + and spaces
            let value = e.target.value.replace(/[^\d\+\s\-\(\)]/g, '');
            e.target.value = value;
        });
    }
    
    // ==========================================
    // Scroll Animations (Intersection Observer)
    // ==========================================
    
    function createScrollObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'slideUp 0.6s ease-out forwards';
                    entry.target.style.opacity = '1';
                }
            });
        }, observerOptions);
        
        // Observe elements that should animate on scroll
        const animatedElements = document.querySelectorAll('.about-card, .timeline-item, .info-card, .table-card, .activity-card, .contact-card');
        animatedElements.forEach(element => {
            element.style.opacity = '0';
            observer.observe(element);
        });
    }
    
    // Initialize scroll animations
    createScrollObserver();
    
    // ==========================================
    // Additional Interactive Features
    // ==========================================
    
    // Tooltip functionality for form labels
    function addTooltips() {
        const tooltipElements = [
            { id: 'orcid', tooltip: 'ORCID es un identificador único para investigadores. Formato: 0000-0000-0000-0000' },
            { id: 'institution', tooltip: 'Universidad, empresa, ONG u organización donde trabajas o estudias' }
        ];
        
        tooltipElements.forEach(item => {
            const element = document.getElementById(item.id);
            if (element) {
                const label = element.previousElementSibling;
                if (label && label.tagName === 'LABEL') {
                    label.style.position = 'relative';
                    label.innerHTML += ' <i class="fas fa-info-circle" style="color: #3498db; cursor: help;" title="' + item.tooltip + '"></i>';
                }
            }
        });
    }
    
    addTooltips();
    
    // Copy email functionality
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    emailLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const email = this.textContent;
            
            if (navigator.clipboard && window.isSecureContext) {
                navigator.clipboard.writeText(email).then(() => {
                    showCopyNotification('Correo copiado al portapapeles');
                });
            } else {
                // Fallback for older browsers
                const textArea = document.createElement('textarea');
                textArea.value = email;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                showCopyNotification('Correo copiado al portapapeles');
            }
            
            // Also open default email client
            window.location.href = this.href;
        });
    });
    
    function showCopyNotification(message) {
        const notification = document.createElement('div');
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #27ae60;
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            z-index: 10000;
            font-weight: 500;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
            transform: translateX(100%);
            transition: transform 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }
    
    // ==========================================
    // Keyboard Navigation Support
    // ==========================================
    
    // Enhanced keyboard navigation for custom checkboxes
    const checkboxLabels = document.querySelectorAll('.checkbox-label');
    checkboxLabels.forEach(label => {
        label.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const checkbox = this.querySelector('input[type="checkbox"]');
                if (checkbox) {
                    checkbox.checked = !checkbox.checked;
                    checkbox.dispatchEvent(new Event('change'));
                }
            }
        });
        
        // Make labels focusable
        label.setAttribute('tabindex', '0');
    });
    
    // ==========================================
    // Print Functionality
    // ==========================================
    
    // Add print button functionality if needed
    function addPrintButton() {
        const printButton = document.createElement('button');
        printButton.innerHTML = '<i class="fas fa-print"></i> Imprimir Información';
        printButton.className = 'btn btn-secondary';
        printButton.style.cssText = 'position: fixed; bottom: 20px; left: 20px; z-index: 1000; display: none;';
        
        printButton.addEventListener('click', function() {
            window.print();
        });
        
        document.body.appendChild(printButton);
        
        // Show print button on desktop
        if (window.innerWidth > 768) {
            printButton.style.display = 'inline-flex';
        }
    }
    
    // Uncomment if print functionality is needed
    // addPrintButton();
    
    // ==========================================
    // Error Handling
    // ==========================================
    
    window.addEventListener('error', function(e) {
        console.error('Error en la página:', e.error);
        // Could implement user-friendly error reporting here
    });
    
    // ==========================================
    // Performance Monitoring
    // ==========================================
    
    // Monitor page performance
    window.addEventListener('load', function() {
        if ('performance' in window) {
            const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
            console.log('Tiempo de carga de la página:', loadTime + 'ms');
        }
    });
    
    console.log('🕊️ II Foro Internacional de Paz Granada 2025 - JavaScript cargado exitosamente');
});

// ==========================================
// Service Worker Registration (Optional)
// ==========================================

// Uncomment to enable offline functionality
/*
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('ServiceWorker registration successful');
            })
            .catch(function(err) {
                console.log('ServiceWorker registration failed');
            });
    });
}
*/