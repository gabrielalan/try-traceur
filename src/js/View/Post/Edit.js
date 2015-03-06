import ItemView from '../Abstract/ItemView.js';

export default class Edit extends ItemView {
	initialize() {
		/*this.ui = {
			'edit': '.edit-post'
		};*/

		this.events = {
			"click .save-post": this.save
		};

		this.modelEvents = {
			"change": "render",
			"sync": this.modelSync
		};

		this.model.set('edit', true);
	}

	modelSync() {
		jQuery(this.loading).addClass('hidded');
	}

	save( event ) {
		event.stopPropagation();
		event.preventDefault();
		console.log( this.text.textContent );
		console.log( this.title.textContent.trim() );
		Backbone.history.navigate( event.target.getAttribute('href'), {trigger: true} );
		return false;
	}

	get loading() {
		return this.el.querySelector('.loading');
	}

	get text() {
		return this.el.querySelector('p.text');
	}

	get title() {
		return this.el.querySelector('h2.title');
	}

	get template() {
		return 'post';
	}
}