export default class Header extends Marionette.ItemView {
	initialize() {
		this.modelEvents = {
			"change:name": "modelChange"
		};
	}

	modelChange() {
		this.title.textContent = this.model.get('name');
	}

	get title() {
		return this.el.querySelector('h1');
	}

	get template() {
		return 'header';
	}
}