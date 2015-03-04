var express = require('express'), 
	mongoose = require('mongoose'),
	Menu = require('./app/Model/Menu'),
	app = express();

mongoose.connect('mongodb://localhost:/test');
mongoose.set('debug', true);
mongoose.connection.on('error', console.error.bind(console, 'connection error:'));

//-------------------------------------------

app.use(express.static( __dirname ));

app.get('/menu/:id', function(req, res){
	Menu.find({ _id: new mongoose.Types.ObjectId(req.params.id) }, function(err, result){
		res.json( result[0] || {} );
	});
});

app.get('/posts/:page', function(req, res){
	res.json({
		posts: [
			{ _id: '1d13ej22o3ie', title: 'asdasd', text: 'asdasdas' },
			{ _id: '2d13ej22o3ie', title: 'asdasd', text: 'asdasdas' },
			{ _id: '3d13ej22o3ie', title: 'asdasd', text: 'asdasdas' },
			{ _id: '4d13ej22o3ie', title: 'asdasd', text: 'asdasdas' },
			{ _id: '5d13ej22o3ie', title: 'asdasd', text: 'asdasdas' },
			{ _id: '6d13ej22o3ie', title: 'asdasd', text: 'asdasdas' },
			{ _id: '7d13ej22o3ie', title: 'asdasd', text: 'asdasdas' },
			{ _id: '8d13ej22o3ie', title: 'asdasd', text: 'asdasdas' },
		]
	});
});

app.get('*', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

//-------------------------------------------

var server = app.listen(3000, function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log('Listening at http://%s:%s', host, port);
});