import Ui from './Ui.js';
import Menu from './Model/Menu.js';
import MenuView from './View/Menu.js';
import Layout from './View/Layout.js';
import templates from './templates.js';
import Default from './Router/Default.js';

/* override the default render to use hogan.js */
Backbone.Marionette.Renderer.render = function(template, data) {
	return typeof templates[template] !== 'undefined' ? templates[template].render(data) : false;
};

var ui = new Ui({
	layout : new Layout(),
	views: {
		menu: new MenuView( { model: new Menu({ _id: '54f1d1d441a7888e8f1e3047' }) } )
	}
});

ui.on('start', function() {
	Backbone.history.start({ pushState: true });
});

window.router = new Default( ui );

ui.run();