// Register Custom Post Type
function cpt_doctor() {

	$labels = array(
		'name'                  => _x( 'Doctores', 'Post Type General Name', 'text_domain' ),
		'singular_name'         => _x( 'Doctor', 'Post Type Singular Name', 'text_domain' ),
		'menu_name'             => __( 'Doctores', 'text_domain' ),
		'name_admin_bar'        => __( 'Doctores', 'text_domain' ),
		'archives'              => __( 'Doctor Referencia', 'text_domain' ),
		'attributes'            => __( 'Atributos', 'text_domain' ),
		'parent_item_colon'     => __( 'Doctor principal', 'text_domain' ),
		'all_items'             => __( 'Todos los Doctores', 'text_domain' ),
		'add_new_item'          => __( 'Agregar nuevo Doctor', 'text_domain' ),
		'add_new'               => __( 'Agregar nuevo', 'text_domain' ),
		'new_item'              => __( 'Nuevo doctor', 'text_domain' ),
		'edit_item'             => __( 'Editar doctor', 'text_domain' ),
		'update_item'           => __( 'Subir doctor', 'text_domain' ),
		'view_item'             => __( 'Ver doctor', 'text_domain' ),
		'view_items'            => __( 'Ver doctores', 'text_domain' ),
		'search_items'          => __( 'buscar doctor', 'text_domain' ),
		'not_found'             => __( 'No hay doctor', 'text_domain' ),
		'not_found_in_trash'    => __( 'No hay doctor en la papelera', 'text_domain' ),
		'featured_image'        => __( 'imagen del doctor', 'text_domain' ),
		'set_featured_image'    => __( 'Establecer imangen del doctor', 'text_domain' ),
		'remove_featured_image' => __( 'Eliminar imagen del doctor', 'text_domain' ),
		'use_featured_image'    => __( 'Usar como imagen destacada', 'text_domain' ),
		'insert_into_item'      => __( 'Insertar imagen del doctor', 'text_domain' ),
		'uploaded_to_this_item' => __( 'Subido a este doctor', 'text_domain' ),
		'items_list'            => __( 'Lista de doctor', 'text_domain' ),
		'items_list_navigation' => __( 'Listas de doctor', 'text_domain' ),
		'filter_items_list'     => __( 'Filtrar lista de doctores', 'text_domain' ),
	);
	$args = array(
		'label'                 => __( 'Doctor', 'text_domain' ),
		'description'           => __( 'odontologo', 'text_domain' ),
		'labels'                => $labels,
		'supports'              => array( 'title', 'editor', 'thumbnail', 'revisions', 'custom-fields' ),
		'taxonomies'            => array( 'category', 'post_tag' ),
		'hierarchical'          => false,
		'public'                => true,
		'show_ui'               => true,
		'show_in_menu'          => true,
		'menu_position'         => 5,
		'menu_icon'             => 'dashicons-businessman',
		'show_in_admin_bar'     => true,
		'show_in_nav_menus'     => true,
		'can_export'            => true,
		'has_archive'           => 'tratamiento',
		'exclude_from_search'   => false,
		'publicly_queryable'    => true,
		'capability_type'       => 'page',
		'show_in_rest'          => true,
	);
	register_post_type( 'doctor', $args );

}
add_action( 'init', 'cpt_doctor', 0 );