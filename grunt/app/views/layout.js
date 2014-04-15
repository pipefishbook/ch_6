var Backbone = require('backbone');
Backbone.XView = require('backbone.xview');
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

var Layout = Backbone.XView.extend({

  template:   Templates['layout'],

  setDetails: function(movie) {
    if (this.currentDetails) {
      this.removeView(this.currentDetails);
      this.render();
    }
    var view = new DetailsView({model: movie});
    this.addView('#details', {id: view.cid}, view);
    this.currentDetails = view.cid;
  },

  setChose: function() {
    if (this.currentDetails) {
      this.removeView(this.currentDetails);
      this.render();
    }
    var view = new ChoseView();
    this.addView('#details', {id: view.cid}, view);
    this.currentDetails = view.cid;
  },

  onRender: function() {
    $('#controls').html(this.controls.render().el);
    $('#info').append(this.info.render().el);
  },
  
  initialize: function(options) {
    this.proxy = new Backbone.Obscura(options.router.movies); 
    this.proxy.setPerPage(4);
    this.addView('#overview', new MoviesList({
      collection: this.proxy,
      router: options.router
    }));
    this.controls = new Controls({ filters: ['Drama', 'Action'], proxy: this.proxy });
    this.info = new Info({proxy: this.proxy });
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
