export default class Layout extends Backbone.Marionette.LayoutView {
	constructor() {
		this.regions = {
			header: "#header",
			menu: "#menu",
			content: "#content",
			sidebar: "#sidebar",
			footer: "#footer"
		}

		super(arguments);
	}

	get template() {
		return 'main';
	}
}