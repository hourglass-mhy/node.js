var http = require('http');
var fs = require('fs');

http.createServer((req,res) => {
	// 创建文件
	fs.mkdir('./gallery/bb',(err) => {
		if (err) throw err;
	});
	// 检查文件是否存在
	fs.stat('./gallery',(err,stats) => {
		console.log(stats);
		console.log('是不是一个文件夹',stats.isDirectory());
	})
	res.writeHead(200,{'Content-type':'text/html;chartset=UTF-8'});
	res.end();
}).listen(3000)