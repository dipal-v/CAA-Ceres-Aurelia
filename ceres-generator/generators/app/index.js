'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var path = require('path');
var fse = require('fs-extra');
var fs = require('fs');


module.exports = yeoman.generators.Base.extend({

  initializing: function () {
    this.pkg = require('../../package.json');
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to ' + chalk.yellow('WebDev\'s') + ' ' + chalk.red('Ceres') + ' generator!'
    ));

    var prompts = [
		{
			type: 'input',
			name: 'scriptAppName',
			message: 'What would you like to name your project?',
		default: 'ceres'
		},
		{
			type: 'input',
			name: 'appTitle',
			message: 'What is the title for your page?',
		default: 'Ceres: WebDev Starter Kit'
		}
    ];

    this.prompt(prompts, function (props) {
      this.props = props;
      // To access props later use this.props.someOption;

      done();
    }.bind(this));
  },

  writing: {
    app: function () {
		var copyFolder = function(folder) {
            var options = {
                filter: function(src, dest){
                    if(src.indexOf('app.ts') != -1){
                        return true;
                    }
                }
            }
			fse.copy(path.join(this.templatePath('.'), folder),
					 path.join(this.destinationPath('.'), folder), options);
		}.bind(this);

        var copy = function(file) {
            this.fs.copy(this.templatePath(file),
                         this.destinationPath(file));
        }.bind(this);

        var templateAsFile = function(file){
		    this.fs.copyTpl(
                this.templatePath(file),
                this.destinationPath(file),
			    this.props
		    );
        }.bind(this);

		copyFolder('src');
		copyFolder('images');
		copyFolder('build');
		copyFolder('fonts');
		copyFolder('styles');
		copyFolder('test');

		templateAsFile('package.json');
		templateAsFile('index.html');
		templateAsFile(path.join('src', 'app.ts'));

		copy('.editorconfig');
		copy('.gitignore');
		copy('.npmignore');
		copy('config.js');
		copy('dockerfile');
		copy('favicon.ico');
		copy('gulpfile.js');
		copy('index.js');
		copy('karma.conf.js');
		copy('protractor.conf.js');
		copy('tsconfig.e2e.json');
		copy('tsconfig.json');
		copy('tslint.json');
		copy('typings.json');
		copy('wallaby.js');

    }
  },

  install: function () {
      //this.installDependencies();
  }
});
