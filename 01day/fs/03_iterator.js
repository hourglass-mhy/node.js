var http = require('http');
var fs = require('fs');

http.createServer((req,res) => {
	if (req.url == '/favicon.ico') {
		return
	}
	fs.readdir('./gallery/',(err,files) => {
		// 迭代判断文件的状态
		var directories = [];
		(function iterator(i) {
			// 遍历结束的判断
			if (i === files.length) {
				console.log(directories)
				return
			}
			// 判断文件状态
			fs.stat('./gallery/' + files[i],(err,stats) => {
				if (stats.isDirectory()) {
					directories.push(files[i])
				};
				// 确保某一次执行完毕之后再进行下一次
				iterator(i+1);
			})
		})(0);
		
	});
	res.end();
}).listen(3000)