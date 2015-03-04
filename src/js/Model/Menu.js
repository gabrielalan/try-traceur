export default class MenuItem extends Backbone.Model {
	initialize() {
		this.urlRoot = '/menu/';
	}

	get idAttribute() {
		return "_id";
	}

	defaults() {
		return {
			name: '',
			region: '',
			system: true,
			items: [
				{
					name: '',
					path: '',
					active: false
				}
			]
		}
	}
}