export default class Router extends Backbone.Router {
	
	initialize( application ) {
		this.application = application;
		this.addToApplication();
	}

	addToApplication() {
		this.application.addRouter(this.constructor.name, this);
	}

	setContent( view ) {
		this.application.layout.getRegion('content').show(view);
	}

}