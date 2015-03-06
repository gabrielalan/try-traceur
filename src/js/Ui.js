import Header from './View/Header.js';
import Footer from './View/Footer.js';
import Menu from './View/Menu.js';
import MenuModel from './Model/Menu.js';

class Ui extends Backbone.Marionette.Application {
	initialize( options = {} ) {
		this.views = {};
		this.routers = {};

		_.extend(this, options);

		if( !this.layout )
			throw new Error('The LayoutView is necessary');
	}

	addRouter(name, instance) {
		this.routers[name] = instance;
	}

	getRouter(name) {
		return typeof this.routers[name] ? this.routers[name] : false;
	}

	get header() {
		if( !this.views.header )
			this.views.header = new Header({ model: new Backbone.Model({ name: 'Blog' }) });

		return this.views.header;
	}

	get footer() {
		if( !this.views.footer )
			this.views.footer = new Footer();

		return this.views.footer;
	}

	get menu() {
		if( !this.views.menu )
			this.views.menu = new Menu({ model: new MenuModel() });

		if( this.views.menu.model && !this.views.menu.model.isNew() )
			this.views.menu.model.fetch();

		return this.views.menu;
	}

	initialRegions() {
		this.layout.getRegion('header').show(this.header);
		this.layout.getRegion('menu').show(this.menu);
		this.layout.getRegion('footer').show(this.footer);
	}

	get container() {
		return document.querySelector('.container');
	}

	run() {
		this.container.appendChild(this.layout.render().el);
		this.initialRegions();
		this.start();
	}
}

export default Ui;