import ItemView from './Abstract/ItemView.js';

export default class Post extends ItemView {
	initialize() {
		this.ui = {
			'edit': '.edit-post'
		};

		this.events = {
			"click @ui.edit": this.openEdit
		};

		this.modelEvents = {
			"change": "render"
		};
	}

	openEdit( event ) {
		event.stopPropagation();
		event.preventDefault();
		Backbone.history.navigate( event.target.getAttribute('href'), {trigger: true} );
		return false;
	}

	get template() {
		return 'post';
	}
}