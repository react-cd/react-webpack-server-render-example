var express = require('express');
var path = require('path');

var page = require("./page.generator.js").page;

var app = express();
var port = 8082;

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/', function (req, res) {
	// 这格式
	var props = {
		initialCount: 9
	};
	// 这个就类似于redux中的store
	var html = page(props);
	res.end(html);
});

app.listen(port, function () {
	console.log('Listening on port %d', port);
});