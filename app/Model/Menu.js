var mongoose = require('mongoose'),
	Schema;

Schema = new mongoose.Schema({
	name: String,
	system: Boolean,
	region: String,
	items: [
		{
			name: String,
			path: String,
			active: Boolean
		}
	]
});

Schema.statics.findByRegion = function( name, callback ) {
	this.find({ region: name }, callback);
}

exports.Schema = Schema;

module.exports = mongoose.model('menu', Schema);