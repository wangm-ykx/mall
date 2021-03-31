const DataModel = require('./dataModel')
const Mock = require('mockjs')
const Random = Mock.Random

// 流行
const popList = []
for(let i=0; i<20; i++) {
	let obj = {}
	obj = {
		desc: '流行-' + Random.ctitle(8,12),
		img: Random.image('180x150', Random.color(), '#FFFFFF', 'popular')
	}
	popList.push(obj)
}

// 新款
const newList = []
for(let i=0; i<20; i++) {
	let obj = {}
	obj = {
		desc: '新款-' + Random.ctitle(8,12),
		img: Random.image('180x150', Random.color(), '#FFFFFF', 'new style')
	}
	newList.push(obj)
}

// 精选
const sellList = []
for(let i=0; i<20; i++) {
	let obj = {}
	obj = {
		desc: '精选-' + Random.ctitle(8,12),
		img: Random.image('180x150', Random.color(), '#FFFFFF', 'Boutique')
	}
	sellList.push(obj)
}

module.exports = [
	{
		url: '/mock-api/home/data/pop',
		type: 'get',
		response: new DataModel({
			total: 61,
			list: popList
		})
	},
	{
		url: '/mock-api/home/data/new',
		type: 'get',
		response: new DataModel({
			total: 61,
			list: newList
		})
	},
	{
		url: '/mock-api/home/data/sell',
		type: 'get',
		response: new DataModel({
			total: 61,
			list: sellList
		})
	}
]
