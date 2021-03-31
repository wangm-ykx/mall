module.exports = class DataModel{
	constructor(result, resultCode = 1, resultMsg = '请求成功') {
		this.result = result
		this.resultCode = resultCode
		this.resultMsg = resultMsg
	}
}
