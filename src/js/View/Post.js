export default class Post extends Marionette.ItemView {
	/*initialize() {
		this.modelEvents = {
			"change:name": "modelChange"
		};
	}

	modelChange() {
		this.title.textContent = this.model.get('name');
	}*/

	get template() {
		return 'post';
	}
}