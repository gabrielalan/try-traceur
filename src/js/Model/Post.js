export default class Post extends Backbone.Model {
	initialize() {
		this.urlRoot = '/post/';
	}

	get idAttribute() {
		return "_id";
	}

	defaults() {
		return {
			name: '',
			region: '',
			text: ''
		}
	}
}