import Router from './Router.js';
import Home from '../View/Home.js';
import PostModel from '../Model/Post.js';
import PostEditView from '../View/Post/Edit.js';
import Posts from '../Collection/Posts.js';

export default class Default extends Router {
	get routes() {
		return {
			"": 'home',
			"post/edit/:id": 'postEdit',
			"post/:id": 'article'
		}
	}

	postEdit(id) {
		var model = new PostModel({ _id: id });
		model.fetch();

		var view = new PostEditView({ model: model });

		this.setContent(view);
	}

	home() {
		var collection 	= new Posts({page:1});
		var view = new Home({ collection: collection });

		collection.fetch();

		this.setContent(view);
	}

	post( id ) {
		console.log('Article: ' + id);
	}
}