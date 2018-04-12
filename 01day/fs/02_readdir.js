// 读取一个文件夹下所有的子文件夹
var http  = require('http');
var fs = require('fs');

http.createServer((req,res) => {
	if (req.url == '/favicon.ico') {
		return
	}

	// 读取一个文件下所有的子文件
	fs.readdir('./gallery/',(err,files) => {
		// files 所有子文件（夹）的名称组成的数组
		var directories = [];

		// 循环内部包含了一步操作
		for(var i = 0; i < files.length; i++ ){
			// 判断文件的状态
			thefilename = files[i];
			// 判断文件状态这是一个异步操作，然而循环会一直进行。
			// 当i=0时，thefilename=files[0],执行该异步操作，回调的结果还没有回来，
			// 程序会继续执行i=1,thefilename=files[1],假设此时回调成功，输出确是的是directories.push(files[1]),
			//  ===》问题：某一次文件状态的判断还没有结束，下一次文件状态的判断却又开始了。
			//  ===》解决：强行把异步变为同步，一个文件状态成功返回之后才能进行下一次文件状态的判断
			fs.stat('./gallery/' + thefilename,(err,stats) => {
				// 判断文件是不是文件夹
				if (stats.isDirectory()) {
					directories.push(thefilename)
				}
				console.log(directories)
			})
		};
	})
	res.end();
}).listen(3000,'127.0.0.1');