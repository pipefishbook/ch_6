module.exports = function(Handlebars) {

var templates = {};

templates["controls"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n  <input type=\"checkbox\" name=\"genres\" value=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n    ";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n  </input>\n";
  return buffer;
  }

  buffer += "<p>Sort:</p>\n<button id=\"prev\">Previous</button>\n<button id=\"next\">Next</button>\n<p>Sort:</p>\n<button id=\"by_title\">By Title</button>\n<button id=\"by_rating\">By Rating</button>\n<button id=\"by_showtime\">By Showtime</button>\n<p>Filter</p>\n";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.filters), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });

templates["layout"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<header>\n<a href=\"#\">Home</a>\n  <nav id=\"controls\">\n  </nav>\n  <span id=\"info\"> \n  </span>    \n</header>   \n<div id=\"overview\">\n</div>     \n<div id=\"details\"> \n</div>\n";
  });

templates["moviesList"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "";


  return buffer;
  });

return templates;

};