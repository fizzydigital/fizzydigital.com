// Load Grunt.js

grunt = require( 'grunt' );

// Load config files

require( './grunt/config.variables.js' );
require( './grunt/config.tasks.js' );

// Load module settings

require( './grunt/config.settings.js' );

// Load Grunt modules

require( 'load-grunt-tasks' )( grunt, { pattern: [ 'grunt-*' ] } );