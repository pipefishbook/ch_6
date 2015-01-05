var Backbone = require('backbone');
var _ = require('underscore');

// data
var Movies = require('collections/movies');
var movies = new Movies([{id: 1, title: 'test', showtime: 13783939393, genres: ['Action']}]);

// views
var Layout = require('views/layout');

var MoviesRouter = Backbone.Router.extend({

  routes: {
    'movies/:id': 'selectMovie',
    '':           'showMain'
  },

  selectMovie: function(id) {
    this.movies.resetSelected();
    this.movies.selectByID(id);
    this.layout.setDetails(this.movies.get(id));
  },

  showMain: function() {
    this.movies.resetSelected();
    this.layout.setChose();
  },

  initialize: function(options) {
    this.movies = movies;
    this.layout = Layout.getInstance({
      el: '#movies', router: this
    });
    this.layout.render();
  }
});
module.exports = MoviesRouter;
