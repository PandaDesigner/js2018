// Register Custom Post Type
function cpt_tratamientos() {

	$labels = array(
		'name'                  => _x( 'Tratamientos', 'Post Type General Name', 'text_domain' ),
		'singular_name'         => _x( 'Tratamiento', 'Post Type Singular Name', 'text_domain' ),
		'menu_name'             => __( 'Tratamientos', 'text_domain' ),
		'name_admin_bar'        => __( 'Tratamientos', 'text_domain' ),
		'archives'              => __( 'Tipos de Tratamientos', 'text_domain' ),
		'attributes'            => __( 'Atributos', 'text_domain' ),
		'parent_item_colon'     => __( 'Tratamiento principal', 'text_domain' ),
		'all_items'             => __( 'Todos los Tratamientos', 'text_domain' ),
		'add_new_item'          => __( 'Agregar nuevo Tratamiento', 'text_domain' ),
		'add_new'               => __( 'Agregar nuevo', 'text_domain' ),
		'new_item'              => __( 'Nuevo tratamiento', 'text_domain' ),
		'edit_item'             => __( 'Editar trataiento', 'text_domain' ),
		'update_item'           => __( 'Subir tratamiento', 'text_domain' ),
		'view_item'             => __( 'Ver tratamiento', 'text_domain' ),
		'view_items'            => __( 'Ver tratamientos', 'text_domain' ),
		'search_items'          => __( 'buscar tratamiento', 'text_domain' ),
		'not_found'             => __( 'No hay tratamiento', 'text_domain' ),
		'not_found_in_trash'    => __( 'No hay tratamientos en la papelera', 'text_domain' ),
		'featured_image'        => __( 'imagen del tratamiento', 'text_domain' ),
		'set_featured_image'    => __( 'Establecer imangen del tratamiento', 'text_domain' ),
		'remove_featured_image' => __( 'Eliminar imagen del tratamiento', 'text_domain' ),
		'use_featured_image'    => __( 'Usar como imagen destacada', 'text_domain' ),
		'insert_into_item'      => __( 'Insertar imagen del tratamieto', 'text_domain' ),
		'uploaded_to_this_item' => __( 'Subido a este tratamiento', 'text_domain' ),
		'items_list'            => __( 'Lista de tratamiento', 'text_domain' ),
		'items_list_navigation' => __( 'Listas de tratamientos', 'text_domain' ),
		'filter_items_list'     => __( 'Filtrar lista de trataientos', 'text_domain' ),
	);
	$args = array(
		'label'                 => __( 'Tratamiento', 'text_domain' ),
		'description'           => __( 'tratamientos odontologicos', 'text_domain' ),
		'labels'                => $labels,
		'supports'              => array( 'title', 'editor', 'thumbnail', 'revisions' ),
		'taxonomies'            => array( 'category', 'post_tag' ),
		'hierarchical'          => true,
		'public'                => true,
		'show_ui'               => true,
		'show_in_menu'          => true,
		'menu_position'         => 5,
		'menu_icon'             => 'dashicons-nametag',
		'show_in_admin_bar'     => true,
		'show_in_nav_menus'     => true,
		'can_export'            => true,
		'has_archive'           => 'tratamiento',
		'exclude_from_search'   => false,
		'publicly_queryable'    => true,
		'capability_type'       => 'page',
		'show_in_rest'          => true,
	);
	register_post_type( 'tratamientos', $args );

}
add_action( 'init', 'cpt_tratamientos', 0 );