<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @package ForoPazGranada
 * @version 1.0.0
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    
    <!-- SEO Meta Tags -->
    <meta name="description" content="<?php echo esc_attr(get_bloginfo('description')); ?>">
    <meta name="keywords" content="foro internacional, paz, Granada, 2025, conferencia, violencia, noviolencia, justicia social">
    <meta name="author" content="Fundación Unamos Culturas">
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="<?php echo esc_url(home_url('/')); ?>">
    <meta property="og:title" content="<?php bloginfo('name'); ?>">
    <meta property="og:description" content="<?php echo esc_attr(get_bloginfo('description')); ?>">
    <meta property="og:image" content="<?php echo esc_url(get_theme_mod('fpg_hero_image', get_template_directory_uri() . '/assets/images/og-image.jpg')); ?>">
    
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="<?php echo esc_url(home_url('/')); ?>">
    <meta property="twitter:title" content="<?php bloginfo('name'); ?>">
    <meta property="twitter:description" content="<?php echo esc_attr(get_bloginfo('description')); ?>">
    <meta property="twitter:image" content="<?php echo esc_url(get_theme_mod('fpg_hero_image', get_template_directory_uri() . '/assets/images/og-image.jpg')); ?>">
    
    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="<?php echo esc_url(get_template_directory_uri() . '/assets/images/favicon.ico'); ?>">
    <link rel="apple-touch-icon" sizes="180x180" href="<?php echo esc_url(get_template_directory_uri() . '/assets/images/apple-touch-icon.png'); ?>">
    
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<!-- Preloader -->
<div id="preloader">
    <div class="loader">
        <div class="peace-symbol">
            <i class="fas fa-dove"></i>
        </div>
        <div class="loader-text"><?php esc_html_e('Cargando...', 'foro-paz-granada'); ?></div>
    </div>
</div>

<div id="page" class="site">
    <a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e('Saltar al contenido', 'foro-paz-granada'); ?></a>

    <!-- Navigation -->
    <nav class="navbar" id="navbar">
        <div class="nav-container">
            <div class="nav-logo">
                <?php
                // Check if custom logo is set
                if (has_custom_logo()) {
                    the_custom_logo();
                } else {
                    ?>
                    <a href="<?php echo esc_url(home_url('/')); ?>" rel="home">
                        <i class="fas fa-dove"></i>
                        <span><?php bloginfo('name'); ?></span>
                    </a>
                    <?php
                }
                ?>
            </div>
            
            <?php
            wp_nav_menu(array(
                'theme_location' => 'primary',
                'menu_id'        => 'primary-menu',
                'menu_class'     => 'nav-menu',
                'container'      => false,
                'fallback_cb'    => 'fpg_default_menu',
            ));
            ?>
            
            <div class="nav-toggle" id="nav-toggle">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </div>
    </nav>

    <?php
    // Show hero section only on front page
    if (is_front_page()) :
        fpg_hero_section();
    endif;
    ?>

    <div id="content" class="site-content">