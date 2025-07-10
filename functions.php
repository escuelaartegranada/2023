<?php
/**
 * Tema: Foro Paz Granada 2025
 * Functions and definitions
 *
 * @package ForoPazGranada
 * @version 1.0.0
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Define theme constants
 */
define('FPG_THEME_VERSION', '1.0.0');
define('FPG_THEME_URI', get_template_directory_uri());
define('FPG_THEME_DIR', get_template_directory());

/**
 * Setup theme defaults and register various WordPress features
 */
function fpg_theme_setup() {
    // Make theme available for translation
    load_theme_textdomain('foro-paz-granada', get_template_directory() . '/languages');

    // Add default posts and comments RSS feed links to head
    add_theme_support('automatic-feed-links');

    // Let WordPress manage the document title
    add_theme_support('title-tag');

    // Enable support for Post Thumbnails on posts and pages
    add_theme_support('post-thumbnails');
    
    // Set default thumbnail size
    set_post_thumbnail_size(1200, 630, true);
    
    // Add custom image sizes
    add_image_size('fpg-hero', 1920, 1080, true);
    add_image_size('fpg-card', 400, 250, true);
    add_image_size('fpg-speaker', 300, 300, true);

    // Register navigation menus
    register_nav_menus(array(
        'primary' => esc_html__('Primary Menu', 'foro-paz-granada'),
        'footer' => esc_html__('Footer Menu', 'foro-paz-granada'),
    ));

    // Switch default core markup to output valid HTML5
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ));

    // Set up the WordPress core custom background feature
    add_theme_support('custom-background', apply_filters('fpg_custom_background_args', array(
        'default-color' => 'f8f6f0',
        'default-image' => '',
    )));

    // Add theme support for selective refresh for widgets
    add_theme_support('customize-selective-refresh-widgets');

    // Add support for core custom logo
    add_theme_support('custom-logo', array(
        'height'      => 250,
        'width'       => 250,
        'flex-width'  => true,
        'flex-height' => true,
    ));

    // Add support for full and wide align images
    add_theme_support('align-wide');

    // Add support for responsive embedded content
    add_theme_support('responsive-embeds');

    // Add support for editor styles
    add_theme_support('editor-styles');
    add_editor_style('assets/css/editor-style.css');

    // Add support for custom line height controls
    add_theme_support('custom-line-height');

    // Add support for custom units
    add_theme_support('custom-units');

    // Add support for custom spacing
    add_theme_support('custom-spacing');

    // Add support for block templates
    add_theme_support('block-templates');

    // Add theme support for block styles
    add_theme_support('wp-block-styles');

    // Add support for editor color palette
    add_theme_support('editor-color-palette', array(
        array(
            'name'  => esc_html__('Primary Blue', 'foro-paz-granada'),
            'slug'  => 'primary-blue',
            'color' => '#173468',
        ),
        array(
            'name'  => esc_html__('Secondary Blue', 'foro-paz-granada'),
            'slug'  => 'secondary-blue',
            'color' => '#37478b',
        ),
        array(
            'name'  => esc_html__('Accent Gold', 'foro-paz-granada'),
            'slug'  => 'accent-gold',
            'color' => '#b98743',
        ),
        array(
            'name'  => esc_html__('Light Blue', 'foro-paz-granada'),
            'slug'  => 'light-blue',
            'color' => '#6b8fc7',
        ),
        array(
            'name'  => esc_html__('Cream White', 'foro-paz-granada'),
            'slug'  => 'cream-white',
            'color' => '#f8f6f0',
        ),
        array(
            'name'  => esc_html__('Text Dark', 'foro-paz-granada'),
            'slug'  => 'text-dark',
            'color' => '#2c3e50',
        ),
        array(
            'name'  => esc_html__('Text Light', 'foro-paz-granada'),
            'slug'  => 'text-light',
            'color' => '#7f8c8d',
        ),
    ));

    // Add support for custom font sizes
    add_theme_support('editor-font-sizes', array(
        array(
            'name' => esc_html__('Small', 'foro-paz-granada'),
            'size' => 14,
            'slug' => 'small'
        ),
        array(
            'name' => esc_html__('Regular', 'foro-paz-granada'),
            'size' => 16,
            'slug' => 'regular'
        ),
        array(
            'name' => esc_html__('Medium', 'foro-paz-granada'),
            'size' => 20,
            'slug' => 'medium'
        ),
        array(
            'name' => esc_html__('Large', 'foro-paz-granada'),
            'size' => 24,
            'slug' => 'large'
        ),
        array(
            'name' => esc_html__('Extra Large', 'foro-paz-granada'),
            'size' => 32,
            'slug' => 'extra-large'
        ),
        array(
            'name' => esc_html__('Huge', 'foro-paz-granada'),
            'size' => 48,
            'slug' => 'huge'
        )
    ));
}
add_action('after_setup_theme', 'fpg_theme_setup');

/**
 * Enqueue scripts and styles
 */
function fpg_scripts() {
    // Enqueue Google Fonts
    wp_enqueue_style('fpg-google-fonts', 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;600;700&display=swap', array(), null);
    
    // Enqueue Font Awesome
    wp_enqueue_style('fpg-font-awesome', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css', array(), '6.4.0');
    
    // Enqueue theme stylesheet
    wp_enqueue_style('fpg-style', get_stylesheet_uri(), array('fpg-google-fonts', 'fpg-font-awesome'), FPG_THEME_VERSION);
    
    // Enqueue theme JavaScript
    wp_enqueue_script('fpg-script', get_template_directory_uri() . '/assets/js/theme.js', array('jquery'), FPG_THEME_VERSION, true);
    
    // Localize script for AJAX
    wp_localize_script('fpg-script', 'fpg_ajax', array(
        'ajax_url' => admin_url('admin-ajax.php'),
        'nonce' => wp_create_nonce('fpg_nonce'),
        'loading_text' => esc_html__('Enviando...', 'foro-paz-granada'),
        'success_text' => esc_html__('¡Enviado exitosamente!', 'foro-paz-granada'),
        'error_text' => esc_html__('Error al enviar. Inténtalo de nuevo.', 'foro-paz-granada'),
    ));

    // Enqueue comment reply script
    if (is_singular() && comments_open() && get_option('thread_comments')) {
        wp_enqueue_script('comment-reply');
    }
}
add_action('wp_enqueue_scripts', 'fpg_scripts');

/**
 * Enqueue block editor styles
 */
function fpg_block_editor_styles() {
    wp_enqueue_style('fpg-block-editor-styles', FPG_THEME_URI . '/assets/css/block-editor.css', array(), FPG_THEME_VERSION);
}
add_action('enqueue_block_editor_assets', 'fpg_block_editor_styles');

/**
 * Register widget area
 */
function fpg_widgets_init() {
    register_sidebar(array(
        'name'          => esc_html__('Sidebar', 'foro-paz-granada'),
        'id'            => 'sidebar-1',
        'description'   => esc_html__('Add widgets here.', 'foro-paz-granada'),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h2 class="widget-title">',
        'after_title'   => '</h2>',
    ));

    register_sidebar(array(
        'name'          => esc_html__('Footer 1', 'foro-paz-granada'),
        'id'            => 'footer-1',
        'description'   => esc_html__('Footer widget area 1.', 'foro-paz-granada'),
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h4 class="widget-title">',
        'after_title'   => '</h4>',
    ));

    register_sidebar(array(
        'name'          => esc_html__('Footer 2', 'foro-paz-granada'),
        'id'            => 'footer-2',
        'description'   => esc_html__('Footer widget area 2.', 'foro-paz-granada'),
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h4 class="widget-title">',
        'after_title'   => '</h4>',
    ));

    register_sidebar(array(
        'name'          => esc_html__('Footer 3', 'foro-paz-granada'),
        'id'            => 'footer-3',
        'description'   => esc_html__('Footer widget area 3.', 'foro-paz-granada'),
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h4 class="widget-title">',
        'after_title'   => '</h4>',
    ));
}
add_action('widgets_init', 'fpg_widgets_init');

/**
 * Custom post types
 */
function fpg_register_post_types() {
    // Speakers
    register_post_type('speakers', array(
        'labels' => array(
            'name' => esc_html__('Ponentes', 'foro-paz-granada'),
            'singular_name' => esc_html__('Ponente', 'foro-paz-granada'),
            'add_new' => esc_html__('Añadir Ponente', 'foro-paz-granada'),
            'add_new_item' => esc_html__('Añadir Nuevo Ponente', 'foro-paz-granada'),
            'edit_item' => esc_html__('Editar Ponente', 'foro-paz-granada'),
            'new_item' => esc_html__('Nuevo Ponente', 'foro-paz-granada'),
            'view_item' => esc_html__('Ver Ponente', 'foro-paz-granada'),
            'search_items' => esc_html__('Buscar Ponentes', 'foro-paz-granada'),
        ),
        'public' => true,
        'has_archive' => true,
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
        'menu_icon' => 'dashicons-businessperson',
        'show_in_rest' => true,
    ));

    // Events/Schedule
    register_post_type('events', array(
        'labels' => array(
            'name' => esc_html__('Eventos', 'foro-paz-granada'),
            'singular_name' => esc_html__('Evento', 'foro-paz-granada'),
            'add_new' => esc_html__('Añadir Evento', 'foro-paz-granada'),
            'add_new_item' => esc_html__('Añadir Nuevo Evento', 'foro-paz-granada'),
            'edit_item' => esc_html__('Editar Evento', 'foro-paz-granada'),
            'new_item' => esc_html__('Nuevo Evento', 'foro-paz-granada'),
            'view_item' => esc_html__('Ver Evento', 'foro-paz-granada'),
            'search_items' => esc_html__('Buscar Eventos', 'foro-paz-granada'),
        ),
        'public' => true,
        'has_archive' => true,
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
        'menu_icon' => 'dashicons-calendar-alt',
        'show_in_rest' => true,
    ));

    // Sponsors
    register_post_type('sponsors', array(
        'labels' => array(
            'name' => esc_html__('Patrocinadores', 'foro-paz-granada'),
            'singular_name' => esc_html__('Patrocinador', 'foro-paz-granada'),
            'add_new' => esc_html__('Añadir Patrocinador', 'foro-paz-granada'),
            'add_new_item' => esc_html__('Añadir Nuevo Patrocinador', 'foro-paz-granada'),
            'edit_item' => esc_html__('Editar Patrocinador', 'foro-paz-granada'),
            'new_item' => esc_html__('Nuevo Patrocinador', 'foro-paz-granada'),
            'view_item' => esc_html__('Ver Patrocinador', 'foro-paz-granada'),
            'search_items' => esc_html__('Buscar Patrocinadores', 'foro-paz-granada'),
        ),
        'public' => true,
        'has_archive' => true,
        'supports' => array('title', 'editor', 'thumbnail'),
        'menu_icon' => 'dashicons-awards',
        'show_in_rest' => true,
    ));
}
add_action('init', 'fpg_register_post_types');

/**
 * Add custom meta boxes
 */
function fpg_add_meta_boxes() {
    // Speaker meta box
    add_meta_box(
        'speaker_details',
        esc_html__('Detalles del Ponente', 'foro-paz-granada'),
        'fpg_speaker_meta_box_callback',
        'speakers',
        'normal',
        'high'
    );

    // Event meta box
    add_meta_box(
        'event_details',
        esc_html__('Detalles del Evento', 'foro-paz-granada'),
        'fpg_event_meta_box_callback',
        'events',
        'normal',
        'high'
    );

    // Sponsor meta box
    add_meta_box(
        'sponsor_details',
        esc_html__('Detalles del Patrocinador', 'foro-paz-granada'),
        'fpg_sponsor_meta_box_callback',
        'sponsors',
        'normal',
        'high'
    );
}
add_action('add_meta_boxes', 'fpg_add_meta_boxes');

/**
 * Speaker meta box callback
 */
function fpg_speaker_meta_box_callback($post) {
    wp_nonce_field('fpg_save_speaker_meta', 'fpg_speaker_meta_nonce');
    
    $position = get_post_meta($post->ID, '_speaker_position', true);
    $institution = get_post_meta($post->ID, '_speaker_institution', true);
    $bio = get_post_meta($post->ID, '_speaker_bio', true);
    $linkedin = get_post_meta($post->ID, '_speaker_linkedin', true);
    $twitter = get_post_meta($post->ID, '_speaker_twitter', true);
    ?>
    <table class="form-table">
        <tr>
            <th><label for="speaker_position"><?php esc_html_e('Cargo/Posición', 'foro-paz-granada'); ?></label></th>
            <td><input type="text" id="speaker_position" name="speaker_position" value="<?php echo esc_attr($position); ?>" class="regular-text" /></td>
        </tr>
        <tr>
            <th><label for="speaker_institution"><?php esc_html_e('Institución', 'foro-paz-granada'); ?></label></th>
            <td><input type="text" id="speaker_institution" name="speaker_institution" value="<?php echo esc_attr($institution); ?>" class="regular-text" /></td>
        </tr>
        <tr>
            <th><label for="speaker_bio"><?php esc_html_e('Biografía Corta', 'foro-paz-granada'); ?></label></th>
            <td><textarea id="speaker_bio" name="speaker_bio" rows="4" class="large-text"><?php echo esc_textarea($bio); ?></textarea></td>
        </tr>
        <tr>
            <th><label for="speaker_linkedin"><?php esc_html_e('LinkedIn', 'foro-paz-granada'); ?></label></th>
            <td><input type="url" id="speaker_linkedin" name="speaker_linkedin" value="<?php echo esc_url($linkedin); ?>" class="regular-text" /></td>
        </tr>
        <tr>
            <th><label for="speaker_twitter"><?php esc_html_e('Twitter', 'foro-paz-granada'); ?></label></th>
            <td><input type="url" id="speaker_twitter" name="speaker_twitter" value="<?php echo esc_url($twitter); ?>" class="regular-text" /></td>
        </tr>
    </table>
    <?php
}

/**
 * Event meta box callback
 */
function fpg_event_meta_box_callback($post) {
    wp_nonce_field('fpg_save_event_meta', 'fpg_event_meta_nonce');
    
    $date = get_post_meta($post->ID, '_event_date', true);
    $time = get_post_meta($post->ID, '_event_time', true);
    $location = get_post_meta($post->ID, '_event_location', true);
    $type = get_post_meta($post->ID, '_event_type', true);
    ?>
    <table class="form-table">
        <tr>
            <th><label for="event_date"><?php esc_html_e('Fecha', 'foro-paz-granada'); ?></label></th>
            <td><input type="date" id="event_date" name="event_date" value="<?php echo esc_attr($date); ?>" /></td>
        </tr>
        <tr>
            <th><label for="event_time"><?php esc_html_e('Hora', 'foro-paz-granada'); ?></label></th>
            <td><input type="time" id="event_time" name="event_time" value="<?php echo esc_attr($time); ?>" /></td>
        </tr>
        <tr>
            <th><label for="event_location"><?php esc_html_e('Ubicación', 'foro-paz-granada'); ?></label></th>
            <td><input type="text" id="event_location" name="event_location" value="<?php echo esc_attr($location); ?>" class="regular-text" /></td>
        </tr>
        <tr>
            <th><label for="event_type"><?php esc_html_e('Tipo de Evento', 'foro-paz-granada'); ?></label></th>
            <td>
                <select id="event_type" name="event_type">
                    <option value="conference" <?php selected($type, 'conference'); ?>><?php esc_html_e('Conferencia', 'foro-paz-granada'); ?></option>
                    <option value="workshop" <?php selected($type, 'workshop'); ?>><?php esc_html_e('Taller', 'foro-paz-granada'); ?></option>
                    <option value="panel" <?php selected($type, 'panel'); ?>><?php esc_html_e('Panel', 'foro-paz-granada'); ?></option>
                    <option value="cultural" <?php selected($type, 'cultural'); ?>><?php esc_html_e('Actividad Cultural', 'foro-paz-granada'); ?></option>
                </select>
            </td>
        </tr>
    </table>
    <?php
}

/**
 * Sponsor meta box callback
 */
function fpg_sponsor_meta_box_callback($post) {
    wp_nonce_field('fpg_save_sponsor_meta', 'fpg_sponsor_meta_nonce');
    
    $website = get_post_meta($post->ID, '_sponsor_website', true);
    $level = get_post_meta($post->ID, '_sponsor_level', true);
    ?>
    <table class="form-table">
        <tr>
            <th><label for="sponsor_website"><?php esc_html_e('Sitio Web', 'foro-paz-granada'); ?></label></th>
            <td><input type="url" id="sponsor_website" name="sponsor_website" value="<?php echo esc_url($website); ?>" class="regular-text" /></td>
        </tr>
        <tr>
            <th><label for="sponsor_level"><?php esc_html_e('Nivel de Patrocinio', 'foro-paz-granada'); ?></label></th>
            <td>
                <select id="sponsor_level" name="sponsor_level">
                    <option value="gold" <?php selected($level, 'gold'); ?>><?php esc_html_e('Oro', 'foro-paz-granada'); ?></option>
                    <option value="silver" <?php selected($level, 'silver'); ?>><?php esc_html_e('Plata', 'foro-paz-granada'); ?></option>
                    <option value="bronze" <?php selected($level, 'bronze'); ?>><?php esc_html_e('Bronce', 'foro-paz-granada'); ?></option>
                    <option value="collaborator" <?php selected($level, 'collaborator'); ?>><?php esc_html_e('Colaborador', 'foro-paz-granada'); ?></option>
                </select>
            </td>
        </tr>
    </table>
    <?php
}

/**
 * Save meta box data
 */
function fpg_save_meta_data($post_id) {
    // Check if nonce is valid
    if (!isset($_POST['fpg_speaker_meta_nonce']) && !isset($_POST['fpg_event_meta_nonce']) && !isset($_POST['fpg_sponsor_meta_nonce'])) {
        return;
    }

    // Verify nonce
    $nonce_verified = false;
    if (isset($_POST['fpg_speaker_meta_nonce']) && wp_verify_nonce($_POST['fpg_speaker_meta_nonce'], 'fpg_save_speaker_meta')) {
        $nonce_verified = true;
    } elseif (isset($_POST['fpg_event_meta_nonce']) && wp_verify_nonce($_POST['fpg_event_meta_nonce'], 'fpg_save_event_meta')) {
        $nonce_verified = true;
    } elseif (isset($_POST['fpg_sponsor_meta_nonce']) && wp_verify_nonce($_POST['fpg_sponsor_meta_nonce'], 'fpg_save_sponsor_meta')) {
        $nonce_verified = true;
    }

    if (!$nonce_verified) {
        return;
    }

    // Check if user has permissions to save data
    if (!current_user_can('edit_post', $post_id)) {
        return;
    }

    // Check if not an autosave
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return;
    }

    // Save speaker meta
    if (get_post_type($post_id) === 'speakers') {
        $fields = array('speaker_position', 'speaker_institution', 'speaker_bio', 'speaker_linkedin', 'speaker_twitter');
        foreach ($fields as $field) {
            if (isset($_POST[$field])) {
                update_post_meta($post_id, '_' . $field, sanitize_text_field($_POST[$field]));
            }
        }
    }

    // Save event meta
    if (get_post_type($post_id) === 'events') {
        $fields = array('event_date', 'event_time', 'event_location', 'event_type');
        foreach ($fields as $field) {
            if (isset($_POST[$field])) {
                update_post_meta($post_id, '_' . $field, sanitize_text_field($_POST[$field]));
            }
        }
    }

    // Save sponsor meta
    if (get_post_type($post_id) === 'sponsors') {
        $fields = array('sponsor_website', 'sponsor_level');
        foreach ($fields as $field) {
            if (isset($_POST[$field])) {
                update_post_meta($post_id, '_' . $field, sanitize_text_field($_POST[$field]));
            }
        }
    }
}
add_action('save_post', 'fpg_save_meta_data');

/**
 * Add customizer settings
 */
function fpg_customize_register($wp_customize) {
    // Hero Section
    $wp_customize->add_section('fpg_hero', array(
        'title' => esc_html__('Sección Hero', 'foro-paz-granada'),
        'priority' => 30,
    ));

    // Hero Image
    $wp_customize->add_setting('fpg_hero_image', array(
        'default' => '',
        'sanitize_callback' => 'esc_url_raw',
    ));

    $wp_customize->add_control(new WP_Customize_Image_Control($wp_customize, 'fpg_hero_image', array(
        'label' => esc_html__('Imagen de Fondo Hero', 'foro-paz-granada'),
        'section' => 'fpg_hero',
        'settings' => 'fpg_hero_image',
    )));

    // Hero Title
    $wp_customize->add_setting('fpg_hero_title', array(
        'default' => 'II Foro Internacional de Paz',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('fpg_hero_title', array(
        'label' => esc_html__('Título Principal', 'foro-paz-granada'),
        'section' => 'fpg_hero',
        'type' => 'text',
    ));

    // Hero Subtitle
    $wp_customize->add_setting('fpg_hero_subtitle', array(
        'default' => 'Violencia y Paz: Tensiones y Oportunidades hacia una Humanidad Común',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('fpg_hero_subtitle', array(
        'label' => esc_html__('Subtítulo', 'foro-paz-granada'),
        'section' => 'fpg_hero',
        'type' => 'textarea',
    ));

    // Contact Information
    $wp_customize->add_section('fpg_contact', array(
        'title' => esc_html__('Información de Contacto', 'foro-paz-granada'),
        'priority' => 35,
    ));

    $wp_customize->add_setting('fpg_contact_email', array(
        'default' => 'unamosculturas@gmail.com',
        'sanitize_callback' => 'sanitize_email',
    ));

    $wp_customize->add_control('fpg_contact_email', array(
        'label' => esc_html__('Email de Contacto', 'foro-paz-granada'),
        'section' => 'fpg_contact',
        'type' => 'email',
    ));

    $wp_customize->add_setting('fpg_contact_phone', array(
        'default' => '+48 515 209 172',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('fpg_contact_phone', array(
        'label' => esc_html__('Teléfono de Contacto', 'foro-paz-granada'),
        'section' => 'fpg_contact',
        'type' => 'text',
    ));
}
add_action('customize_register', 'fpg_customize_register');

/**
 * AJAX handler for contact form
 */
function fpg_handle_contact_form() {
    // Verify nonce
    if (!wp_verify_nonce($_POST['nonce'], 'fpg_nonce')) {
        wp_die(esc_html__('Error de seguridad', 'foro-paz-granada'));
    }

    // Sanitize and validate form data
    $name = sanitize_text_field($_POST['name']);
    $email = sanitize_email($_POST['email']);
    $message = sanitize_textarea_field($_POST['message']);

    if (empty($name) || empty($email) || empty($message)) {
        wp_send_json_error(esc_html__('Todos los campos son obligatorios', 'foro-paz-granada'));
    }

    if (!is_email($email)) {
        wp_send_json_error(esc_html__('Email inválido', 'foro-paz-granada'));
    }

    // Send email
    $to = get_theme_mod('fpg_contact_email', 'unamosculturas@gmail.com');
    $subject = sprintf(esc_html__('Nuevo mensaje del sitio web - %s', 'foro-paz-granada'), $name);
    $body = sprintf(
        esc_html__("Nombre: %s\nEmail: %s\nMensaje:\n%s", 'foro-paz-granada'),
        $name,
        $email,
        $message
    );
    $headers = array('Content-Type: text/html; charset=UTF-8');

    if (wp_mail($to, $subject, $body, $headers)) {
        wp_send_json_success(esc_html__('Mensaje enviado exitosamente', 'foro-paz-granada'));
    } else {
        wp_send_json_error(esc_html__('Error al enviar el mensaje', 'foro-paz-granada'));
    }
}
add_action('wp_ajax_fpg_contact_form', 'fpg_handle_contact_form');
add_action('wp_ajax_nopriv_fpg_contact_form', 'fpg_handle_contact_form');

/**
 * Add admin menu for theme options
 */
function fpg_add_admin_menu() {
    add_theme_page(
        esc_html__('Opciones del Tema', 'foro-paz-granada'),
        esc_html__('Opciones del Tema', 'foro-paz-granada'),
        'manage_options',
        'fpg-theme-options',
        'fpg_theme_options_page'
    );
}
add_action('admin_menu', 'fpg_add_admin_menu');

/**
 * Theme options page
 */
function fpg_theme_options_page() {
    ?>
    <div class="wrap">
        <h1><?php esc_html_e('Opciones del Tema - Foro Paz Granada 2025', 'foro-paz-granada'); ?></h1>
        <p><?php esc_html_e('Para personalizar el tema, utiliza el Personalizador de WordPress.', 'foro-paz-granada'); ?></p>
        <p><a href="<?php echo esc_url(admin_url('customize.php')); ?>" class="button button-primary"><?php esc_html_e('Ir al Personalizador', 'foro-paz-granada'); ?></a></p>
        
        <h2><?php esc_html_e('Información del Tema', 'foro-paz-granada'); ?></h2>
        <table class="form-table">
            <tr>
                <th scope="row"><?php esc_html_e('Versión', 'foro-paz-granada'); ?></th>
                <td><?php echo esc_html(FPG_THEME_VERSION); ?></td>
            </tr>
            <tr>
                <th scope="row"><?php esc_html_e('Documentación', 'foro-paz-granada'); ?></th>
                <td><a href="#" target="_blank"><?php esc_html_e('Ver documentación del tema', 'foro-paz-granada'); ?></a></td>
            </tr>
            <tr>
                <th scope="row"><?php esc_html_e('Soporte', 'foro-paz-granada'); ?></th>
                <td><a href="mailto:soporte@foropazgranada.com"><?php esc_html_e('Contactar soporte', 'foro-paz-granada'); ?></a></td>
            </tr>
        </table>
        
        <h2><?php esc_html_e('Características del Tema', 'foro-paz-granada'); ?></h2>
        <ul>
            <li>✅ <?php esc_html_e('Compatible con Gutenberg', 'foro-paz-granada'); ?></li>
            <li>✅ <?php esc_html_e('Diseño responsive', 'foro-paz-granada'); ?></li>
            <li>✅ <?php esc_html_e('Optimizado para SEO', 'foro-paz-granada'); ?></li>
            <li>✅ <?php esc_html_e('Formularios de contacto integrados', 'foro-paz-granada'); ?></li>
            <li>✅ <?php esc_html_e('Tipos de contenido personalizados', 'foro-paz-granada'); ?></li>
            <li>✅ <?php esc_html_e('Paleta de colores personalizada', 'foro-paz-granada'); ?></li>
        </ul>
    </div>
    <?php
}

/**
 * Include additional files
 */
require_once get_template_directory() . '/inc/template-functions.php';
require_once get_template_directory() . '/inc/customizer.php';

/**
 * Load custom blocks
 */
function fpg_register_blocks() {
    if (function_exists('register_block_type')) {
        // Register custom blocks here
        register_block_type(get_template_directory() . '/blocks/hero-section');
        register_block_type(get_template_directory() . '/blocks/speakers-grid');
        register_block_type(get_template_directory() . '/blocks/program-timeline');
        register_block_type(get_template_directory() . '/blocks/contact-form');
    }
}
add_action('init', 'fpg_register_blocks');

/**
 * Disable WordPress admin bar for non-admins
 */
function fpg_disable_admin_bar() {
    if (!current_user_can('administrator') && !is_admin()) {
        show_admin_bar(false);
    }
}
add_action('after_setup_theme', 'fpg_disable_admin_bar');

/**
 * Security enhancements
 */
// Remove WordPress version from head
remove_action('wp_head', 'wp_generator');

// Disable XML-RPC
add_filter('xmlrpc_enabled', '__return_false');

// Remove unnecessary head links
remove_action('wp_head', 'wlwmanifest_link');
remove_action('wp_head', 'rsd_link');

// Remove emojis
remove_action('wp_head', 'print_emoji_detection_script', 7);
remove_action('wp_print_styles', 'print_emoji_styles');

/**
 * Performance optimizations
 */
// Limit post revisions
if (!defined('WP_POST_REVISIONS')) {
    define('WP_POST_REVISIONS', 3);
}

// Clean up WordPress head
function fpg_cleanup_head() {
    remove_action('wp_head', 'wp_shortlink_wp_head');
    remove_action('wp_head', 'adjacent_posts_rel_link_wp_head');
}
add_action('init', 'fpg_cleanup_head');