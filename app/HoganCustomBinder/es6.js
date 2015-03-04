var Hogan = require('hogan.js');
var templates = {};
/* jshint ignore:start */
templates['es6'] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("/* jshint ignore:start */\r");t.b("\n" + i);t.b("var templates = {};\r");t.b("\n" + i);if(t.s(t.f("templates",c,p,1),c,p,0,62,125,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("templates['");t.b(t.v(t.f("name",c,p,0)));t.b("'] = new Hogan.Template(");t.b(t.t(t.f("template",c,p,0)));t.b(");\r");t.b("\n" + i);});c.pop();}t.b("export default templates;\r");t.b("\n" + i);t.b("/* jshint ignore:end */");return t.fl(); },partials: {}, subs: {  }}); 
/* jshint ignore:end */
module.exports = templates;