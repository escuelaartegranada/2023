/**
 * Main JavaScript file for II Foro Internacional de Paz Granada 2025
 * Fundación Unamos Culturas
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize all components
    initializeNavigation();
    initializeScrollEffects();
    initializeAOS();
    initializeSwiper();
    initializeModals();
    initializeForms();
    initializeBackToTop();
    
    console.log('🕊️ II Foro Internacional de Paz Granada 2025 - Website loaded successfully');
});

/**
 * Navigation functionality
 */
function initializeNavigation() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Active navigation highlight
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const top = section.offsetTop;
            const bottom = top + section.offsetHeight;
            const id = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${id}"]`);
            
            if (scrollPos >= top && scrollPos <= bottom) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (navLink) navLink.classList.add('active');
            }
        });
    });
}

/**
 * Scroll effects and animations
 */
function initializeScrollEffects() {
    // Hero scroll indicator
    const scrollIndicator = document.querySelector('.hero-scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            const firstSection = document.querySelector('.news-highlights');
            if (firstSection) {
                firstSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
    
    // Parallax effect for hero background (optional)
    const heroBackground = document.querySelector('.hero-background');
    if (heroBackground) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            heroBackground.style.transform = `translateY(${rate}px)`;
        });
    }
}

/**
 * Initialize AOS (Animate On Scroll)
 */
function initializeAOS() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-out-cubic',
            once: true,
            offset: 100
        });
    }
}

/**
 * Initialize Swiper carousel
 */
function initializeSwiper() {
    if (typeof Swiper !== 'undefined') {
        const gallerySwiper = new Swiper('.gallery-swiper', {
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            autoplay: {
                delay: 5000,
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
                640: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                },
            }
        });
    }
}

/**
 * Modal functionality
 */
function initializeModals() {
    const modals = document.querySelectorAll('.modal');
    const modalCloses = document.querySelectorAll('.modal-close');
    
    // Close modal when clicking on close button
    modalCloses.forEach(close => {
        close.addEventListener('click', function() {
            const modal = this.closest('.modal');
            closeModal(modal);
        });
    });
    
    // Close modal when clicking outside
    modals.forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal(modal);
            }
        });
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const activeModal = document.querySelector('.modal.active');
            if (activeModal) {
                closeModal(activeModal);
            }
        }
    });
}

/**
 * Form handling
 */
function initializeForms() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(form);
            const formType = getFormType(form);
            
            // Show loading state
            const submitButton = form.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            submitButton.textContent = 'Enviando...';
            submitButton.disabled = true;
            
            // Simulate form submission (replace with actual API call)
            setTimeout(() => {
                handleFormSubmission(form, formType, formData);
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }, 2000);
        });
    });
}

/**
 * Back to top button
 */
function initializeBackToTop() {
    const backToTopButton = document.getElementById('backToTop');
    
    if (backToTopButton) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        });
        
        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

/**
 * Day program modal functionality
 */
window.openDayModal = function(day) {
    const modal = document.getElementById('dayModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    
    const dayPrograms = {
        lunes: {
            title: 'Lunes 20 de Octubre - Inauguración',
            content: `
                <div class="day-schedule">
                    <div class="schedule-item">
                        <div class="time">10:00</div>
                        <div class="activity">
                            <h4><i class="fas fa-play-circle"></i> Ceremonia de Inauguración</h4>
                            <p>Palacio de Carlos V - Alhambra</p>
                            <p>Bienvenida oficial y presentación del foro</p>
                        </div>
                    </div>
                    <div class="schedule-item">
                        <div class="time">10:30</div>
                        <div class="activity">
                            <h4><i class="fas fa-music"></i> Concierto Inaugural</h4>
                            <p>Conservatorio de Granada</p>
                            <p>Música para la paz y la reconciliación</p>
                        </div>
                    </div>
                    <div class="schedule-item">
                        <div class="time">12:00</div>
                        <div class="activity">
                            <h4><i class="fas fa-microphone"></i> Conferencia Magistral</h4>
                            <p><strong>Federico Mayor Zaragoza</strong> - Ex-Director UNESCO</p>
                            <p>"Cultura de Paz en el Siglo XXI"</p>
                        </div>
                    </div>
                    <div class="schedule-item">
                        <div class="time">17:00</div>
                        <div class="activity">
                            <h4><i class="fas fa-microphone"></i> Conferencia</h4>
                            <p><strong>Francisco de Roux</strong> - Ex-presidente CEV Colombia</p>
                            <p>"Verdad, Memoria y Construcción de Paz"</p>
                        </div>
                    </div>
                    <div class="schedule-item">
                        <div class="time">20:00</div>
                        <div class="activity">
                            <h4><i class="fas fa-palette"></i> Inauguración Exposición</h4>
                            <p>Exposición "Abya Yala - Arte Indígena Contemporáneo"</p>
                            <p>Casa Max Moreau</p>
                        </div>
                    </div>
                </div>
            `
        },
        martes: {
            title: 'Martes 21 de Octubre - Paneles Temáticos',
            content: `
                <div class="day-schedule">
                    <div class="schedule-item">
                        <div class="time">09:00</div>
                        <div class="activity">
                            <h4><i class="fas fa-comments"></i> Panel 1: Memoria y Silencio</h4>
                            <p>Moderador: Dr. Mario López Martínez</p>
                            <p>Análisis de los procesos de memoria histórica</p>
                        </div>
                    </div>
                    <div class="schedule-item">
                        <div class="time">11:00</div>
                        <div class="activity">
                            <h4><i class="fas fa-comments"></i> Panel 2: Educación para la Paz</h4>
                            <p>Metodologías transformadoras en contextos educativos</p>
                        </div>
                    </div>
                    <div class="schedule-item">
                        <div class="time">14:00</div>
                        <div class="activity">
                            <h4><i class="fas fa-comments"></i> Panel 3: Comunicación Transformadora</h4>
                            <p>Medios de comunicación y construcción de paz</p>
                        </div>
                    </div>
                    <div class="schedule-item">
                        <div class="time">17:00</div>
                        <div class="activity">
                            <h4><i class="fas fa-microphone"></i> Conferencia</h4>
                            <p><strong>Stefan Peters</strong> - Director CAPAZ</p>
                            <p>"Desafíos de la Construcción de Paz en Colombia"</p>
                        </div>
                    </div>
                </div>
            `
        },
        miercoles: {
            title: 'Miércoles 22 de Octubre - Género y Migraciones',
            content: `
                <div class="day-schedule">
                    <div class="schedule-item">
                        <div class="time">09:00</div>
                        <div class="activity">
                            <h4><i class="fas fa-venus"></i> Panel 5: Género, Mujeres y Paz</h4>
                            <p>Liderazgo femenino en procesos de paz</p>
                        </div>
                    </div>
                    <div class="schedule-item">
                        <div class="time">11:00</div>
                        <div class="activity">
                            <h4><i class="fas fa-globe"></i> Panel 6: Migraciones y Desplazamiento</h4>
                            <p>Perspectivas de derechos humanos y acogida</p>
                        </div>
                    </div>
                    <div class="schedule-item">
                        <div class="time">14:00</div>
                        <div class="activity">
                            <h4><i class="fas fa-shield-alt"></i> Panel 7: Seguridad Humana</h4>
                            <p>Nuevos paradigmas de seguridad</p>
                        </div>
                    </div>
                    <div class="schedule-item">
                        <div class="time">17:00</div>
                        <div class="activity">
                            <h4><i class="fas fa-users"></i> Seminario CAPAZ-DE</h4>
                            <p>Cooperación académica para la paz</p>
                        </div>
                    </div>
                </div>
            `
        },
        jueves: {
            title: 'Jueves 23 de Octubre - Ecología y Democracia',
            content: `
                <div class="day-schedule">
                    <div class="schedule-item">
                        <div class="time">09:00</div>
                        <div class="activity">
                            <h4><i class="fas fa-leaf"></i> Panel 9: Sabiduría Ecológica</h4>
                            <p>Conocimientos ancestrales y sostenibilidad</p>
                        </div>
                    </div>
                    <div class="schedule-item">
                        <div class="time">10:30</div>
                        <div class="activity">
                            <h4><i class="fas fa-microphone"></i> Conferencia</h4>
                            <p><strong>Jinfeng Zhou</strong> - Instituto Confucio</p>
                            <p>"Filosofía Oriental y Construcción de Paz"</p>
                        </div>
                    </div>
                    <div class="schedule-item">
                        <div class="time">14:00</div>
                        <div class="activity">
                            <h4><i class="fas fa-vote-yea"></i> Panel 10: Seguridad y Democracia</h4>
                            <p>Democracia participativa y cultura de paz</p>
                        </div>
                    </div>
                    <div class="schedule-item">
                        <div class="time">17:00</div>
                        <div class="activity">
                            <h4><i class="fas fa-microphone"></i> Conferencia</h4>
                            <p><strong>Ashok Swain</strong> - Universidad de Uppsala</p>
                            <p>"Conflictos Ambientales y Construcción de Paz"</p>
                        </div>
                    </div>
                </div>
            `
        },
        viernes: {
            title: 'Viernes 24 de Octubre - Reconciliación',
            content: `
                <div class="day-schedule">
                    <div class="schedule-item">
                        <div class="time">09:00</div>
                        <div class="activity">
                            <h4><i class="fas fa-globe"></i> Panel 11: Interculturalidad</h4>
                            <p>Diálogo intercultural y construcción de paz</p>
                        </div>
                    </div>
                    <div class="schedule-item">
                        <div class="time">11:00</div>
                        <div class="activity">
                            <h4><i class="fas fa-newspaper"></i> Panel 12: Periodismo de Paz</h4>
                            <p>Medios de comunicación transformadores</p>
                        </div>
                    </div>
                    <div class="schedule-item">
                        <div class="time">14:00</div>
                        <div class="activity">
                            <h4><i class="fas fa-handshake"></i> Panel 13: Reconciliación</h4>
                            <p>Procesos de perdón y sanación colectiva</p>
                        </div>
                    </div>
                    <div class="schedule-item">
                        <div class="time">18:45</div>
                        <div class="activity">
                            <h4><i class="fas fa-microphone"></i> Conferencia de Clausura</h4>
                            <p><strong>Jenny Pearce</strong> - Universidad de Bradford</p>
                            <p>"Paz Sostenible: Lecciones y Desafíos Globales"</p>
                        </div>
                    </div>
                </div>
            `
        },
        sabado: {
            title: 'Sábado 25 de Octubre - Clausura',
            content: `
                <div class="day-schedule">
                    <div class="schedule-item">
                        <div class="time">09:00</div>
                        <div class="activity">
                            <h4><i class="fas fa-camera"></i> Visita Cultural</h4>
                            <p>Recorrido por la Alhambra y el Generalife</p>
                            <p>Patrimonio de la Humanidad</p>
                        </div>
                    </div>
                    <div class="schedule-item">
                        <div class="time">10:30</div>
                        <div class="activity">
                            <h4><i class="fas fa-yin-yang"></i> Día de Confucio</h4>
                            <p>Celebración de la filosofía confuciana</p>
                            <p>Instituto Confucio de Granada</p>
                        </div>
                    </div>
                    <div class="schedule-item">
                        <div class="time">16:00</div>
                        <div class="activity">
                            <h4><i class="fas fa-scroll"></i> Lectura del Manifiesto Final</h4>
                            <p>Declaración de Granada por la Paz</p>
                        </div>
                    </div>
                    <div class="schedule-item">
                        <div class="time">18:45</div>
                        <div class="activity">
                            <h4><i class="fas fa-guitar"></i> Concierto-Taller de Clausura</h4>
                            <p><strong>Luis Guitarra</strong> - "Desaprender la Guerra"</p>
                            <p>Música como herramienta de sanación</p>
                        </div>
                    </div>
                </div>
            `
        }
    };
    
    const dayData = dayPrograms[day];
    if (dayData) {
        modalTitle.textContent = dayData.title;
        modalBody.innerHTML = dayData.content;
        openModal(modal);
    }
};

/**
 * Gallery modal functionality
 */
window.openGallery = function(galleryType) {
    const modal = document.getElementById('galleryModal');
    const modalTitle = document.getElementById('galleryModalTitle');
    const modalContent = document.getElementById('galleryModalContent');
    
    const galleries = {
        lodz: {
            title: 'I Foro Internacional de Paz - Łódź 2024',
            images: [
                { src: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', alt: 'Inauguración Łódź' },
                { src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', alt: 'Paneles académicos' },
                { src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', alt: 'Conferencias magistrales' },
                { src: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', alt: 'Actividades culturales' },
                { src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', alt: 'Encuentros interculturales' },
                { src: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', alt: 'Clausura musical' }
            ]
        },
        granada: {
            title: 'II Foro Internacional de Paz - Granada 2025 (Galería en Tiempo Real)',
            images: [
                { src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', alt: 'Palacio de Carlos V' },
                { src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', alt: 'Alhambra' },
                { src: 'https://images.unsplash.com/photo-1471906055617-4b0ec8b9046e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', alt: 'Arte indígena' },
                { src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', alt: 'Preparativos del foro' }
            ]
        }
    };
    
    const galleryData = galleries[galleryType];
    if (galleryData) {
        modalTitle.textContent = galleryData.title;
        
        let imagesHTML = '';
        galleryData.images.forEach(image => {
            imagesHTML += `
                <div class="gallery-modal-item">
                    <img src="${image.src}" alt="${image.alt}" loading="lazy">
                </div>
            `;
        });
        
        modalContent.innerHTML = imagesHTML;
        openModal(modal);
    }
};

/**
 * Collaboration form modals
 */
window.openVolunteerForm = function() {
    openCollaborationModal('volunteer', 'Formulario de Voluntariado');
};

window.openSponsorForm = function() {
    openCollaborationModal('sponsor', 'Formulario de Patrocinio');
};

window.openPartnerForm = function() {
    openCollaborationModal('partnership', 'Formulario de Convenio Interinstitucional');
};

function openCollaborationModal(type, title) {
    const modal = document.getElementById('formModal');
    const modalTitle = document.getElementById('formModalTitle');
    const modalBody = document.getElementById('formModalBody');
    
    modalTitle.textContent = title;
    
    const formHTML = `
        <form class="modal-form" data-form-type="${type}">
            <div class="form-group">
                <label for="${type}-name">Nombre completo *</label>
                <input type="text" id="${type}-name" name="name" required>
            </div>
            <div class="form-group">
                <label for="${type}-email">Correo electrónico *</label>
                <input type="email" id="${type}-email" name="email" required>
            </div>
            <div class="form-group">
                <label for="${type}-phone">Teléfono</label>
                <input type="tel" id="${type}-phone" name="phone">
            </div>
            <div class="form-group">
                <label for="${type}-organization">Organización / Empresa</label>
                <input type="text" id="${type}-organization" name="organization">
            </div>
            <div class="form-group">
                <label for="${type}-message">Mensaje *</label>
                <textarea id="${type}-message" name="message" rows="5" placeholder="Cuéntanos sobre tu interés en ${getCollaborationTypeText(type)}..." required></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Enviar Solicitud</button>
        </form>
    `;
    
    modalBody.innerHTML = formHTML;
    
    // Add form event listener
    const form = modalBody.querySelector('form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        handleModalFormSubmission(form, type);
    });
    
    openModal(modal);
}

function getCollaborationTypeText(type) {
    const types = {
        volunteer: 'el voluntariado',
        sponsor: 'el patrocinio',
        partnership: 'el convenio interinstitucional'
    };
    return types[type] || 'la colaboración';
}

/**
 * News subscription functionality
 */
window.subscribeToNews = function() {
    const modal = document.getElementById('formModal');
    const modalTitle = document.getElementById('formModalTitle');
    const modalBody = document.getElementById('formModalBody');
    
    modalTitle.textContent = 'Suscripción a Noticias';
    
    const formHTML = `
        <form class="modal-form" data-form-type="newsletter">
            <div class="form-group">
                <label for="news-name">Nombre completo *</label>
                <input type="text" id="news-name" name="name" required>
            </div>
            <div class="form-group">
                <label for="news-email">Correo electrónico *</label>
                <input type="email" id="news-email" name="email" required>
            </div>
            <div class="form-group">
                <label>Intereses (selecciona los que te interesen):</label>
                <div class="checkbox-group">
                    <label><input type="checkbox" name="interests" value="foros"> Foros Internacionales</label>
                    <label><input type="checkbox" name="interests" value="simposios"> Simposios de Investigación</label>
                    <label><input type="checkbox" name="interests" value="exposiciones"> Exposiciones Artísticas</label>
                    <label><input type="checkbox" name="interests" value="talleres"> Talleres y Actividades</label>
                </div>
            </div>
            <button type="submit" class="btn btn-primary">Suscribirse</button>
        </form>
    `;
    
    modalBody.innerHTML = formHTML;
    
    // Add form event listener
    const form = modalBody.querySelector('form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        handleModalFormSubmission(form, 'newsletter');
    });
    
    openModal(modal);
};

/**
 * Utility functions for modals
 */
function openModal(modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal(modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

/**
 * Form handling utilities
 */
function getFormType(form) {
    // Check for data attribute first
    if (form.hasAttribute('data-form-type')) {
        return form.getAttribute('data-form-type');
    }
    
    // Fallback to class names or other identifiers
    if (form.classList.contains('newsletter-form') || form.classList.contains('newsletter-sidebar-form')) {
        return 'newsletter';
    } else if (form.classList.contains('cooperation-form')) {
        return 'cooperation';
    } else if (form.classList.contains('contact-form') || form.closest('.contact-form')) {
        return 'contact';
    }
    
    return 'unknown';
}

function handleFormSubmission(form, formType, formData) {
    console.log(`Form submitted: ${formType}`, Object.fromEntries(formData));
    
    // Here you would typically send the data to your backend API
    // For now, we'll show a success message
    
    let message = '';
    switch (formType) {
        case 'newsletter':
            message = '¡Gracias por suscribirte! Recibirás nuestras noticias en tu correo.';
            break;
        case 'cooperation':
            message = '¡Gracias por tu propuesta de cooperación! Te contactaremos pronto.';
            break;
        case 'contact':
            message = '¡Mensaje enviado exitosamente! Te responderemos a la brevedad.';
            break;
        default:
            message = '¡Formulario enviado exitosamente!';
    }
    
    showNotification(message, 'success');
    form.reset();
}

function handleModalFormSubmission(form, formType) {
    const formData = new FormData(form);
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    submitButton.textContent = 'Enviando...';
    submitButton.disabled = true;
    
    setTimeout(() => {
        console.log(`Modal form submitted: ${formType}`, Object.fromEntries(formData));
        
        let message = '';
        switch (formType) {
            case 'volunteer':
                message = '¡Gracias por tu interés en el voluntariado! Te contactaremos pronto con más información.';
                break;
            case 'sponsor':
                message = '¡Gracias por tu interés en el patrocinio! Nuestro equipo se pondrá en contacto contigo.';
                break;
            case 'partnership':
                message = '¡Gracias por tu propuesta de convenio! Evaluaremos tu solicitud y te responderemos pronto.';
                break;
            case 'newsletter':
                message = '¡Suscripción exitosa! Recibirás noticias sobre el III Foro y futuros eventos.';
                break;
        }
        
        showNotification(message, 'success');
        
        // Close the modal
        const modal = form.closest('.modal');
        closeModal(modal);
        
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    }, 2000);
}

/**
 * Notification system
 */
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${getNotificationIcon(type)}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Add styles if not already present
    if (!document.querySelector('#notification-styles')) {
        const styles = document.createElement('style');
        styles.id = 'notification-styles';
        styles.textContent = `
            .notification {
                position: fixed;
                top: 100px;
                right: 20px;
                z-index: 10000;
                background: white;
                border-radius: 8px;
                box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
                padding: 16px;
                max-width: 400px;
                transform: translateX(100%);
                transition: transform 0.3s ease-out;
                border-left: 4px solid #e53e3e;
            }
            .notification.notification-success {
                border-left-color: #38a169;
            }
            .notification.notification-error {
                border-left-color: #e53e3e;
            }
            .notification.show {
                transform: translateX(0);
            }
            .notification-content {
                display: flex;
                align-items: center;
                gap: 12px;
            }
            .notification-content i {
                color: #e53e3e;
                font-size: 18px;
            }
            .notification-success .notification-content i {
                color: #38a169;
            }
            .notification-close {
                position: absolute;
                top: 8px;
                right: 8px;
                background: none;
                border: none;
                cursor: pointer;
                color: #a0aec0;
                padding: 4px;
            }
            .notification-close:hover {
                color: #2d3748;
            }
        `;
        document.head.appendChild(styles);
    }
    
    // Add to page
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // Close button functionality
    const closeButton = notification.querySelector('.notification-close');
    closeButton.addEventListener('click', () => {
        removeNotification(notification);
    });
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        removeNotification(notification);
    }, 5000);
}

function getNotificationIcon(type) {
    const icons = {
        success: 'check-circle',
        error: 'exclamation-circle',
        warning: 'exclamation-triangle',
        info: 'info-circle'
    };
    return icons[type] || 'info-circle';
}

function removeNotification(notification) {
    notification.classList.remove('show');
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 300);
}

/**
 * Color circle animations
 */
document.addEventListener('DOMContentLoaded', function() {
    const colorCircles = document.querySelectorAll('.color-circle');
    
    colorCircles.forEach(circle => {
        circle.addEventListener('mouseenter', function() {
            const tooltip = this.getAttribute('data-tooltip');
            if (tooltip) {
                showTooltip(this, tooltip);
            }
        });
        
        circle.addEventListener('mouseleave', function() {
            hideTooltip();
        });
    });
});

function showTooltip(element, text) {
    let tooltip = document.getElementById('color-tooltip');
    if (!tooltip) {
        tooltip = document.createElement('div');
        tooltip.id = 'color-tooltip';
        tooltip.style.cssText = `
            position: absolute;
            background: rgba(0, 0, 0, 0.8);
            color: white;
            padding: 8px 12px;
            border-radius: 6px;
            font-size: 14px;
            white-space: nowrap;
            z-index: 1000;
            pointer-events: none;
            opacity: 0;
            transition: opacity 0.3s ease;
        `;
        document.body.appendChild(tooltip);
    }
    
    tooltip.textContent = text;
    
    const rect = element.getBoundingClientRect();
    tooltip.style.left = rect.left + rect.width / 2 - tooltip.offsetWidth / 2 + 'px';
    tooltip.style.top = rect.bottom + 10 + 'px';
    tooltip.style.opacity = '1';
}

function hideTooltip() {
    const tooltip = document.getElementById('color-tooltip');
    if (tooltip) {
        tooltip.style.opacity = '0';
    }
}

/**
 * Additional UI enhancements
 */
document.addEventListener('DOMContentLoaded', function() {
    // Add loading animation to images
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        // Set initial opacity for fade-in effect
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
    });
    
    // Add click tracking for analytics (placeholder)
    const trackableElements = document.querySelectorAll('a[href^="#"], .btn, .news-link, .article-link');
    trackableElements.forEach(element => {
        element.addEventListener('click', function() {
            const action = this.textContent.trim() || this.getAttribute('aria-label') || 'Unknown';
            console.log('User interaction:', action);
            // Here you would send data to your analytics service
        });
    });
});

// Export functions for testing or external use
window.ForumApp = {
    openDayModal,
    openGallery,
    openVolunteerForm,
    openSponsorForm,
    openPartnerForm,
    subscribeToNews,
    showNotification
};