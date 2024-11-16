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
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('WP_CACHE', true);
define( 'WPCACHEHOME', '/Users/milliandvalentin/Local Sites/chicdressing/app/public/wp-content/plugins/wp-super-cache/' );
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

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
define( 'AUTH_KEY',          'V+G~t+.xAy#EL4a},x%M%CpR_%%Ipm/D~$,dWg$[iG2b#YDxFZEH 2fD<RdAdWI!' );
define( 'SECURE_AUTH_KEY',   '5:zdk19*rcc;G _m_)*exBMM0oYsDiBC^oSM6l=ZAomqh5i1|~k^e0GvG-ZR?klX' );
define( 'LOGGED_IN_KEY',     'F>N|l7wj{3cRU?$j,U})q^Rr<{Mu1U/nylOcIOr6hy)^+NL9p/!DH$dZUow~@*>L' );
define( 'NONCE_KEY',         '#y~`.i!;[zL&|(KpIxwtlwIPf~*9M+~RLG4h.6*eh6$fg|kQ_u5>pjE;j:EBW[f7' );
define( 'AUTH_SALT',         '?_zuo?LZj6XsX|5^tg@y$AgzUE=X+no^7sgI~hO7>;bl%B$3-YMc%E7F&hU.vgT<' );
define( 'SECURE_AUTH_SALT',  'gvxwpt,Jbkv0:Hc}*?AXg&~9+73b3#mkcsW=~zVz:L0Rt,J^%04aKR5DB2BR=zzO' );
define( 'LOGGED_IN_SALT',    'Crb$^ie*cczD/kqKaAk8]xeyq`nh/vcq:SerC@ wB;BCLU/68X fL;by{@NE3R$O' );
define( 'NONCE_SALT',        ':EQ=:E1GO{FWmpDuj}Wu>sED 1Y4OCl;z+o{ioG^aj^<cYF5`QTZp uc<H4Y7cTB' );
define( 'WP_CACHE_KEY_SALT', 'ZmhLNZ,9WDPz#O9bad-UZ|NajuY#(X{s#. J%Sse7D0x#wOO o@7|eROalwHC0n{' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



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
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
