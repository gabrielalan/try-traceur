export default class Menu extends Marionette.ItemView {
	initialize() {
		this.modelEvents = {
			"change:items": "render"
		};
	}

	get template() {
		return 'menu';
	}
}