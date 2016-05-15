module.exports = function(Handlebars) {

this["views"] = this["views"] || {};

this["views"]["controls"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "  <input type=\"checkbox\" name=\"genres\" value=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\">\n    "
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\n  </input>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<p>Sort:</p>\n<button id=\"prev\">Previous</button>\n<button id=\"next\">Next</button>\n<p>Sort:</p>\n<button id=\"by_title\">By Title</button>\n<button id=\"by_rating\">By Rating</button>\n<button id=\"by_showtime\">By Showtime</button>\n<p>Filter</p>\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.filters : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});

this["views"]["layout"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<header>\n<a href=\"#\">Home</a>\n  <nav id=\"controls\">\n  </nav>\n  <span id=\"info\"> \n  </span>    \n</header>   \n<div id=\"overview\">\n</div>     \n<div id=\"details\"> \n</div>\n";
},"useData":true});

this["views"]["moviesList"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true});

return this["views"];

};