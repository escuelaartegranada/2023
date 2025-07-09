// Navegación y Menú Móvil
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.querySelector('.navbar');

    // Toggle menú móvil
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Cerrar menú al hacer click en un enlace
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Efecto de transparencia en navbar al hacer scroll
    let lastScrollTop = 0;
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.backdropFilter = 'blur(15px)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        }

        lastScrollTop = scrollTop;
    });

    // Smooth scrolling mejorado
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Resaltar enlace activo en navegación
    function highlightActiveSection() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', highlightActiveSection);

    // Animaciones al hacer scroll (Intersection Observer)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // Observar elementos para animaciones
    const elementsToAnimate = document.querySelectorAll(
        '.program-highlight, .speaker-card, .table-item, .activity-item, .contact-item, .cfp-section'
    );
    
    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });

    // Efecto de contador para fechas importantes
    function animateCounters() {
        const counters = document.querySelectorAll('.counter');
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            const count = +counter.innerText;
            const increment = target / 200;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(() => animateCounters(), 1);
            } else {
                counter.innerText = target;
            }
        });
    }

    // Efecto parallax suave en hero
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('.hero');
        const speed = scrolled * 0.5;
        
        if (parallax) {
            parallax.style.transform = `translateY(${speed}px)`;
        }
    });

    // Tooltip mejorado para información adicional
    function createTooltip(element, text) {
        const tooltip = document.createElement('div');
        tooltip.className = 'custom-tooltip';
        tooltip.textContent = text;
        document.body.appendChild(tooltip);

        element.addEventListener('mouseenter', function(e) {
            tooltip.style.display = 'block';
            tooltip.style.left = e.pageX + 10 + 'px';
            tooltip.style.top = e.pageY + 10 + 'px';
        });

        element.addEventListener('mousemove', function(e) {
            tooltip.style.left = e.pageX + 10 + 'px';
            tooltip.style.top = e.pageY + 10 + 'px';
        });

        element.addEventListener('mouseleave', function() {
            tooltip.style.display = 'none';
        });
    }

    // Agregar tooltips a elementos específicos
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    tooltipElements.forEach(element => {
        const tooltipText = element.getAttribute('data-tooltip');
        createTooltip(element, tooltipText);
    });

    // Búsqueda rápida en la página
    function createSearchFeature() {
        const searchContainer = document.createElement('div');
        searchContainer.className = 'search-container';
        searchContainer.innerHTML = `
            <input type="text" id="page-search" placeholder="Buscar en la página..." class="search-input">
            <button class="search-btn"><i class="fas fa-search"></i></button>
        `;

        // Agregar estilos para la búsqueda
        const searchStyles = `
            .search-container {
                position: fixed;
                top: 50%;
                right: -300px;
                transform: translateY(-50%);
                background: var(--white);
                padding: 1rem;
                border-radius: var(--border-radius);
                box-shadow: var(--shadow-medium);
                transition: right 0.3s ease;
                z-index: 1001;
                display: flex;
                gap: 0.5rem;
            }

            .search-container.active {
                right: 20px;
            }

            .search-input {
                padding: 0.5rem;
                border: 1px solid var(--text-light);
                border-radius: 4px;
                outline: none;
                width: 200px;
            }

            .search-btn {
                background: var(--primary-color);
                color: var(--white);
                border: none;
                padding: 0.5rem 1rem;
                border-radius: 4px;
                cursor: pointer;
            }

            .search-toggle {
                position: fixed;
                top: 50%;
                right: 20px;
                transform: translateY(-50%);
                background: var(--accent-color);
                color: var(--text-dark);
                border: none;
                padding: 1rem;
                border-radius: 50%;
                cursor: pointer;
                box-shadow: var(--shadow-medium);
                z-index: 1000;
            }

            .custom-tooltip {
                position: absolute;
                background: var(--text-dark);
                color: var(--white);
                padding: 0.5rem;
                border-radius: 4px;
                font-size: 0.9rem;
                z-index: 1002;
                display: none;
                pointer-events: none;
            }

            .fade-in {
                animation: fadeInUp 0.6s ease forwards;
            }
        `;

        const styleSheet = document.createElement('style');
        styleSheet.textContent = searchStyles;
        document.head.appendChild(styleSheet);

        // Botón toggle para mostrar/ocultar búsqueda
        const searchToggle = document.createElement('button');
        searchToggle.className = 'search-toggle';
        searchToggle.innerHTML = '<i class="fas fa-search"></i>';
        
        document.body.appendChild(searchToggle);
        document.body.appendChild(searchContainer);

        searchToggle.addEventListener('click', function() {
            searchContainer.classList.toggle('active');
            if (searchContainer.classList.contains('active')) {
                document.getElementById('page-search').focus();
            }
        });

        // Funcionalidad de búsqueda
        const searchInput = document.getElementById('page-search');
        const searchBtn = document.querySelector('.search-btn');

        function performSearch() {
            const searchTerm = searchInput.value.toLowerCase().trim();
            if (searchTerm === '') return;

            const content = document.body.innerText.toLowerCase();
            if (content.includes(searchTerm)) {
                // Encontrar y resaltar el primer resultado
                const elements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, li');
                for (let element of elements) {
                    if (element.innerText.toLowerCase().includes(searchTerm)) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        element.style.backgroundColor = 'yellow';
                        setTimeout(() => {
                            element.style.backgroundColor = '';
                        }, 3000);
                        break;
                    }
                }
            }
        }

        searchBtn.addEventListener('click', performSearch);
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }

    // Inicializar búsqueda
    createSearchFeature();

    // Preloader simple
    function createPreloader() {
        const preloader = document.createElement('div');
        preloader.id = 'preloader';
        preloader.innerHTML = `
            <div class="preloader-content">
                <div class="spinner"></div>
                <p>Cargando Foro de Paz Granada 2025...</p>
            </div>
        `;

        const preloaderStyles = `
            #preloader {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: var(--primary-color);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 9999;
                transition: opacity 0.5s ease;
            }

            .preloader-content {
                text-align: center;
                color: var(--white);
            }

            .spinner {
                width: 50px;
                height: 50px;
                border: 3px solid rgba(255,255,255,0.3);
                border-radius: 50%;
                border-top-color: var(--accent-color);
                animation: spin 1s ease-in-out infinite;
                margin: 0 auto 1rem;
            }

            @keyframes spin {
                to { transform: rotate(360deg); }
            }
        `;

        const preloaderStyleSheet = document.createElement('style');
        preloaderStyleSheet.textContent = preloaderStyles;
        document.head.appendChild(preloaderStyleSheet);

        document.body.insertBefore(preloader, document.body.firstChild);

        // Remover preloader después de que la página cargue
        window.addEventListener('load', function() {
            setTimeout(() => {
                preloader.style.opacity = '0';
                setTimeout(() => {
                    preloader.remove();
                }, 500);
            }, 1000);
        });
    }

    // Solo mostrar preloader si la página no está en caché
    if (document.readyState === 'loading') {
        createPreloader();
    }

    // Función para copiar enlace de sección
    function addCopyLinkFeature() {
        const sectionHeaders = document.querySelectorAll('h2[id], h3[id]');
        
        sectionHeaders.forEach(header => {
            header.style.position = 'relative';
            header.style.cursor = 'pointer';
            
            header.addEventListener('click', function() {
                const url = window.location.origin + window.location.pathname + '#' + this.id;
                navigator.clipboard.writeText(url).then(() => {
                    // Mostrar confirmación visual
                    const toast = document.createElement('div');
                    toast.textContent = '¡Enlace copiado!';
                    toast.style.cssText = `
                        position: fixed;
                        top: 20px;
                        right: 20px;
                        background: var(--accent-color);
                        color: var(--text-dark);
                        padding: 1rem;
                        border-radius: var(--border-radius);
                        z-index: 1003;
                        animation: slideIn 0.3s ease;
                    `;
                    
                    document.body.appendChild(toast);
                    setTimeout(() => toast.remove(), 2000);
                });
            });
        });

        // Agregar estilos para slideIn
        const slideInStyles = `
            @keyframes slideIn {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
        `;
        
        const slideInStyleSheet = document.createElement('style');
        slideInStyleSheet.textContent = slideInStyles;
        document.head.appendChild(slideInStyleSheet);
    }

    // Inicializar función de copiar enlaces
    addCopyLinkFeature();

    // Botón de volver arriba
    function createBackToTopButton() {
        const backToTop = document.createElement('button');
        backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
        backToTop.className = 'back-to-top';
        backToTop.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: var(--accent-color);
            color: var(--text-dark);
            border: none;
            padding: 1rem;
            border-radius: 50%;
            cursor: pointer;
            font-size: 1.2rem;
            box-shadow: var(--shadow-medium);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 1000;
        `;

        document.body.appendChild(backToTop);

        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTop.style.opacity = '1';
                backToTop.style.visibility = 'visible';
            } else {
                backToTop.style.opacity = '0';
                backToTop.style.visibility = 'hidden';
            }
        });

        backToTop.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Inicializar botón de volver arriba
    createBackToTopButton();

    // Inicializar animaciones después de que todo esté cargado
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
});

// Función para manejar errores de carga de imágenes
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            this.style.display = 'none';
        });
    });
});

// Optimización de rendimiento - Lazy loading para elementos pesados
if ('IntersectionObserver' in window) {
    const lazyElements = document.querySelectorAll('.lazy-load');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy-load');
                imageObserver.unobserve(img);
            }
        });
    });

    lazyElements.forEach(img => imageObserver.observe(img));
}