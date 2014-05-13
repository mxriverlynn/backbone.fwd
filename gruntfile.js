module.exports = function(grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    meta: {
      version: "<%= pkg.version %>",
      banner:
        "// backbone.fwd\n" + 
        "// ------------\n" + 
        "// Forward events from a source, through a target object\n" + 
        "// \n" + 
        "// v<%= pkg.version %>\n" +
        "// Copyright 2014 Muted Solutions, LLC.\n" + 
        "// Distributed under MIT license\n" + 
        "// http://mutedsolutions.com\n" +
        "\n"
    },

    assets: {
      underscore: "node_modules/underscore/underscore.js",
      backbone: "node_modules/backbone/backbone.js"
    },

    jasmine : {
      options : {
        helpers : [
          "specs/helpers/**/*.js"
        ],
        specs: "specs/*Specs.js",
        vendor : [
          "<%= assets.underscore %>",
          "<%= assets.backbone %>"
        ],
        keepRunner: true
      },
      all: {
        src: ["src/backbone.fwd.js"]
      }
    }

  });

  grunt.loadNpmTasks("grunt-contrib-jasmine");
  grunt.registerTask("specs", ["jasmine:all"]);
};
