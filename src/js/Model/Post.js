export default class Post extends Backbone.Model {
	initialize() {
		this.urlRoot = '/post/';
	}

	get idAttribute() {
		return "_id";
	}

	defaults() {
		return {
			title: '',
			text: '',
			edit: false
		}
	}
}