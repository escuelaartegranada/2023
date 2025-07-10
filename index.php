<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 *
 * @package ForoPazGranada
 * @version 1.0.0
 */

get_header();
?>

<main id="primary" class="site-main">
    <div class="container">
        
        <?php if (have_posts()) : ?>

            <?php if (is_home() && !is_front_page()) : ?>
                <header class="page-header">
                    <h1 class="page-title screen-reader-text"><?php single_post_title(); ?></h1>
                </header>
            <?php endif; ?>

            <div class="posts-container">
                <?php
                // Start the Loop
                while (have_posts()) :
                    the_post();
                    ?>
                    <article id="post-<?php the_ID(); ?>" <?php post_class('post-card'); ?>>
                        
                        <?php if (has_post_thumbnail()) : ?>
                            <div class="post-thumbnail">
                                <a href="<?php the_permalink(); ?>">
                                    <?php the_post_thumbnail('fpg-card', array('alt' => get_the_title())); ?>
                                </a>
                            </div>
                        <?php endif; ?>
                        
                        <div class="post-content">
                            <header class="entry-header">
                                <div class="entry-meta">
                                    <time class="published" datetime="<?php echo esc_attr(get_the_date('c')); ?>">
                                        <i class="fas fa-calendar-alt"></i>
                                        <?php echo esc_html(get_the_date()); ?>
                                    </time>
                                    
                                    <?php
                                    $categories = get_the_category();
                                    if (!empty($categories)) :
                                        ?>
                                        <span class="categories">
                                            <i class="fas fa-folder"></i>
                                            <?php
                                            foreach ($categories as $category) {
                                                echo '<a href="' . esc_url(get_category_link($category->term_id)) . '" class="category-link">' . esc_html($category->name) . '</a>';
                                            }
                                            ?>
                                        </span>
                                    <?php endif; ?>
                                </div>
                                
                                <?php
                                if (is_singular()) :
                                    the_title('<h1 class="entry-title">', '</h1>');
                                else :
                                    the_title('<h2 class="entry-title"><a href="' . esc_url(get_permalink()) . '" rel="bookmark">', '</a></h2>');
                                endif;
                                ?>
                            </header>
                            
                            <div class="entry-content">
                                <?php
                                if (is_singular()) {
                                    the_content();
                                } else {
                                    the_excerpt();
                                }
                                
                                wp_link_pages(array(
                                    'before' => '<div class="page-links">' . esc_html__('Páginas:', 'foro-paz-granada'),
                                    'after'  => '</div>',
                                ));
                                ?>
                            </div>
                            
                            <?php if (!is_singular()) : ?>
                                <footer class="entry-footer">
                                    <a href="<?php the_permalink(); ?>" class="read-more btn btn-primary">
                                        <?php esc_html_e('Leer más', 'foro-paz-granada'); ?>
                                        <i class="fas fa-arrow-right"></i>
                                    </a>
                                </footer>
                            <?php endif; ?>
                        </div>
                    </article>

                    <?php
                    // If comments are open or we have at least one comment, load up the comment template
                    if (is_singular() && (comments_open() || get_comments_number())) :
                        comments_template();
                    endif;

                endwhile; // End of the loop
                ?>
            </div>

            <?php
            // Previous/next page navigation
            the_posts_navigation(array(
                'prev_text' => '<i class="fas fa-chevron-left"></i> ' . esc_html__('Anteriores', 'foro-paz-granada'),
                'next_text' => esc_html__('Siguientes', 'foro-paz-granada') . ' <i class="fas fa-chevron-right"></i>',
            ));

        else :
            ?>
            <section class="no-results not-found">
                <header class="page-header">
                    <h1 class="page-title"><?php esc_html_e('No se encontró nada', 'foro-paz-granada'); ?></h1>
                </header>

                <div class="page-content">
                    <?php if (is_home() && current_user_can('publish_posts')) : ?>
                        <p>
                            <?php
                            printf(
                                wp_kses(
                                    __('¿Listo para publicar tu primer post? <a href="%1$s">Empieza aquí</a>.', 'foro-paz-granada'),
                                    array(
                                        'a' => array(
                                            'href' => array(),
                                        ),
                                    )
                                ),
                                esc_url(admin_url('post-new.php'))
                            );
                            ?>
                        </p>
                    <?php elseif (is_search()) : ?>
                        <p><?php esc_html_e('Lo sentimos, pero no se encontraron resultados para tu búsqueda. Intenta de nuevo con diferentes palabras clave.', 'foro-paz-granada'); ?></p>
                        <?php get_search_form(); ?>
                    <?php else : ?>
                        <p><?php esc_html_e('Parece que no pudimos encontrar lo que estás buscando. Tal vez la búsqueda pueda ayudar.', 'foro-paz-granada'); ?></p>
                        <?php get_search_form(); ?>
                    <?php endif; ?>
                </div>
            </section>

        <?php endif; ?>
        
    </div>
</main>

<?php
get_sidebar();
get_footer();
?>