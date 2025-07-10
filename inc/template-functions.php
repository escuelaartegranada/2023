<?php
/**
 * Functions which enhance the theme by hooking into WordPress
 *
 * @package ForoPazGranada
 * @version 1.0.0
 */

/**
 * Adds custom classes to the array of body classes.
 *
 * @param array $classes Classes for the body element.
 * @return array
 */
function fpg_body_classes($classes) {
    // Adds a class of hfeed to non-singular pages.
    if (!is_singular()) {
        $classes[] = 'hfeed';
    }

    // Adds a class of no-sidebar when there is no sidebar present.
    if (!is_active_sidebar('sidebar-1')) {
        $classes[] = 'no-sidebar';
    }

    // Add class for front page
    if (is_front_page()) {
        $classes[] = 'front-page';
    }

    return $classes;
}
add_filter('body_class', 'fpg_body_classes');

/**
 * Add a pingback url auto-discovery header for single posts, pages, or attachments.
 */
function fpg_pingback_header() {
    if (is_singular() && pings_open()) {
        printf('<link rel="pingback" href="%s">', esc_url(get_bloginfo('pingback_url')));
    }
}
add_action('wp_head', 'fpg_pingback_header');

/**
 * Hero section function
 */
function fpg_hero_section() {
    $hero_image = get_theme_mod('fpg_hero_image');
    $hero_title = get_theme_mod('fpg_hero_title', 'II Foro Internacional de Paz');
    $hero_subtitle = get_theme_mod('fpg_hero_subtitle', 'Violencia y Paz: Tensiones y Oportunidades hacia una Humanidad Común');
    ?>
    <!-- Hero Section with Image Header -->
    <section id="inicio" class="hero">
        <div class="hero-image-container">
            <?php if ($hero_image) : ?>
                <img src="<?php echo esc_url($hero_image); ?>" alt="<?php echo esc_attr($hero_title); ?>" class="hero-image">
            <?php else : ?>
                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI2MDAiIHZpZXdCb3g9IjAgMCAxMjAwIDYwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjEyMDAiIGhlaWdodD0iNjAwIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfMF8xKSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzBfMSIgeDE9IjAiIHkxPSIwIiB4Mj0iMTIwMCIgeTI9IjYwMCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjMTczNDY4Ii8+CjxzdG9wIG9mZnNldD0iMC41IiBzdG9wLWNvbG9yPSIjMzc0NzhiIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2I5ODc0MyIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo=" alt="<?php echo esc_attr($hero_title); ?>" class="hero-image">
            <?php endif; ?>
            
            <!-- Image overlay with content -->
            <div class="hero-overlay">
                <div class="hero-content">
                    <div class="hero-badge">
                        <i class="fas fa-calendar-alt"></i>
                        <span><?php esc_html_e('20-25 Octubre 2025', 'foro-paz-granada'); ?></span>
                    </div>
                    <h1 class="hero-title">
                        <span class="title-main"><?php echo esc_html($hero_title); ?></span>
                        <span class="title-highlight"><?php esc_html_e('de Paz', 'foro-paz-granada'); ?></span>
                        <span class="title-year"><?php esc_html_e('2025', 'foro-paz-granada'); ?></span>
                    </h1>
                    <p class="hero-subtitle">
                        <?php echo esc_html($hero_subtitle); ?>
                    </p>
                    <div class="hero-location">
                        <i class="fas fa-map-marker-alt"></i>
                        <span><?php esc_html_e('Granada, España', 'foro-paz-granada'); ?></span>
                    </div>
                    <p class="hero-description">
                        <?php esc_html_e('Granada se proyecta nuevamente como Capital Mundial de la Paz, acogiendo este espacio de encuentro plural y riguroso.', 'foro-paz-granada'); ?>
                    </p>
                    <div class="hero-actions">
                        <a href="#inscripcion" class="btn btn-primary">
                            <i class="fas fa-user-plus"></i>
                            <?php esc_html_e('Inscríbete Ahora', 'foro-paz-granada'); ?>
                        </a>
                        <a href="#programa" class="btn btn-secondary">
                            <i class="fas fa-calendar"></i>
                            <?php esc_html_e('Ver Programa', 'foro-paz-granada'); ?>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Scroll indicator -->
        <div class="scroll-indicator">
            <div class="scroll-arrow">
                <i class="fas fa-chevron-down"></i>
            </div>
        </div>
    </section>
    <?php
}

/**
 * Default menu fallback function
 */
function fpg_default_menu() {
    ?>
    <div class="nav-menu">
        <a href="<?php echo esc_url(home_url('/')); ?>" class="nav-link"><?php esc_html_e('Inicio', 'foro-paz-granada'); ?></a>
        <a href="#sobre-foro" class="nav-link"><?php esc_html_e('Sobre el Foro', 'foro-paz-granada'); ?></a>
        <a href="#programa" class="nav-link"><?php esc_html_e('Programa', 'foro-paz-granada'); ?></a>
        <a href="#simposio" class="nav-link"><?php esc_html_e('Simposio', 'foro-paz-granada'); ?></a>
        <a href="#inscripcion" class="nav-link"><?php esc_html_e('Inscripción', 'foro-paz-granada'); ?></a>
        <a href="#contacto" class="nav-link"><?php esc_html_e('Contacto', 'foro-paz-granada'); ?></a>
    </div>
    <?php
}

/**
 * Registration form shortcode
 */
function fpg_registration_form_shortcode($atts) {
    $atts = shortcode_atts(array(
        'show_info' => 'true',
    ), $atts, 'fpg_registration_form');

    ob_start();
    ?>
    <div class="registration-content">
        <?php if ($atts['show_info'] === 'true') : ?>
            <div class="form-info">
                <h3><i class="fas fa-info-circle"></i> <?php esc_html_e('Información de Inscripción', 'foro-paz-granada'); ?></h3>
                <div class="info-item">
                    <h4><?php esc_html_e('Foro Principal (Presencial)', 'foro-paz-granada'); ?></h4>
                    <p><?php esc_html_e('Participa en todas las actividades presenciales del foro en Granada, España.', 'foro-paz-granada'); ?></p>
                    <ul>
                        <li><?php esc_html_e('Acceso a todas las conferencias magistrales', 'foro-paz-granada'); ?></li>
                        <li><?php esc_html_e('Participación en talleres y actividades culturales', 'foro-paz-granada'); ?></li>
                        <li><?php esc_html_e('Certificado de participación', 'foro-paz-granada'); ?></li>
                        <li><?php esc_html_e('Material del congreso', 'foro-paz-granada'); ?></li>
                    </ul>
                </div>
                
                <div class="info-item">
                    <h4><?php esc_html_e('Simposio Virtual', 'foro-paz-granada'); ?></h4>
                    <p><?php esc_html_e('Participa en el simposio de investigación de manera virtual.', 'foro-paz-granada'); ?></p>
                    <ul>
                        <li><?php esc_html_e('Acceso a todas las mesas temáticas', 'foro-paz-granada'); ?></li>
                        <li><?php esc_html_e('Posibilidad de presentar ponencias', 'foro-paz-granada'); ?></li>
                        <li><?php esc_html_e('Certificado de participación digital', 'foro-paz-granada'); ?></li>
                        <li><?php esc_html_e('Memoria digital del evento', 'foro-paz-granada'); ?></li>
                    </ul>
                </div>
            </div>
        <?php endif; ?>
        
        <form class="registration-form" id="registrationForm" method="post" action="<?php echo esc_url(admin_url('admin-ajax.php')); ?>">
            <?php wp_nonce_field('fpg_registration_nonce', 'fpg_registration_nonce'); ?>
            <input type="hidden" name="action" value="fpg_handle_registration">
            
            <h3><i class="fas fa-user-plus"></i> <?php esc_html_e('Formulario de Inscripción', 'foro-paz-granada'); ?></h3>
            
            <div class="form-section">
                <h4><?php esc_html_e('Información Personal', 'foro-paz-granada'); ?></h4>
                <div class="form-row">
                    <div class="form-group">
                        <label for="firstName"><?php esc_html_e('Nombre', 'foro-paz-granada'); ?> <span class="required">*</span></label>
                        <input type="text" id="firstName" name="firstName" required>
                    </div>
                    <div class="form-group">
                        <label for="lastName"><?php esc_html_e('Apellidos', 'foro-paz-granada'); ?> <span class="required">*</span></label>
                        <input type="text" id="lastName" name="lastName" required>
                    </div>
                </div>
                
                <div class="form-row">
                    <div class="form-group">
                        <label for="email"><?php esc_html_e('Correo Electrónico', 'foro-paz-granada'); ?> <span class="required">*</span></label>
                        <input type="email" id="email" name="email" required>
                    </div>
                    <div class="form-group">
                        <label for="phone"><?php esc_html_e('Teléfono', 'foro-paz-granada'); ?></label>
                        <input type="tel" id="phone" name="phone">
                    </div>
                </div>
                
                <div class="form-row">
                    <div class="form-group">
                        <label for="country"><?php esc_html_e('País', 'foro-paz-granada'); ?> <span class="required">*</span></label>
                        <input type="text" id="country" name="country" required>
                    </div>
                    <div class="form-group">
                        <label for="city"><?php esc_html_e('Ciudad', 'foro-paz-granada'); ?> <span class="required">*</span></label>
                        <input type="text" id="city" name="city" required>
                    </div>
                </div>
            </div>
            
            <div class="form-section">
                <h4><?php esc_html_e('Información Académica/Profesional', 'foro-paz-granada'); ?></h4>
                <div class="form-group">
                    <label for="institution"><?php esc_html_e('Institución de Adscripción', 'foro-paz-granada'); ?></label>
                    <input type="text" id="institution" name="institution">
                </div>
                
                <div class="form-row">
                    <div class="form-group">
                        <label for="profession"><?php esc_html_e('Profesión/Ocupación', 'foro-paz-granada'); ?> <span class="required">*</span></label>
                        <select id="profession" name="profession" required>
                            <option value=""><?php esc_html_e('Selecciona una opción', 'foro-paz-granada'); ?></option>
                            <option value="academico"><?php esc_html_e('Académico/Investigador', 'foro-paz-granada'); ?></option>
                            <option value="estudiante"><?php esc_html_e('Estudiante', 'foro-paz-granada'); ?></option>
                            <option value="ong"><?php esc_html_e('ONG/Organización Social', 'foro-paz-granada'); ?></option>
                            <option value="gobierno"><?php esc_html_e('Funcionario Gubernamental', 'foro-paz-granada'); ?></option>
                            <option value="periodista"><?php esc_html_e('Periodista/Medios', 'foro-paz-granada'); ?></option>
                            <option value="artista"><?php esc_html_e('Artista/Cultural', 'foro-paz-granada'); ?></option>
                            <option value="otro"><?php esc_html_e('Otro', 'foro-paz-granada'); ?></option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="orcid"><?php esc_html_e('ORCID (si aplica)', 'foro-paz-granada'); ?></label>
                        <input type="text" id="orcid" name="orcid" placeholder="0000-0000-0000-0000">
                    </div>
                </div>
            </div>
            
            <div class="form-section">
                <h4><?php esc_html_e('Tipo de Participación', 'foro-paz-granada'); ?> <span class="required">*</span></h4>
                <div class="checkbox-group">
                    <label class="checkbox-label">
                        <input type="checkbox" name="participation[]" value="foro-presencial">
                        <span class="checkmark"></span>
                        <?php esc_html_e('Foro Principal (Presencial en Granada)', 'foro-paz-granada'); ?>
                    </label>
                    <label class="checkbox-label">
                        <input type="checkbox" name="participation[]" value="simposio-virtual">
                        <span class="checkmark"></span>
                        <?php esc_html_e('Simposio Virtual de Investigación', 'foro-paz-granada'); ?>
                    </label>
                    <label class="checkbox-label">
                        <input type="checkbox" name="participation[]" value="ponencia">
                        <span class="checkmark"></span>
                        <?php esc_html_e('Presentar ponencia en el Simposio', 'foro-paz-granada'); ?>
                    </label>
                </div>
            </div>
            
            <div class="form-section" id="ponenciaSection" style="display: none;">
                <h4><?php esc_html_e('Información de la Ponencia', 'foro-paz-granada'); ?></h4>
                <div class="form-group">
                    <label for="mesaTematica"><?php esc_html_e('Mesa Temática', 'foro-paz-granada'); ?> <span class="required">*</span></label>
                    <select id="mesaTematica" name="mesaTematica">
                        <option value=""><?php esc_html_e('Selecciona una mesa temática', 'foro-paz-granada'); ?></option>
                        <option value="memoria-reconciliacion"><?php esc_html_e('Memoria colectiva y reconciliación postconflicto', 'foro-paz-granada'); ?></option>
                        <option value="violencia-indigenas"><?php esc_html_e('Violencia estructural e impacto en comunidades indígenas', 'foro-paz-granada'); ?></option>
                        <option value="justicia-transicional"><?php esc_html_e('Justicia transicional y derechos humanos', 'foro-paz-granada'); ?></option>
                        <option value="ecologia-politica"><?php esc_html_e('Ecología política, ecoviolencias y justicia ambiental', 'foro-paz-granada'); ?></option>
                        <option value="genero-paz"><?php esc_html_e('Género, mujeres y paz', 'foro-paz-granada'); ?></option>
                        <option value="arte-memoria"><?php esc_html_e('Arte, memoria y cultura de paz', 'foro-paz-granada'); ?></option>
                        <option value="comunicacion-educacion"><?php esc_html_e('Comunicación transformadora, educación para la paz', 'foro-paz-granada'); ?></option>
                        <option value="resistencias-globales"><?php esc_html_e('Resistencias globales', 'foro-paz-granada'); ?></option>
                        <option value="historia-paz"><?php esc_html_e('Historia contemporánea de la paz', 'foro-paz-granada'); ?></option>
                        <option value="autocracias-conflictos"><?php esc_html_e('Autocracias, conflictos armados y élites económicas', 'foro-paz-granada'); ?></option>
                        <option value="democracia-saberes"><?php esc_html_e('Democracia situada, saberes del Sur', 'foro-paz-granada'); ?></option>
                        <option value="teorias-filosofias"><?php esc_html_e('Teorías, filosofías y epistemologías de la paz', 'foro-paz-granada'); ?></option>
                    </select>
                </div>
                
                <div class="form-group">
                    <label for="tituloPonencia"><?php esc_html_e('Título de la Ponencia', 'foro-paz-granada'); ?></label>
                    <input type="text" id="tituloPonencia" name="tituloPonencia">
                </div>
            </div>
            
            <div class="form-section">
                <h4><?php esc_html_e('Información Adicional', 'foro-paz-granada'); ?></h4>
                <div class="form-group">
                    <label for="motivacion"><?php esc_html_e('¿Por qué quieres participar en el Foro?', 'foro-paz-granada'); ?> <span class="required">*</span></label>
                    <textarea id="motivacion" name="motivacion" rows="4" required></textarea>
                </div>
                
                <div class="form-group">
                    <label for="necesidades"><?php esc_html_e('Necesidades especiales o requerimientos dietéticos', 'foro-paz-granada'); ?></label>
                    <textarea id="necesidades" name="necesidades" rows="3"></textarea>
                </div>
            </div>
            
            <div class="form-section">
                <div class="checkbox-group">
                    <label class="checkbox-label">
                        <input type="checkbox" name="privacy" required>
                        <span class="checkmark"></span>
                        <?php esc_html_e('Acepto el tratamiento de mis datos personales según la política de privacidad', 'foro-paz-granada'); ?> <span class="required">*</span>
                    </label>
                    <label class="checkbox-label">
                        <input type="checkbox" name="newsletter">
                        <span class="checkmark"></span>
                        <?php esc_html_e('Deseo recibir información sobre futuros eventos y actividades', 'foro-paz-granada'); ?>
                    </label>
                </div>
            </div>
            
            <div class="form-actions">
                <button type="submit" class="btn btn-primary">
                    <i class="fas fa-paper-plane"></i>
                    <?php esc_html_e('Enviar Inscripción', 'foro-paz-granada'); ?>
                </button>
                <button type="reset" class="btn btn-secondary">
                    <i class="fas fa-undo"></i>
                    <?php esc_html_e('Limpiar Formulario', 'foro-paz-granada'); ?>
                </button>
            </div>
        </form>
    </div>
    <?php
    return ob_get_clean();
}
add_shortcode('fpg_registration_form', 'fpg_registration_form_shortcode');

/**
 * Handle registration form submission
 */
function fpg_handle_registration() {
    // Verify nonce
    if (!wp_verify_nonce($_POST['fpg_registration_nonce'], 'fpg_registration_nonce')) {
        wp_send_json_error(esc_html__('Error de seguridad', 'foro-paz-granada'));
    }

    // Sanitize and validate form data
    $registration_data = array(
        'firstName' => sanitize_text_field($_POST['firstName']),
        'lastName' => sanitize_text_field($_POST['lastName']),
        'email' => sanitize_email($_POST['email']),
        'phone' => sanitize_text_field($_POST['phone']),
        'country' => sanitize_text_field($_POST['country']),
        'city' => sanitize_text_field($_POST['city']),
        'institution' => sanitize_text_field($_POST['institution']),
        'profession' => sanitize_text_field($_POST['profession']),
        'orcid' => sanitize_text_field($_POST['orcid']),
        'participation' => isset($_POST['participation']) ? array_map('sanitize_text_field', $_POST['participation']) : array(),
        'mesaTematica' => sanitize_text_field($_POST['mesaTematica']),
        'tituloPonencia' => sanitize_text_field($_POST['tituloPonencia']),
        'motivacion' => sanitize_textarea_field($_POST['motivacion']),
        'necesidades' => sanitize_textarea_field($_POST['necesidades']),
        'privacy' => isset($_POST['privacy']),
        'newsletter' => isset($_POST['newsletter']),
    );

    // Validate required fields
    $errors = array();
    if (empty($registration_data['firstName'])) {
        $errors[] = esc_html__('El nombre es obligatorio', 'foro-paz-granada');
    }
    if (empty($registration_data['lastName'])) {
        $errors[] = esc_html__('Los apellidos son obligatorios', 'foro-paz-granada');
    }
    if (empty($registration_data['email']) || !is_email($registration_data['email'])) {
        $errors[] = esc_html__('El email es obligatorio y debe ser válido', 'foro-paz-granada');
    }
    if (empty($registration_data['country'])) {
        $errors[] = esc_html__('El país es obligatorio', 'foro-paz-granada');
    }
    if (empty($registration_data['city'])) {
        $errors[] = esc_html__('La ciudad es obligatoria', 'foro-paz-granada');
    }
    if (empty($registration_data['profession'])) {
        $errors[] = esc_html__('La profesión es obligatoria', 'foro-paz-granada');
    }
    if (empty($registration_data['participation'])) {
        $errors[] = esc_html__('Debe seleccionar al menos un tipo de participación', 'foro-paz-granada');
    }
    if (empty($registration_data['motivacion'])) {
        $errors[] = esc_html__('La motivación para participar es obligatoria', 'foro-paz-granada');
    }
    if (!$registration_data['privacy']) {
        $errors[] = esc_html__('Debe aceptar la política de privacidad', 'foro-paz-granada');
    }

    if (!empty($errors)) {
        wp_send_json_error(implode(', ', $errors));
    }

    // Save registration data
    $registration_id = wp_insert_post(array(
        'post_type' => 'registrations',
        'post_title' => $registration_data['firstName'] . ' ' . $registration_data['lastName'],
        'post_content' => json_encode($registration_data),
        'post_status' => 'publish',
        'meta_input' => $registration_data,
    ));

    if ($registration_id) {
        // Send confirmation email
        $to = $registration_data['email'];
        $subject = esc_html__('Confirmación de inscripción - Foro Paz Granada 2025', 'foro-paz-granada');
        $message = sprintf(
            esc_html__('Hola %s,\n\nGracias por tu inscripción al II Foro Internacional de Paz Granada 2025.\n\nRecibirás más información pronto.\n\nSaludos,\nEquipo Foro Paz Granada', 'foro-paz-granada'),
            $registration_data['firstName']
        );
        wp_mail($to, $subject, $message);

        wp_send_json_success(esc_html__('Inscripción enviada exitosamente', 'foro-paz-granada'));
    } else {
        wp_send_json_error(esc_html__('Error al procesar la inscripción', 'foro-paz-granada'));
    }
}
add_action('wp_ajax_fpg_handle_registration', 'fpg_handle_registration');
add_action('wp_ajax_nopriv_fpg_handle_registration', 'fpg_handle_registration');

/**
 * Excerpt length filter
 */
function fpg_excerpt_length($length) {
    return 30;
}
add_filter('excerpt_length', 'fpg_excerpt_length', 999);

/**
 * Excerpt more filter
 */
function fpg_excerpt_more($more) {
    return '...';
}
add_filter('excerpt_more', 'fpg_excerpt_more');

/**
 * Custom logo setup
 */
function fpg_get_custom_logo() {
    if (has_custom_logo()) {
        return get_custom_logo();
    } else {
        return sprintf(
            '<a href="%1$s" class="custom-logo-link" rel="home"><i class="fas fa-dove"></i> %2$s</a>',
            esc_url(home_url('/')),
            get_bloginfo('name')
        );
    }
}

/**
 * Register custom post type for registrations
 */
function fpg_register_registrations_post_type() {
    register_post_type('registrations', array(
        'labels' => array(
            'name' => esc_html__('Inscripciones', 'foro-paz-granada'),
            'singular_name' => esc_html__('Inscripción', 'foro-paz-granada'),
            'add_new' => esc_html__('Añadir Inscripción', 'foro-paz-granada'),
            'add_new_item' => esc_html__('Añadir Nueva Inscripción', 'foro-paz-granada'),
            'edit_item' => esc_html__('Editar Inscripción', 'foro-paz-granada'),
            'new_item' => esc_html__('Nueva Inscripción', 'foro-paz-granada'),
            'view_item' => esc_html__('Ver Inscripción', 'foro-paz-granada'),
            'search_items' => esc_html__('Buscar Inscripciones', 'foro-paz-granada'),
        ),
        'public' => false,
        'show_ui' => true,
        'show_in_menu' => true,
        'capability_type' => 'post',
        'hierarchical' => false,
        'supports' => array('title'),
        'menu_icon' => 'dashicons-clipboard',
        'show_in_rest' => false,
    ));
}
add_action('init', 'fpg_register_registrations_post_type');