# Overview

This chapter aims to provide an overview about advanced view templates with JavaScript.

Templates provide a special syntax to easily render variables together with HTML and text. For simple templates, you can best use the JST or ECO formats as shown in the "templates" examples.

For advanced view templates, the situation is a bit different. This means, you can call functions (or "helpers") inside a template to render variables in a certain form.

This is shown in the "grunt_handlebars" example. Grunt provides some syntactic sugar to control multiple processes. This can be helpful to e.g. call browserify, then handlebars and update a server process to display the new views in the browser.
