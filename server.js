var express = require('express');
var request = require('request');
var app = express();

app.get('/', function(){console.log('Welcome to Travel Roulete')});

app.get('/airports', function(req, res){
	var url = 'http://airport.api.aero/airport/?user_key=70f81562d591a0a28d3df8281fe04272';
	request({
		url : url,
		json : true,
	    }, function(error, response, body){

	    
		res.send(JSON.stringify(body.airports));
	});
});

app.get('/ping/:id', function(req, res){
	res.send({ping : ' hello this is the server and i got ' + req.params.id});
});

app.listen(3000);
console.log('Listening on port 3000....');