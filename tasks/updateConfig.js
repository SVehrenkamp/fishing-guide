module.exports = function(grunt) {
  var _ = require('underscore');
  var path = require('path');

  grunt.registerTask("updateConfig", "rewrite header.html for dev env", function() {
  var env = process.env.NODE_ENV,
  gruntConfig;

  grunt.log.writeln("BaseUrl path: " + grunt.config.get(gruntConfig+".files.requireConfig"));
  grunt.log.writeln("your current NODE_ENV environment variable is set to: " + env);
  grunt.log.writeln("updating config data based on NODE_ENV");
  templateData = {
    cssPath: grunt.config.get(gruntConfig+".files.base") + grunt.config.get(gruntConfig+".files.dir") + grunt.config.get(gruntConfig+".files.css"),
    jsPath: grunt.config.get(gruntConfig+".files.base") + grunt.config.get(gruntConfig+".files.dir") + grunt.config.get(gruntConfig+".files.js"),
    requirePath: grunt.config.get(gruntConfig+".files.base") + grunt.config.get(gruntConfig+".files.common"),
    basePath: grunt.config.get(gruntConfig+".files.base") + grunt.config.get(gruntConfig+".files.dir"),
    cssImgPath: grunt.config.get(gruntConfig+".files.base") + "images/"
  };
  

  grunt.log.writeln("rewriting local index.ejs file");
  var newNodeIndexFile = grunt.template.process(grunt.file.read( "./gruntTemplates/indexTemplate.ejs" ), {data: templateData});
  var nodeIndexFile = "./server/views/index.ejs";
  grunt.file.write(nodeIndexFile, newNodeIndexFile);

  grunt.log.writeln("rewriting _path.scss...");
  var pathScss = "./client/css/_path.scss";
  var newPathScss = grunt.template.process(grunt.file.read( "gruntTemplates/_pathTemplate.scss" ), {data: templateData});
  grunt.file.write(pathScss, newPathScss);
      
  
  //now rewrite the baseUrl property in the common.js config file   
  var configObj = new Object(); 
  configObj = {
  baseURL: grunt.config.get(gruntConfig+".files.base") + grunt.config.get(gruntConfig+".files.requireConfig")
  };


  grunt.log.writeln("rewriting socialFeed.json...");
  var socialFeedFile = grunt.template.process(grunt.file.read( "gruntTemplates/socialFeedTemplate.json" ), {data: configObj});
  var socialFeedPath = process.cwd() + '/socialFeed.json';
  grunt.file.write( socialFeedPath, socialFeedFile );

  });
};
