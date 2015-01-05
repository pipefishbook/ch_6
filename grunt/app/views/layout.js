var Backbone = require('backbone');
Backbone.Obscura = require('backbone.obscura');

var _ = require('underscore');

var $ = Backbone.$;

var MoviesList = require('views/moviesList');
var DetailsView = require('views/details');
var ChoseView = require('views/chose');
var Controls = require('views/controls');
var Info = require('views/info');

var Handlebars = require('handlebars');
var Templates = require('templates/compiledTemplates')(Handlebars);

var Layout = Backbone.View.extend({

  template:   Templates['layout'],

  render: function() {
    this.$el.html(this.template());
    this.controls.setElement(this.$('#controls')).render();
    this.currentDetails.setElement(this.$('#details')).render();
    this.overview.setElement(this.$('#overview')).render();

    return this;
  },

  setDetails: function(movie) {
    if (this.currentDetails) this.currentDetails.remove();
    this.currentDetails = new DetailsView({model: movie});
    this.render();
  },

  setChose: function() {
    if (this.currentDetails) this.currentDetails.remove();
    this.currentDetails = new ChoseView();
    this.render();
  },

  initialize: function(options) {
    this.proxy = new Backbone.Obscura(options.router.movies);
    this.proxy.setPerPage(4);

    this.controls = new Controls({ proxy: this.proxy });
    this.info = new Info({proxy: this.proxy });

    this.overview = new MoviesList({
        router: options.router,
        collection: this.proxy
     });
     this.currentDetails = new ChoseView();
  }

});

var instance;
Layout.getInstance = function(options) {
  if (!instance) {
    instance = new Layout({
      el: options.el,
      router: options.router,
      collection: options.router.movies
    });
  }
  return instance;
}
module.exports = Layout;
