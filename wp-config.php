<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

if ( !defined('WP_CLI') ) {
    define( 'WP_SITEURL', $_SERVER['REQUEST_SCHEME'] . '://' . $_SERVER['HTTP_HOST'] );
    define( 'WP_HOME',    $_SERVER['REQUEST_SCHEME'] . '://' . $_SERVER['HTTP_HOST'] );
}



/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'kgO48Ma8LBAYWXOKjhtW0QSpuP0IUOkKj9vulhl5iM8usNqJCCihWGW2iLL4bLi9' );
define( 'SECURE_AUTH_KEY',  '6oTqEpk3OJSoN3pJiOWB6wCp52TQUQBFabU2CxJmdLrIJCZFe0urQF0TkU6nBScK' );
define( 'LOGGED_IN_KEY',    'YhoQ1WT5lub96YsgFXVTVJTqYoLLeccisDA6PtHg4KbWk12fATwheu7QuX5AMJhL' );
define( 'NONCE_KEY',        'PlzbYOBSQz6gBIgazHlPB5zBHDR76l8clB5EEuu4UnpAvDbIZMUEHWmroyqZiSY9' );
define( 'AUTH_SALT',        'YSO0wvUAOzwL4pbGy7L7CgxtW7ZF2j4DWWoR1X2UMdjor0efQk9inFOdw4mvYx0b' );
define( 'SECURE_AUTH_SALT', 'kdrCRJ7L0aHrUDJyFl3WEADlmwAg9HF9rF9F01TDFyRbi2pDgOUgrW6tmACysf2C' );
define( 'LOGGED_IN_SALT',   '9aR4M28TfXorxWyb7i5YJ0Yc7R7YBVCNIcIIPcs3AUIYYBQGObKSghZHC0zFy5jR' );
define( 'NONCE_SALT',       'fqHdHMy8Si1qRqI34iCHhrbBvyquAbeH8AmUsMYEwPLuPP4WJ45fceNtm4IGw9sn' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
