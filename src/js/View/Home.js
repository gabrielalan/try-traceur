import Post from './Post.js';

export default class Home extends Marionette.CollectionView {
	initialize() {
		this.url = '/posts/1';
	}

	get childView() {
		return Post;
	}

	get template() {
		return 'home';
	}
}