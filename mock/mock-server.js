// express接口服务器
const express = require('express')
const bodyParser = require('body-parser')
const app = new express()

// 处理post请求的json
app.use(bodyParser.json())
// 处理post请求的form
app.use(bodyParser.urlencoded({
	extended: false
}))

//设置允许跨域访问该服务
// app.all('*', function (req, res, next) {
// 	res.header('Access-Control-Allow-Origin', '*');
// 	res.header('Access-Control-Allow-Headers', 'Content-Type');
// 	res.header('Access-Control-Allow-Methods', '*');
// 	res.header('Content-Type', 'application/json;charset=utf-8');
// 	next();
// })

// 注册请求
const mocks = require('./modules')
for(let mock of mocks){
	app[mock.type](mock.url, (req, res) => {
		// 不管是post或get请求的参数都在query中
		// 处理列表分页
		if(req.query.page) {
			res.send(mock['responsePage' + req.query.page])
		}
		// 处理详情区分
		if(req.query.id) {
			const idType = req.query.id % 2 === 0 ? 'Even': 'Odd'
			res.send(mock['response' + idType])
		}
		res.send(mock.response)
	})
}

// 启动端口号
app.listen(5000, () => {
	console.log('api server listen at 5000')
})
