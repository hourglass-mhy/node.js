// 查看url参数

var http = require('http');
var url = require('url');
var querystring = require('querystring');

http.createServer((req,res) => {
	// url.parse 对请求的url进行解析,设置true参数，则 query 属性总会通过 querystring 模块的 parse() 方法生成一个对象。 如果为 false
	var urlObj = url.parse(req.url);
	console.log('url', urlObj);
	console.log('no parse query',urlObj.query);
	console.log('parse query',querystring.parse(urlObj.query));

	res.writeHead(200,{'Content-type':'text/plain; charset=UTF-8'});
	res.end('测试url')
}).listen(3000);