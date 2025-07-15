    </div><!-- #content -->

    <!-- Footer -->
    <footer class="main-footer">
      <div class="footer-content">
        <div class="footer-logos">
          <img src="assets/img/logo-foro.png" alt="Logo Foro" height="40">
          <img src="assets/img/logo-ipaz.png" alt="Logo IPAZ" height="40">
          <!-- Agrega más logos si es necesario -->
        </div>
        <div class="footer-info">
          <p>&copy; 2025 II Foro Internacional de Paz Granada. Fundación Unamos Culturas & IPAZ - Universidad de Granada.</p>
          <p>Licencia CC BY-NC-SA 4.0 | ISBN pendiente</p>
          <p>Contacto: unamosculturas@gmail.com | +48 515 209 172</p>
        </div>
        <div class="footer-links">
          <a href="#program">Programa</a> |
          <a href="#galeria">Galería</a> |
          <a href="#noticias">Noticias</a> |
          <a href="#contact">Contacto</a>
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