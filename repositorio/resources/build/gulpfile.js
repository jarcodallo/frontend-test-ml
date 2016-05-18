var elixir = require('laravel-elixir');

elixir.config.bowerPath = './bower_components';
elixir.config.jsPath = '../js';
elixir.config.cssPath = '../css';
elixir.config.sourcemaps = false;

elixir(function(mix) {
    mix.copy([
		elixir.config.bowerPath + '/fontawesome/fonts/**.*',
    elixir.config.bowerPath + '/bootstrap/dist/fonts/**.*'
    ],elixir.config.cssPath + '/fonts');

    mix.sass('./css/app.scss', './css/app.css');

   	mix.styles([
   		elixir.config.bowerPath + '/normalize-css/normalize.css',
   		elixir.config.bowerPath + '/fontawesome/css/font-awesome.min.css',
        elixir.config.bowerPath + '/bootstrap/dist/css/bootstrap.min.css',
   		elixir.config.bowerPath + '/chico/dist/ui/chico.min.css',
        './css/app.css'
   	], elixir.config.cssPath + '/ui/app.css');

   	mix.scripts([
   		elixir.config.bowerPath + '/jquery/jquery.js',
        elixir.config.bowerPath + '/bootstrap/dist/js/bootstrap.min.js',
   		elixir.config.bowerPath + '/chico/dist/ui/chico.js',
        './js/app.js'
   	], elixir.config.jsPath + '/app.js');
});