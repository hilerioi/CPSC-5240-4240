http = require('http');
fs = require('fs');
url = require('url');

const port = 8080;

http.createServer( function (req, res) {
	res.setHeader('Content-Type', "text/html");
	res.writeHead(200);

	let filename = req.url;
	console.log('filename:' + filename);
	
	if (filename === '/') {
		filename = 'index.html';
	}
	
	console.log('filename: ' + filename);
	
	fs.readFile('./pages/' + filename, 'utf8', function (err, data) {
	  if (err) {
		return console.log(err);
	  }
	  res.end(data);
	});
	
}).listen(port);
console.log("Server started listening in port " + port);