export default class Menu extends Marionette.ItemView {
	initialize() {
		this.modelEvents = {
			"change:items": "render"
		};

		this.events = {
			"click a": this.open
		};
	}

	open() {
		event.stopPropagation();
		event.preventDefault();
		Backbone.history.navigate( event.target.getAttribute('href'), {trigger: true} );
		return false;
	}

	get template() {
		return 'menu';
	}
}