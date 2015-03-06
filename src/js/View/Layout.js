export default class Layout extends Marionette.LayoutView {
	constructor() {
		this.regions = {
			header: "#header",
			menu: "#menu",
			content: "#content",
			sidebar: "#sidebar",
			footer: "#footer"
		};

		super(arguments);
	}

	/*onRender() {
	}*/

	get template() {
		return 'main';
	}
}