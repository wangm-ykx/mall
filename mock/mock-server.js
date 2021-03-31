// express模拟接口服务器
const express = require('express')
const bodyParser = require('body-parser')
const app = new express()


// 处理post请求的json
app.use(bodyParser.json())
// 处理post请求的form
app.use(bodyParser.urlencoded({
	extended: false
}))

// 注册请求
const mocks = require('./modules')

for(let mock of mocks){
	app[mock.type](mock.url, (req, res) => {
		res.send(mock.response)
	})
}

app.listen(5000, () => {
	console.log('api server listen at 5000')
})
