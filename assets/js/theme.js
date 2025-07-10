/**
 * Theme JavaScript functionality
 * II Foro Internacional de Paz Granada 2025 WordPress Theme
 */

(function($) {
    'use strict';

    // Wait for DOM to be ready
    $(document).ready(function() {
        
        // ==========================================
        // Preloader
        // ==========================================
        function hidePreloader() {
            const preloader = $('#preloader');
            if (preloader.length) {
                preloader.fadeOut(500, function() {
                    $(this).remove();
                });
            }
        }

        // Hide preloader when page is loaded
        $(window).on('load', function() {
            setTimeout(hidePreloader, 1000);
        });

        // Fallback: hide preloader after 3 seconds if load event doesn't fire
        setTimeout(hidePreloader, 3000);

        // ==========================================
        // Navigation
        // ==========================================
        const navbar = $('#navbar');
        const navToggle = $('#nav-toggle');
        const navMenu = $('#nav-menu');

        // Navbar scroll effect
        $(window).on('scroll', function() {
            if ($(window).scrollTop() > 50) {
                navbar.addClass('scrolled');
            } else {
                navbar.removeClass('scrolled');
            }
        });

        // Mobile navigation toggle
        navToggle.on('click', function() {
            $(this).toggleClass('active');
            navMenu.toggleClass('active');
        });

        // Close mobile menu when clicking on a link
        navMenu.find('a').on('click', function() {
            navToggle.removeClass('active');
            navMenu.removeClass('active');
        });

        // Close mobile menu when clicking outside
        $(document).on('click', function(e) {
            if (!$(e.target).closest('#navbar').length) {
                navToggle.removeClass('active');
                navMenu.removeClass('active');
            }
        });

        // ==========================================
        // Smooth Scrolling for anchor links
        // ==========================================
        $('a[href^="#"]').on('click', function(e) {
            const target = $(this.getAttribute('href'));
            
            if (target.length) {
                e.preventDefault();
                
                const offsetTop = target.offset().top - (navbar.outerHeight() || 0);
                
                $('html, body').animate({
                    scrollTop: offsetTop
                }, 800);
            }
        });

        // ==========================================
        // Back to Top Button
        // ==========================================
        const backToTop = $('#backToTop');
        
        if (backToTop.length) {
            $(window).on('scroll', function() {
                if ($(window).scrollTop() > 300) {
                    backToTop.fadeIn();
                } else {
                    backToTop.fadeOut();
                }
            });

            backToTop.on('click', function() {
                $('html, body').animate({
                    scrollTop: 0
                }, 800);
            });
        }

        // ==========================================
        // Animation on Scroll
        // ==========================================
        function animateOnScroll() {
            $('.about-card, .timeline-item, .info-card, .contact-card').each(function() {
                const element = $(this);
                const elementTop = element.offset().top;
                const windowBottom = $(window).scrollTop() + $(window).height();
                
                if (elementTop < windowBottom - 100) {
                    element.addClass('animate-in');
                }
            });
        }

        // Run animation check on scroll and load
        $(window).on('scroll load', animateOnScroll);

        // ==========================================
        // Registration Form Handler
        // ==========================================
        const registrationForm = $('#registrationForm');
        const ponenciaSection = $('#ponenciaSection');
        
        if (registrationForm.length) {
            // Show/hide ponencia section based on checkbox
            const ponenciaCheckbox = $('input[name="participation[]"][value="ponencia"]');
            
            ponenciaCheckbox.on('change', function() {
                if ($(this).is(':checked')) {
                    ponenciaSection.slideDown();
                } else {
                    ponenciaSection.slideUp();
                    // Clear ponencia fields when hidden
                    ponenciaSection.find('input, select').val('');
                }
            });

            // Form validation and submission
            registrationForm.on('submit', function(e) {
                e.preventDefault();
                
                const form = $(this);
                const submitBtn = form.find('button[type="submit"]');
                const originalText = submitBtn.html();
                
                // Client-side validation
                let isValid = true;
                const requiredFields = form.find('input[required], select[required], textarea[required]');
                
                requiredFields.each(function() {
                    const field = $(this);
                    const value = field.val().trim();
                    
                    if (!value) {
                        field.addClass('error');
                        isValid = false;
                    } else {
                        field.removeClass('error');
                    }
                });

                // Validate email
                const email = form.find('#email');
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (email.val() && !emailPattern.test(email.val())) {
                    email.addClass('error');
                    isValid = false;
                }

                // Validate participation checkboxes
                const participationChecked = form.find('input[name="participation[]"]:checked').length;
                if (participationChecked === 0) {
                    showMessage('Debe seleccionar al menos un tipo de participación', 'error');
                    isValid = false;
                }

                // Validate privacy checkbox
                const privacyCheckbox = form.find('input[name="privacy"]');
                if (!privacyCheckbox.is(':checked')) {
                    privacyCheckbox.closest('.checkbox-label').addClass('error');
                    isValid = false;
                } else {
                    privacyCheckbox.closest('.checkbox-label').removeClass('error');
                }

                if (!isValid) {
                    showMessage('Por favor, complete todos los campos obligatorios', 'error');
                    return;
                }

                // Show loading state
                submitBtn.prop('disabled', true).html('<i class="fas fa-spinner fa-spin"></i> Enviando...');

                // Prepare form data
                const formData = new FormData(this);
                
                // Add WordPress nonce
                formData.append('action', 'fpg_handle_registration');

                // Submit via AJAX
                $.ajax({
                    url: fpg_ajax.ajax_url,
                    type: 'POST',
                    data: formData,
                    processData: false,
                    contentType: false,
                    success: function(response) {
                        if (response.success) {
                            showMessage(response.data, 'success');
                            form[0].reset();
                            ponenciaSection.hide();
                        } else {
                            showMessage(response.data || 'Error al enviar el formulario', 'error');
                        }
                    },
                    error: function() {
                        showMessage('Error de conexión. Inténtalo de nuevo.', 'error');
                    },
                    complete: function() {
                        submitBtn.prop('disabled', false).html(originalText);
                    }
                });
            });

            // Real-time validation
            registrationForm.find('input, select, textarea').on('blur', function() {
                const field = $(this);
                
                if (field.prop('required') && !field.val().trim()) {
                    field.addClass('error');
                } else {
                    field.removeClass('error');
                }
            });
        }

        // ==========================================
        // Contact Form Handler (if exists)
        // ==========================================
        const contactForm = $('#contactForm');
        
        if (contactForm.length) {
            contactForm.on('submit', function(e) {
                e.preventDefault();
                
                const form = $(this);
                const submitBtn = form.find('button[type="submit"]');
                const originalText = submitBtn.html();
                
                // Show loading state
                submitBtn.prop('disabled', true).html('<i class="fas fa-spinner fa-spin"></i> ' + fpg_ajax.loading_text);
                
                // Submit via AJAX
                $.post(fpg_ajax.ajax_url, {
                    action: 'fpg_contact_form',
                    nonce: fpg_ajax.nonce,
                    name: form.find('[name="name"]').val(),
                    email: form.find('[name="email"]').val(),
                    message: form.find('[name="message"]').val()
                })
                .done(function(response) {
                    if (response.success) {
                        showMessage(fpg_ajax.success_text, 'success');
                        form[0].reset();
                    } else {
                        showMessage(response.data || fpg_ajax.error_text, 'error');
                    }
                })
                .fail(function() {
                    showMessage(fpg_ajax.error_text, 'error');
                })
                .always(function() {
                    submitBtn.prop('disabled', false).html(originalText);
                });
            });
        }

        // ==========================================
        // Message Display Function
        // ==========================================
        function showMessage(message, type = 'info') {
            // Remove existing messages
            $('.form-message').remove();
            
            const messageHtml = `
                <div class="form-message form-message-${type}">
                    <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
                    <span>${message}</span>
                    <button type="button" class="close-message">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            `;
            
            // Add message to the top of the form or body
            const targetForm = registrationForm.length ? registrationForm : contactForm.length ? contactForm : $('body');
            targetForm.prepend(messageHtml);
            
            // Auto hide after 5 seconds
            setTimeout(function() {
                $('.form-message').fadeOut(function() {
                    $(this).remove();
                });
            }, 5000);
        }

        // Close message manually
        $(document).on('click', '.close-message', function() {
            $(this).closest('.form-message').fadeOut(function() {
                $(this).remove();
            });
        });

        // ==========================================
        // Countdown Timer (if applicable)
        // ==========================================
        function initCountdown() {
            const countdownElement = $('#countdown');
            if (!countdownElement.length) return;

            const targetDate = new Date('2025-10-20T10:00:00').getTime();
            
            function updateCountdown() {
                const now = new Date().getTime();
                const distance = targetDate - now;
                
                if (distance < 0) {
                    countdownElement.html('<span class="countdown-expired">¡El evento ha comenzado!</span>');
                    return;
                }
                
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);
                
                countdownElement.html(`
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
                `);
            }
            
            // Update countdown every second
            updateCountdown();
            setInterval(updateCountdown, 1000);
        }

        initCountdown();

        // ==========================================
        // Image Lazy Loading
        // ==========================================
        function initLazyLoading() {
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

                document.querySelectorAll('img[data-src]').forEach(img => {
                    imageObserver.observe(img);
                });
            }
        }

        initLazyLoading();

        // ==========================================
        // FAQ Toggle (if exists)
        // ==========================================
        $('.faq-question').on('click', function() {
            const question = $(this);
            const answer = question.next('.faq-answer');
            const icon = question.find('.faq-icon');
            
            // Close other open FAQs
            $('.faq-question').not(this).removeClass('active').next('.faq-answer').slideUp();
            $('.faq-icon').not(icon).removeClass('fa-minus').addClass('fa-plus');
            
            // Toggle current FAQ
            question.toggleClass('active');
            answer.slideToggle();
            icon.toggleClass('fa-plus fa-minus');
        });

        // ==========================================
        // Modal functionality (if exists)
        // ==========================================
        $('.modal-trigger').on('click', function() {
            const modalId = $(this).data('modal');
            $(`#${modalId}`).fadeIn();
        });

        $('.modal-close, .modal-overlay').on('click', function() {
            $(this).closest('.modal').fadeOut();
        });

        // Close modal with Escape key
        $(document).on('keydown', function(e) {
            if (e.key === 'Escape') {
                $('.modal').fadeOut();
            }
        });

        // ==========================================
        // Accessibility improvements
        // ==========================================
        
        // Skip to content functionality
        $('.skip-link').on('click', function(e) {
            e.preventDefault();
            const target = $($(this).attr('href'));
            if (target.length) {
                target.focus();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 300);
            }
        });

        // Keyboard navigation for custom elements
        $('.btn, .nav-link').on('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                $(this).click();
            }
        });

        // ==========================================
        // Print functionality
        // ==========================================
        $('.print-btn').on('click', function() {
            window.print();
        });

        // ==========================================
        // Social sharing (if needed)
        // ==========================================
        $('.share-btn').on('click', function(e) {
            e.preventDefault();
            const url = encodeURIComponent(window.location.href);
            const title = encodeURIComponent(document.title);
            const platform = $(this).data('platform');
            
            let shareUrl = '';
            switch (platform) {
                case 'facebook':
                    shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
                    break;
                case 'twitter':
                    shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
                    break;
                case 'linkedin':
                    shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
                    break;
            }
            
            if (shareUrl) {
                window.open(shareUrl, 'share', 'width=600,height=400');
            }
        });

        // ==========================================
        // Performance monitoring
        // ==========================================
        if (window.performance && window.performance.mark) {
            window.performance.mark('fpg-js-loaded');
        }

        // ==========================================
        // Debug mode (only in development)
        // ==========================================
        if (window.location.hostname === 'localhost' || window.location.hostname.includes('dev')) {
            window.fpgDebug = {
                version: '1.0.0',
                elements: {
                    navbar: navbar,
                    navToggle: navToggle,
                    navMenu: navMenu,
                    registrationForm: registrationForm,
                    backToTop: backToTop
                }
            };
            console.log('FPG Theme Debug Mode Active', window.fpgDebug);
        }

    });

})(jQuery);