// Register tasks
	
grunt.registerTask( 'noop', 'Empty task.', function() {} );	

// Default tasks

grunt.registerTask( 'default',	[

	'clean',
	'metalsmith',
	'less',
	'concat',
	'connect',
	'watch',

] );