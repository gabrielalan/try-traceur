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

app.get('/post/:id', function(req, res){
	res.json( { _id: req.params.id, title: 'Título', text: 'ASD ASD AS DASD ASH DASHDAS DUA DHA' } );
});

app.get('/posts/:page', function(req, res){
	var posts = [], cont = 0, max = req.params.page * 5;

	for(; cont < max; cont++)
		posts.push({ _id: cont+'8d13ej22o3ie', title: 'Título', text: 'ASD ASD AS DASD ASH DASHDAS DUA DHA' });

	res.json({
		posts: posts
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