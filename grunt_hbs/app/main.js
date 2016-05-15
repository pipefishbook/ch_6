var Backbone = require('backbone');
var $ = require('jquery-untouched');
Backbone.$ = $;

var fs = require('fs');
var rawMovies = JSON.parse(fs.readFileSync(__dirname + '/../movies.json'));
console.log(rawMovies);

var MoviesRouter = require('routers/movies');

$(document).ready(function() {
  console.log('init');
  var router = new MoviesRouter({rawMovies: rawMovies, el: $('#movies') });
  Backbone.history.start({
    pushState: false,
    root: '/'
  });
});

