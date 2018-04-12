var http = require('http');
var url = require('url');

http.createServer((req,res) => {
	if (req.url == '/favicon.ico') {
		return
	}
	res.writeHead(200,{'Content-type':'text/plain;charset=UTF-8'})
	var queryObj = url.parse(req.url,true).query;
	res.end('你好,' + queryObj.username + ',' + queryObj.age + ',' + queryObj.sex);
}).listen(3000)