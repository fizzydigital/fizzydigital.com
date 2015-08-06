grunt.config.merge( {

	less: {

		dist: {

			files: {

				'public/assets/css/style.css': [ '_less/style.less' ],

			}

		},

	},

	concat: {

		js: {

			dest: 'public/assets/js/main.js',
			src: [ '_js/**/*.js' ]
		
		}

	},

	metalsmith: {

		site: {

			src: '_src',
			dest: 'public',
			options: {

				clean: false,

				metadata: {

					title: '<%= pkg.name %>',

					site: grunt.file.readJSON( '_json/site.json' )

				},

				plugins: {

					'metalsmith-markdown': true,

					'metalsmith-in-place': { engine: 'handlebars' },

					'metalsmith-layouts': {

						engine:		'handlebars',
						default:	'default.html',
						directory:	'_layouts',
						pattern:	'*.html',
						partials:	{

							footer: 'partials/footer'

						}
					},

					'metalsmith-permalinks': {

						relative: false,
						pattern: ':slug'

					}
				}

			}

		}

	},

	watch: {

		options: { livereload: true },

		js: {

			files: [ '_js/**/*.js' ],
			tasks: [ 'concat' ]

		},

		less: {

			files: [ '_less/**/*.less' ],
			tasks: [ 'less' ]

		},

		metalsmith: {

			files: [

				'_json/**/*.json',
				'_layouts/**/*.html',
				'_src/**/*',

			],
			tasks: [ 'metalsmith' ]

		}

	},

	connect: {

		site: {
			
			options: {

				keepalive:	false,
				port:		8080,
				base:		'public'

			}

		}

	},

	clean: {	

		project: [

			'public',
			'**/.DS_Store'

		],

	}

} );