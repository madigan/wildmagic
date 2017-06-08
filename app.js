var express = require('express');
var http = require('http');

var app = express();

var port = process.env.PORT || 80;
var host = process.env.HOST || "127.0.0.1";

var effects = [];
effects.push({id:1,effect:"You create a fireball centered on yourself. It does 6d6 damage to yourself and everyone in a 15 foot radius."});
effects.push({id:2,effect:"Your hair turns green and little daisys start sprouting. The effect lasts 1d8 hours"});

var server = http.createServer(app).listen(port, host, function() {
	console.log("WildMagic is running on %s:%d within %s.",
				host, port, app.get('env'));
});

app.get('/', function(req, res) {
	res.send( effects[Math.floor(Math.random() * jokes.length)] );
});
