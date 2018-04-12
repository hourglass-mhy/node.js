// http 模块

// 导入http模块
const http = require('http');

// 创建一个http代理服务器
var server = http.createServer((req,res) => {
	res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
	res.end('哈哈哈哈，这是我的第一个node.js');
});

// 监听端口
server.listen(3000);
