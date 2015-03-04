import Router from './Router.js';
import Home from '../View/Home.js';
import Posts from '../Collection/Posts.js';

export default class Default extends Router {
	get routes() {
		return {
			"": 'home',
			"article/:id": 'article'
		}
	}

	home() {
		console.log('home');

		var collection 	= new Posts({page:1});
		var view = new Home({ collection: collection });

		collection.fetch();

		this.application.layout.getRegion('content').show(view);
	}

	article( id ) {
		console.log('Article: ' + id);
	}
}