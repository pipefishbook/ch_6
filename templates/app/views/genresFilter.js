var Backbone = require('backbone');

// for jst
var genresTemplate = require('../../templates/genres.jst');

// for eco
// var genresTemplate = require('../../templates/genres.eco');

// The UI for selecting a Movie category
var GenresView = Backbone.View.extend({

  template: genresTemplate,

  render: function() {
    this.$el.html(this.template({genres: this.genres}));
    return this;
  },

  initialize: function() {
    this.genres = ['Action', 'Drama', 'Comedy'];
  }

});
module.exports = GenresView;
