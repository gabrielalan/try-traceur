import Post from '../Model/Post.js';

export default class Posts extends Backbone.Collection {
	initialize( options = {} ) {
		this.page = options.page || 1;
	}

	parse( response ) {
		return response.posts;
	}

	get model() {
		return Post;
	}

	get url() {
		return '/posts/' + this.page;
	}
}