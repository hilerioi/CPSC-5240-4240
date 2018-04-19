var http = require('http');
var fs = require('fs');
var url = require('url');

var message = [
	'Hello World',
	'From a basic Node.js server',
	'Take Luck'
];

http.createServer( function (req, res) {
	res.setHeader('Content-Type', "text/html");
	res.writeHead(200);

	var filename = url.parse(req.url).pathname.slice(1);
	
	if (filename === '') {
		filename = 'index.html';
	}
	
	console.log('filename: ' + filename);
	
	fs.readFile('./pages/' + filename, 'utf8', function (err, data) {
	  if (err) {
		return console.log(err);
	  }
	  res.end(data);
	});
	
}).listen(8080);