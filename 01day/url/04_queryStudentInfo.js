
// 根据查询的id返回信息

// 用户访问 /student/1234567890 查询该学号的学生信息
// 用户访问 /teacher/123456 查询该编号的老师信息
var  http = require('http');
var url = require('url');

http.createServer((req,res) => {
	if (req.url == '/favicon.ico') {
		return
	}
	var sNum = 10;
	var tNum = 6;
	res.writeHead(200,{'Content-type':'text/html;charset=UTF-8'});
	if (/^\/student\//.test(req.url)) {
		if(req.url.substring(9).length == sNum) {
			res.end('学生信息id:' + req.url.substring(9));
		} else {
			res.end("输入的学号位数不对");
		}
	} else if (/^\/teacher\//.test(req.url)) {
		if(req.url.substring(9).length == tNum) {
			res.end('教师信息id:' + req.url.substring(9));
		} else {
			res.end("输入的工号位数不对");
		}
	} else {
		res.end('信息不对');
	}
}).listen(3000);