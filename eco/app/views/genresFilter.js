  var Backbone = require('backbone');
  var genresTemplate = require('../templates/genres.jst');
  
  // The UI for selecting a Movie Category
  var GenresView = Backbone.View.extend({
  
    template: genresTemplate,

    render: function() {
      this.$el.html(this.template({genres: this.genres});
      return this;
    },

    initialize: function() {
      this.genres = ['Action', 'Drama', 'Comedy'];
    }
  
  });
  module.exports = GenresView;
