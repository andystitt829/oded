<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Oded
 */

?>

	</div><!-- #content -->

	<footer id="colophon" class="mdl-mini-footer site-footer" role="contentinfo" itemscope itemtype="http://schema.org/WPFooter">
		<div class="container">
			<div class="row">
				<div class="col-xs-12 col-md-12 site-info">
					<a href="<?php echo esc_url( __( 'https://wordpress.org/', 'oded' ) ); ?>"><?php printf( esc_html__( 'Proudly powered by %s', 'oded' ), 'WordPress' ); ?></a>
					<span class="sep"> | </span>
					<?php printf( esc_html__( 'Theme: %1$s by %2$s.', 'oded' ), 'Oded', '<a href="https://andystitt.com" rel="designer">Andy Stitt</a>' ); ?>
				</div><!-- .site-info -->
			</div>
		</div>
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
