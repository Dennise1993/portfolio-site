module.exports = function(grunt) {
grunt.initConfig({
    responsive_images: {
	 options: {
	        engine: 'im'
	      },    	
	      
      dev: {
        options: {
          sizes: [{
            
            width: 1600,
            suffix: '_large',
            quality: 30
            
          }, {
            width: 1000,
            suffix: '_medium',
            quality: 25
          }, {
            width: 500,
            suffix: '_small',
            quality: 20
          }]
        },

        /*
        You don't need to change this part if you don't change
        the directory structure.
        */
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'images_src/',
          dest: 'images/'
        }]
      }
    }
});
grunt.loadNpmTasks('grunt-responsive-images');
grunt.registerTask('default', ['responsive_images']);
};