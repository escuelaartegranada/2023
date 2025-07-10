<?php
/**
 * The front page template file
 *
 * This template displays the main landing page content for the forum
 *
 * @package ForoPazGranada
 * @version 1.0.0
 */

get_header();
?>

<main id="primary" class="site-main">

    <!-- About Section -->
    <section id="sobre-foro" class="about-section">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title"><?php esc_html_e('Sobre el Foro', 'foro-paz-granada'); ?></h2>
                <p class="section-subtitle"><?php esc_html_e('Un encuentro plural y riguroso por la paz mundial', 'foro-paz-granada'); ?></p>
            </div>
            
            <div class="about-grid">
                <div class="about-card">
                    <div class="card-icon">
                        <i class="fas fa-globe"></i>
                    </div>
                    <h3><?php esc_html_e('Propósito y Misión', 'foro-paz-granada'); ?></h3>
                    <p><?php esc_html_e('Espacio de encuentro que convoca a académicos, líderes sociales, representantes institucionales, artistas, comunidades y ciudadanía comprometida con la construcción de la paz, la justicia social y la noviolencia.', 'foro-paz-granada'); ?></p>
                </div>
                
                <div class="about-card">
                    <div class="card-icon">
                        <i class="fas fa-landmark"></i>
                    </div>
                    <h3><?php esc_html_e('Granada: Capital Mundial de la Paz', 'foro-paz-granada'); ?></h3>
                    <p><?php esc_html_e('El II Foro reafirma a Granada como faro de paz y noviolencia, continuando un proceso ético, académico y comunitario que une universidades, instituciones culturales y ciudadanos.', 'foro-paz-granada'); ?></p>
                </div>
                
                <div class="about-card">
                    <div class="card-icon">
                        <i class="fas fa-handshake"></i>
                    </div>
                    <h3><?php esc_html_e('Cooperación Institucional', 'foro-paz-granada'); ?></h3>
                    <p><?php esc_html_e('Organizado por la Fundación Unamos Culturas en cooperación con el Instituto de la Paz y los Conflictos (IPAZ) de la Universidad de Granada, Instituto CAPAZ y múltiples entidades colaboradoras.', 'foro-paz-granada'); ?></p>
                </div>
            </div>
        </div>
    </section>

    <!-- Program Section -->
    <section id="programa" class="program-section">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title"><?php esc_html_e('Programa General', 'foro-paz-granada'); ?></h2>
                <p class="section-subtitle"><?php esc_html_e('Actividades destacadas del Foro', 'foro-paz-granada'); ?></p>
            </div>
            
            <div class="program-timeline">
                <div class="timeline-item">
                    <div class="timeline-date">
                        <div class="date-circle">20</div>
                        <span><?php esc_html_e('Octubre', 'foro-paz-granada'); ?></span>
                    </div>
                    <div class="timeline-content">
                        <h3><i class="fas fa-play-circle"></i> <?php esc_html_e('Inauguración Oficial', 'foro-paz-granada'); ?></h3>
                        <p><strong><?php esc_html_e('10:00 horas - Palacio de Carlos V de la Alhambra', 'foro-paz-granada'); ?></strong></p>
                        <ul>
                            <li><?php esc_html_e('Intervención musical del Conservatorio Profesional de Música de Granada', 'foro-paz-granada'); ?></li>
                            <li><?php esc_html_e('Palabras de apertura de autoridades municipales y académicas', 'foro-paz-granada'); ?></li>
                            <li><?php esc_html_e('Espectáculo Odysée: stomp-motion musical', 'foro-paz-granada'); ?></li>
                            <li><?php esc_html_e('Acto conmemorativo en el Jardín de la Paz', 'foro-paz-granada'); ?></li>
                        </ul>
                    </div>
                </div>
                
                <div class="timeline-item">
                    <div class="timeline-date">
                        <div class="date-circle">21-24</div>
                        <span><?php esc_html_e('Octubre', 'foro-paz-granada'); ?></span>
                    </div>
                    <div class="timeline-content">
                        <h3><i class="fas fa-users"></i> <?php esc_html_e('Conferencias y Actividades', 'foro-paz-granada'); ?></h3>
                        <p><strong><?php esc_html_e('Ponentes Destacados:', 'foro-paz-granada'); ?></strong></p>
                        <ul>
                            <li><?php esc_html_e('Padre Francisco de Roux (proceso de paz colombiano)', 'foro-paz-granada'); ?></li>
                            <li><?php esc_html_e('Catedrático Mario López (IPAZ)', 'foro-paz-granada'); ?></li>
                            <li><?php esc_html_e('Dr. Jinfeng Zhou, Dr. Stefan Peters, Dr. Ashok Swain', 'foro-paz-granada'); ?></li>
                            <li><?php esc_html_e('Dr. Jenny Pearce, Carlos Milton', 'foro-paz-granada'); ?></li>
                        </ul>
                    </div>
                </div>
                
                <div class="timeline-item">
                    <div class="timeline-date">
                        <div class="date-circle">25</div>
                        <span><?php esc_html_e('Octubre', 'foro-paz-granada'); ?></span>
                    </div>
                    <div class="timeline-content">
                        <h3><i class="fas fa-music"></i> <?php esc_html_e('Clausura Oficial', 'foro-paz-granada'); ?></h3>
                        <p><strong><?php esc_html_e('Concierto de Luis Guitarra', 'foro-paz-granada'); ?></strong></p>
                        <ul>
                            <li><?php esc_html_e('Himno Oficial: "Desaprender la guerra"', 'foro-paz-granada'); ?></li>
                            <li><?php esc_html_e('Premiación Carmen de los Mártires', 'foro-paz-granada'); ?></li>
                            <li><?php esc_html_e('Presentación Colección Eirene Wolfgang Dietrich', 'foro-paz-granada'); ?></li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div class="cultural-activities">
                <h3><i class="fas fa-palette"></i> <?php esc_html_e('Exposiciones y Actividades Culturales', 'foro-paz-granada'); ?></h3>
                <div class="activities-grid">
                    <div class="activity-card">
                        <h4><?php esc_html_e('Abya Yala y Amazigh', 'foro-paz-granada'); ?></h4>
                        <p><?php esc_html_e('Casa Max Moreau', 'foro-paz-granada'); ?></p>
                    </div>
                    <div class="activity-card">
                        <h4><?php esc_html_e('Paz desde México', 'foro-paz-granada'); ?></h4>
                        <p><?php esc_html_e('La Corrala de Santiago', 'foro-paz-granada'); ?></p>
                    </div>
                    <div class="activity-card">
                        <h4><?php esc_html_e('Memorias en Resistencias', 'foro-paz-granada'); ?></h4>
                        <p><?php esc_html_e('Colectiva Fotografía', 'foro-paz-granada'); ?></p>
                    </div>
                    <div class="activity-card">
                        <h4><?php esc_html_e('Trazos de Paz Michael Picado', 'foro-paz-granada'); ?></h4>
                        <p><?php esc_html_e('Escuela de Arte Granada', 'foro-paz-granada'); ?></p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Symposium Section -->
    <section id="simposio" class="symposium-section">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title"><?php esc_html_e('II Simposio Internacional de Investigación para la Paz', 'foro-paz-granada'); ?></h2>
                <p class="section-subtitle"><?php esc_html_e('Modalidad virtual - 28 al 30 de octubre de 2025', 'foro-paz-granada'); ?></p>
            </div>
            
            <div class="symposium-info">
                <div class="info-card">
                    <h3><i class="fas fa-laptop"></i> <?php esc_html_e('Modalidad Virtual', 'foro-paz-granada'); ?></h3>
                    <p><?php esc_html_e('Espacio riguroso para la presentación y debate de investigaciones sobre paz, conflictos, justicia transicional, memorias colectivas, educación, seguridad humana y desarrollo sostenible.', 'foro-paz-granada'); ?></p>
                </div>
                
                <div class="info-card">
                    <h3><i class="fas fa-calendar-check"></i> <?php esc_html_e('Fechas Importantes', 'foro-paz-granada'); ?></h3>
                    <ul>
                        <li><strong><?php esc_html_e('Envío de propuestas:', 'foro-paz-granada'); ?></strong> <?php esc_html_e('Hasta 15 de agosto de 2025', 'foro-paz-granada'); ?></li>
                        <li><strong><?php esc_html_e('Comunicación de resultados:', 'foro-paz-granada'); ?></strong> <?php esc_html_e('Septiembre 2025', 'foro-paz-granada'); ?></li>
                        <li><strong><?php esc_html_e('Inscripción:', 'foro-paz-granada'); ?></strong> <?php esc_html_e('15 sep - 15 oct 2025', 'foro-paz-granada'); ?></li>
                        <li><strong><?php esc_html_e('Simposio:', 'foro-paz-granada'); ?></strong> <?php esc_html_e('28-30 octubre 2025', 'foro-paz-granada'); ?></li>
                    </ul>
                </div>
                
                <div class="info-card">
                    <h3><i class="fas fa-dollar-sign"></i> <?php esc_html_e('Costos', 'foro-paz-granada'); ?></h3>
                    <ul>
                        <li><strong><?php esc_html_e('Inscripción al Simposio:', 'foro-paz-granada'); ?></strong> $35 USD</li>
                        <li><strong><?php esc_html_e('Ponencias aprobadas:', 'foro-paz-granada'); ?></strong> $40 USD</li>
                    </ul>
                </div>
            </div>
            
            <div class="thematic-tables">
                <h3><?php esc_html_e('Mesas Temáticas', 'foro-paz-granada'); ?></h3>
                <div class="tables-grid">
                    <?php
                    $tables = array(
                        'Memoria colectiva y reconciliación postconflicto',
                        'Violencia estructural e impacto en comunidades indígenas',
                        'Justicia transicional y derechos humanos',
                        'Ecología política, ecoviolencias y justicia ambiental',
                        'Género, mujeres y paz',
                        'Arte, memoria y cultura de paz',
                        'Comunicación transformadora, educación para la paz',
                        'Resistencias globales',
                        'Historia contemporánea de la paz',
                        'Autocracias, conflictos armados y élites económicas',
                        'Democracia situada, saberes del Sur',
                        'Teorías, filosofías y epistemologías de la paz'
                    );
                    
                    foreach ($tables as $table) :
                        ?>
                        <div class="table-card">
                            <h4><?php echo esc_html($table); ?></h4>
                        </div>
                        <?php
                    endforeach;
                    ?>
                </div>
            </div>
        </div>
    </section>

    <!-- Registration Form Section -->
    <section id="inscripcion" class="registration-section">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title"><?php esc_html_e('Inscripción', 'foro-paz-granada'); ?></h2>
                <p class="section-subtitle"><?php esc_html_e('Únete al movimiento por la paz mundial', 'foro-paz-granada'); ?></p>
            </div>
            
            <?php echo do_shortcode('[fpg_registration_form]'); ?>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contacto" class="contact-section">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title"><?php esc_html_e('Contacto', 'foro-paz-granada'); ?></h2>
                <p class="section-subtitle"><?php esc_html_e('¿Tienes preguntas? Estamos aquí para ayudarte', 'foro-paz-granada'); ?></p>
            </div>
            
            <div class="contact-content">
                <div class="contact-info">
                    <div class="contact-card">
                        <div class="contact-icon">
                            <i class="fas fa-building"></i>
                        </div>
                        <h3><?php esc_html_e('Entidad Responsable', 'foro-paz-granada'); ?></h3>
                        <p><?php esc_html_e('Fundación Unamos Culturas', 'foro-paz-granada'); ?></p>
                    </div>
                    
                    <div class="contact-card">
                        <div class="contact-icon">
                            <i class="fas fa-envelope"></i>
                        </div>
                        <h3><?php esc_html_e('Correo Electrónico', 'foro-paz-granada'); ?></h3>
                        <a href="mailto:<?php echo esc_attr(get_theme_mod('fpg_contact_email', 'unamosculturas@gmail.com')); ?>">
                            <?php echo esc_html(get_theme_mod('fpg_contact_email', 'unamosculturas@gmail.com')); ?>
                        </a>
                    </div>
                    
                    <div class="contact-card">
                        <div class="contact-icon">
                            <i class="fas fa-phone"></i>
                        </div>
                        <h3><?php esc_html_e('Teléfono', 'foro-paz-granada'); ?></h3>
                        <a href="tel:<?php echo esc_attr(get_theme_mod('fpg_contact_phone', '+48515209172')); ?>">
                            <?php echo esc_html(get_theme_mod('fpg_contact_phone', '+48 515 209 172')); ?>
                        </a>
                    </div>
                </div>
                
                <div class="additional-info">
                    <h3><i class="fas fa-university"></i> <?php esc_html_e('Instituciones Colaboradoras', 'foro-paz-granada'); ?></h3>
                    <div class="collaborators">
                        <ul>
                            <li><?php esc_html_e('Instituto de la Paz y los Conflictos (IPAZ) - Universidad de Granada', 'foro-paz-granada'); ?></li>
                            <li><?php esc_html_e('Instituto CAPAZ', 'foro-paz-granada'); ?></li>
                            <li><?php esc_html_e('Facultad de Relaciones Internacionales - Universidad de Łódź', 'foro-paz-granada'); ?></li>
                            <li><?php esc_html_e('Patronato de la Alhambra y Generalife', 'foro-paz-granada'); ?></li>
                            <li><?php esc_html_e('Jurisdicción Especial para la Paz de Colombia', 'foro-paz-granada'); ?></li>
                            <li><?php esc_html_e('Cátedra UNESCO de Cultura y Educación para la Paz (UTPL)', 'foro-paz-granada'); ?></li>
                            <li><?php esc_html_e('Instituto Confucio', 'foro-paz-granada'); ?></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- WordPress Content -->
    <?php
    while (have_posts()) :
        the_post();
        
        if (get_the_content()) :
            ?>
            <section class="page-content">
                <div class="container">
                    <div class="entry-content">
                        <?php
                        the_content();
                        
                        wp_link_pages(array(
                            'before' => '<div class="page-links">' . esc_html__('Páginas:', 'foro-paz-granada'),
                            'after'  => '</div>',
                        ));
                        ?>
                    </div>
                </div>
            </section>
            <?php
        endif;
        
        // If comments are open or we have at least one comment, load up the comment template
        if (comments_open() || get_comments_number()) :
            comments_template();
        endif;
        
    endwhile; // End of the loop
    ?>

</main>

<?php
get_footer();
?>