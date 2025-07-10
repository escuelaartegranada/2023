    </div><!-- #content -->

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <div class="footer-logo">
                        <?php
                        // Check if custom logo is set
                        if (has_custom_logo()) {
                            the_custom_logo();
                        } else {
                            ?>
                            <i class="fas fa-dove"></i>
                            <span><?php bloginfo('name'); ?></span>
                            <?php
                        }
                        ?>
                    </div>
                    <p><?php echo esc_html(get_bloginfo('description')); ?></p>
                    
                    <?php if (get_theme_mod('fpg_contact_email') || get_theme_mod('fpg_contact_phone')) : ?>
                        <div class="contact-info">
                            <?php if (get_theme_mod('fpg_contact_email')) : ?>
                                <p>
                                    <i class="fas fa-envelope"></i>
                                    <a href="mailto:<?php echo esc_attr(get_theme_mod('fpg_contact_email')); ?>">
                                        <?php echo esc_html(get_theme_mod('fpg_contact_email')); ?>
                                    </a>
                                </p>
                            <?php endif; ?>
                            
                            <?php if (get_theme_mod('fpg_contact_phone')) : ?>
                                <p>
                                    <i class="fas fa-phone"></i>
                                    <a href="tel:<?php echo esc_attr(get_theme_mod('fpg_contact_phone')); ?>">
                                        <?php echo esc_html(get_theme_mod('fpg_contact_phone')); ?>
                                    </a>
                                </p>
                            <?php endif; ?>
                        </div>
                    <?php endif; ?>
                </div>
                
                <?php if (is_active_sidebar('footer-1')) : ?>
                    <div class="footer-section">
                        <?php dynamic_sidebar('footer-1'); ?>
                    </div>
                <?php endif; ?>
                
                <?php if (is_active_sidebar('footer-2')) : ?>
                    <div class="footer-section">
                        <?php dynamic_sidebar('footer-2'); ?>
                    </div>
                <?php endif; ?>
                
                <?php if (is_active_sidebar('footer-3')) : ?>
                    <div class="footer-section">
                        <?php dynamic_sidebar('footer-3'); ?>
                    </div>
                <?php else : ?>
                    <div class="footer-section">
                        <h4><?php esc_html_e('Enlaces Útiles', 'foro-paz-granada'); ?></h4>
                        <?php
                        wp_nav_menu(array(
                            'theme_location' => 'footer',
                            'menu_class'     => 'footer-menu',
                            'container'      => false,
                            'fallback_cb'    => false,
                        ));
                        ?>
                    </div>
                <?php endif; ?>
            </div>
            
            <div class="footer-bottom">
                <p>
                    &copy; <?php echo esc_html(date('Y')); ?> 
                    <a href="<?php echo esc_url(home_url('/')); ?>"><?php bloginfo('name'); ?></a>. 
                    <?php esc_html_e('Todos los derechos reservados.', 'foro-paz-granada'); ?>
                    
                    <?php if (!is_front_page()) : ?>
                        <span class="sep"> | </span>
                        <a href="<?php echo esc_url(home_url('/')); ?>">
                            <?php esc_html_e('Volver al inicio', 'foro-paz-granada'); ?>
                        </a>
                    <?php endif; ?>
                </p>
                
                <?php if (function_exists('wp_privacy_policy_url') && wp_privacy_policy_url()) : ?>
                    <p class="privacy-policy">
                        <a href="<?php echo esc_url(wp_privacy_policy_url()); ?>">
                            <?php esc_html_e('Política de Privacidad', 'foro-paz-granada'); ?>
                        </a>
                    </p>
                <?php endif; ?>
            </div>
        </div>
    </footer>

    <!-- Call to Action Final -->
    <?php if (is_front_page()) : ?>
        <section class="final-cta">
            <div class="container">
                <div class="cta-content">
                    <h2><?php esc_html_e('¿Y tú, qué haces por la paz?', 'foro-paz-granada'); ?></h2>
                    <p><?php esc_html_e('La paz se construye desde la acción individual y colectiva. Reconocémonos como agentes de transformación.', 'foro-paz-granada'); ?></p>
                    <a href="#inscripcion" class="btn btn-primary btn-large">
                        <i class="fas fa-heart"></i>
                        <?php esc_html_e('Únete al Movimiento', 'foro-paz-granada'); ?>
                    </a>
                </div>
            </div>
        </section>
    <?php endif; ?>

    <!-- Back to Top Button -->
    <button id="backToTop" class="back-to-top" title="<?php esc_attr_e('Volver arriba', 'foro-paz-granada'); ?>">
        <i class="fas fa-chevron-up"></i>
    </button>

</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>