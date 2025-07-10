<?php
/**
 * Customizer additions
 *
 * @package ForoPazGranada
 * @version 1.0.0
 */

/**
 * Add postMessage support for site title and description for the Theme Customizer.
 *
 * @param WP_Customize_Manager $wp_customize Theme Customizer object.
 */
function fpg_customize_register_additional($wp_customize) {
    $wp_customize->get_setting('blogname')->transport         = 'postMessage';
    $wp_customize->get_setting('blogdescription')->transport  = 'postMessage';
    $wp_customize->get_setting('header_textcolor')->transport = 'postMessage';

    if (isset($wp_customize->selective_refresh)) {
        $wp_customize->selective_refresh->add_partial('blogname', array(
            'selector'        => '.site-title a',
            'render_callback' => 'fpg_customize_partial_blogname',
        ));
        $wp_customize->selective_refresh->add_partial('blogdescription', array(
            'selector'        => '.site-description',
            'render_callback' => 'fpg_customize_partial_blogdescription',
        ));
    }

    // Forum Information Section
    $wp_customize->add_section('fpg_forum_info', array(
        'title' => esc_html__('Información del Foro', 'foro-paz-granada'),
        'priority' => 31,
    ));

    // Forum dates
    $wp_customize->add_setting('fpg_forum_start_date', array(
        'default' => '2025-10-20',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('fpg_forum_start_date', array(
        'label' => esc_html__('Fecha de Inicio', 'foro-paz-granada'),
        'section' => 'fpg_forum_info',
        'type' => 'date',
    ));

    $wp_customize->add_setting('fpg_forum_end_date', array(
        'default' => '2025-10-25',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('fpg_forum_end_date', array(
        'label' => esc_html__('Fecha de Fin', 'foro-paz-granada'),
        'section' => 'fpg_forum_info',
        'type' => 'date',
    ));

    // Location
    $wp_customize->add_setting('fpg_forum_location', array(
        'default' => 'Granada, España',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('fpg_forum_location', array(
        'label' => esc_html__('Ubicación del Foro', 'foro-paz-granada'),
        'section' => 'fpg_forum_info',
        'type' => 'text',
    ));

    // Social Media Section
    $wp_customize->add_section('fpg_social', array(
        'title' => esc_html__('Redes Sociales', 'foro-paz-granada'),
        'priority' => 36,
    ));

    $social_networks = array(
        'facebook' => esc_html__('Facebook', 'foro-paz-granada'),
        'twitter' => esc_html__('Twitter', 'foro-paz-granada'),
        'instagram' => esc_html__('Instagram', 'foro-paz-granada'),
        'linkedin' => esc_html__('LinkedIn', 'foro-paz-granada'),
        'youtube' => esc_html__('YouTube', 'foro-paz-granada'),
    );

    foreach ($social_networks as $network => $label) {
        $wp_customize->add_setting('fpg_social_' . $network, array(
            'default' => '',
            'sanitize_callback' => 'esc_url_raw',
        ));

        $wp_customize->add_control('fpg_social_' . $network, array(
            'label' => $label,
            'section' => 'fpg_social',
            'type' => 'url',
        ));
    }

    // Colors Section (additional)
    $wp_customize->add_section('fpg_colors', array(
        'title' => esc_html__('Colores del Tema', 'foro-paz-granada'),
        'priority' => 40,
    ));

    // Primary color
    $wp_customize->add_setting('fpg_primary_color', array(
        'default' => '#173468',
        'sanitize_callback' => 'sanitize_hex_color',
    ));

    $wp_customize->add_control(new WP_Customize_Color_Control($wp_customize, 'fpg_primary_color', array(
        'label' => esc_html__('Color Primario', 'foro-paz-granada'),
        'section' => 'fpg_colors',
        'settings' => 'fpg_primary_color',
    )));

    // Accent color
    $wp_customize->add_setting('fpg_accent_color', array(
        'default' => '#b98743',
        'sanitize_callback' => 'sanitize_hex_color',
    ));

    $wp_customize->add_control(new WP_Customize_Color_Control($wp_customize, 'fpg_accent_color', array(
        'label' => esc_html__('Color de Acento', 'foro-paz-granada'),
        'section' => 'fpg_colors',
        'settings' => 'fpg_accent_color',
    )));

    // Layout Section
    $wp_customize->add_section('fpg_layout', array(
        'title' => esc_html__('Diseño y Layout', 'foro-paz-granada'),
        'priority' => 41,
    ));

    // Show preloader
    $wp_customize->add_setting('fpg_show_preloader', array(
        'default' => true,
        'sanitize_callback' => 'fpg_sanitize_checkbox',
    ));

    $wp_customize->add_control('fpg_show_preloader', array(
        'label' => esc_html__('Mostrar Preloader', 'foro-paz-granada'),
        'section' => 'fpg_layout',
        'type' => 'checkbox',
    ));

    // Show scroll indicator
    $wp_customize->add_setting('fpg_show_scroll_indicator', array(
        'default' => true,
        'sanitize_callback' => 'fpg_sanitize_checkbox',
    ));

    $wp_customize->add_control('fpg_show_scroll_indicator', array(
        'label' => esc_html__('Mostrar Indicador de Scroll', 'foro-paz-granada'),
        'section' => 'fpg_layout',
        'type' => 'checkbox',
    ));

    // Content sections visibility
    $wp_customize->add_setting('fpg_show_about_section', array(
        'default' => true,
        'sanitize_callback' => 'fpg_sanitize_checkbox',
    ));

    $wp_customize->add_control('fpg_show_about_section', array(
        'label' => esc_html__('Mostrar Sección "Sobre el Foro"', 'foro-paz-granada'),
        'section' => 'fpg_layout',
        'type' => 'checkbox',
    ));

    $wp_customize->add_setting('fpg_show_program_section', array(
        'default' => true,
        'sanitize_callback' => 'fpg_sanitize_checkbox',
    ));

    $wp_customize->add_control('fpg_show_program_section', array(
        'label' => esc_html__('Mostrar Sección de Programa', 'foro-paz-granada'),
        'section' => 'fpg_layout',
        'type' => 'checkbox',
    ));

    $wp_customize->add_setting('fpg_show_symposium_section', array(
        'default' => true,
        'sanitize_callback' => 'fpg_sanitize_checkbox',
    ));

    $wp_customize->add_control('fpg_show_symposium_section', array(
        'label' => esc_html__('Mostrar Sección de Simposio', 'foro-paz-granada'),
        'section' => 'fpg_layout',
        'type' => 'checkbox',
    ));

    // Registration Section
    $wp_customize->add_section('fpg_registration', array(
        'title' => esc_html__('Configuración de Inscripción', 'foro-paz-granada'),
        'priority' => 42,
    ));

    // Registration enabled
    $wp_customize->add_setting('fpg_registration_enabled', array(
        'default' => true,
        'sanitize_callback' => 'fpg_sanitize_checkbox',
    ));

    $wp_customize->add_control('fpg_registration_enabled', array(
        'label' => esc_html__('Habilitar Inscripciones', 'foro-paz-granada'),
        'section' => 'fpg_registration',
        'type' => 'checkbox',
    ));

    // Registration deadline
    $wp_customize->add_setting('fpg_registration_deadline', array(
        'default' => '2025-10-15',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('fpg_registration_deadline', array(
        'label' => esc_html__('Fecha Límite de Inscripción', 'foro-paz-granada'),
        'section' => 'fpg_registration',
        'type' => 'date',
    ));

    // Registration notification email
    $wp_customize->add_setting('fpg_registration_notification_email', array(
        'default' => get_option('admin_email'),
        'sanitize_callback' => 'sanitize_email',
    ));

    $wp_customize->add_control('fpg_registration_notification_email', array(
        'label' => esc_html__('Email para Notificaciones de Inscripción', 'foro-paz-granada'),
        'section' => 'fpg_registration',
        'type' => 'email',
    ));
}
add_action('customize_register', 'fpg_customize_register_additional');

/**
 * Render the site title for the selective refresh partial.
 *
 * @return void
 */
function fpg_customize_partial_blogname() {
    bloginfo('name');
}

/**
 * Render the site tagline for the selective refresh partial.
 *
 * @return void
 */
function fpg_customize_partial_blogdescription() {
    bloginfo('description');
}

/**
 * Sanitize checkbox values.
 */
function fpg_sanitize_checkbox($checked) {
    return ((isset($checked) && true == $checked) ? true : false);
}

/**
 * Binds JS handlers to make Theme Customizer preview reload changes asynchronously.
 */
function fpg_customize_preview_js() {
    wp_enqueue_script('fpg-customizer', get_template_directory_uri() . '/assets/js/customizer.js', array('customize-preview'), FPG_THEME_VERSION, true);
}
add_action('customize_preview_init', 'fpg_customize_preview_js');

/**
 * Enqueue customizer control scripts
 */
function fpg_customize_controls_js() {
    wp_enqueue_script('fpg-customizer-controls', get_template_directory_uri() . '/assets/js/customizer-controls.js', array('customize-controls'), FPG_THEME_VERSION, true);
}
add_action('customize_controls_enqueue_scripts', 'fpg_customize_controls_js');

/**
 * Output custom CSS based on customizer settings
 */
function fpg_customizer_css() {
    $primary_color = get_theme_mod('fpg_primary_color', '#173468');
    $accent_color = get_theme_mod('fpg_accent_color', '#b98743');
    
    if ($primary_color !== '#173468' || $accent_color !== '#b98743') {
        ?>
        <style type="text/css" id="fpg-customizer-css">
        :root {
            --primary-blue: <?php echo esc_attr($primary_color); ?>;
            --accent-gold: <?php echo esc_attr($accent_color); ?>;
        }
        </style>
        <?php
    }
}
add_action('wp_head', 'fpg_customizer_css');

/**
 * Add custom CSS for hiding sections based on customizer settings
 */
function fpg_conditional_sections_css() {
    $show_about = get_theme_mod('fpg_show_about_section', true);
    $show_program = get_theme_mod('fpg_show_program_section', true);
    $show_symposium = get_theme_mod('fpg_show_symposium_section', true);
    $show_preloader = get_theme_mod('fpg_show_preloader', true);
    $show_scroll_indicator = get_theme_mod('fpg_show_scroll_indicator', true);
    
    $css = '';
    
    if (!$show_about) {
        $css .= '#sobre-foro { display: none !important; }';
    }
    
    if (!$show_program) {
        $css .= '#programa { display: none !important; }';
    }
    
    if (!$show_symposium) {
        $css .= '#simposio { display: none !important; }';
    }
    
    if (!$show_preloader) {
        $css .= '#preloader { display: none !important; }';
    }
    
    if (!$show_scroll_indicator) {
        $css .= '.scroll-indicator { display: none !important; }';
    }
    
    if (!empty($css)) {
        echo '<style type="text/css" id="fpg-conditional-css">' . $css . '</style>';
    }
}
add_action('wp_head', 'fpg_conditional_sections_css');

/**
 * Get social media links
 */
function fpg_get_social_links() {
    $social_networks = array(
        'facebook' => array('icon' => 'fab fa-facebook-f', 'label' => esc_html__('Facebook', 'foro-paz-granada')),
        'twitter' => array('icon' => 'fab fa-twitter', 'label' => esc_html__('Twitter', 'foro-paz-granada')),
        'instagram' => array('icon' => 'fab fa-instagram', 'label' => esc_html__('Instagram', 'foro-paz-granada')),
        'linkedin' => array('icon' => 'fab fa-linkedin-in', 'label' => esc_html__('LinkedIn', 'foro-paz-granada')),
        'youtube' => array('icon' => 'fab fa-youtube', 'label' => esc_html__('YouTube', 'foro-paz-granada')),
    );
    
    $output = '';
    foreach ($social_networks as $network => $data) {
        $url = get_theme_mod('fpg_social_' . $network);
        if (!empty($url)) {
            $output .= sprintf(
                '<a href="%s" target="_blank" rel="noopener noreferrer" class="social-link" title="%s"><i class="%s"></i></a>',
                esc_url($url),
                esc_attr($data['label']),
                esc_attr($data['icon'])
            );
        }
    }
    
    return $output;
}

/**
 * Display social media links
 */
function fpg_social_links() {
    echo fpg_get_social_links();
}

/**
 * Check if registration is open
 */
function fpg_is_registration_open() {
    $enabled = get_theme_mod('fpg_registration_enabled', true);
    $deadline = get_theme_mod('fpg_registration_deadline', '2025-10-15');
    
    if (!$enabled) {
        return false;
    }
    
    $deadline_timestamp = strtotime($deadline . ' 23:59:59');
    $current_timestamp = current_time('timestamp');
    
    return $current_timestamp <= $deadline_timestamp;
}

/**
 * Get registration status message
 */
function fpg_get_registration_status_message() {
    if (!fpg_is_registration_open()) {
        if (!get_theme_mod('fpg_registration_enabled', true)) {
            return esc_html__('Las inscripciones están cerradas.', 'foro-paz-granada');
        } else {
            return esc_html__('El período de inscripción ha finalizado.', 'foro-paz-granada');
        }
    }
    
    $deadline = get_theme_mod('fpg_registration_deadline', '2025-10-15');
    return sprintf(
        esc_html__('Inscripciones abiertas hasta el %s.', 'foro-paz-granada'),
        date_i18n(get_option('date_format'), strtotime($deadline))
    );
}