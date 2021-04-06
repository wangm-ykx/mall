/*首页*/
const DataModel = require('./dataModel')
const Mock = require('mockjs')
const Random = Mock.Random

// 流行
const popListP1 = []
for(let i=0; i<30; i++) {
	let obj = {}
	obj = {
		id: '1000' + i,
		desc: '流行' + (i + 1) + '-' + Random.ctitle(8,12),
		img: Random.image('180x150', Random.color(), '#FFFFFF', 'popular')
	}
	popListP1.push(obj)
}
const popListP2 = []
for(let i=30; i<60; i++) {
	let obj = {}
	obj = {
		id: '1000' + i,
		desc: '流行' + (i + 1) + '-' + Random.ctitle(8,12),
		img: Random.image('180x150', Random.color(), '#FFFFFF', 'popular')
	}
	popListP2.push(obj)
}
const popListP3 = []
for(let i=60; i<90; i++) {
	let obj = {}
	obj = {
		id: '1000' + i,
		desc: '流行' + (i + 1) + '-' + Random.ctitle(8,12),
		img: Random.image('180x150', Random.color(), '#FFFFFF', 'popular')
	}
	popListP3.push(obj)
}

// 新款
const newListP1 = []
for(let i=0; i<30; i++) {
	let obj = {}
	obj = {
		id: '2000' + i,
		desc: '新款' + (i + 1)  + '-' + Random.ctitle(8,12),
		img: Random.image('180x150', Random.color(), '#FFFFFF', 'new style')
	}
	newListP1.push(obj)
}
const newListP2 = []
for(let i=30; i<60; i++) {
	let obj = {}
	obj = {
		id: '2000' + i,
		desc: '新款' + (i + 1)  + '-' + Random.ctitle(8,12),
		img: Random.image('180x150', Random.color(), '#FFFFFF', 'new style')
	}
	newListP2.push(obj)
}

// 精选
const sellListP1 = []
for(let i=0; i<30; i++) {
	let obj = {}
	obj = {
		id: '3000' + i,
		desc: '精选' + (i + 1)  + '-' + Random.ctitle(8,12),
		img: Random.image('180x150', Random.color(), '#FFFFFF', 'Boutique')
	}
	sellListP1.push(obj)
}
const sellListP2 = []
for(let i=30; i<60; i++) {
	let obj = {}
	obj = {
		id: '3000' + i,
		desc: '精选' + (i + 1)  + '-' + Random.ctitle(8,12),
		img: Random.image('180x150', Random.color(), '#FFFFFF', 'Boutique')
	}
	sellListP2.push(obj)
}

module.exports = [
	{
		url: '/mock-api/home/data/pop',
		type: 'get',
		responsePage1: new DataModel({
			total: 90,
			list: popListP1
		}),
		responsePage2: new DataModel({
			total: 90,
			list: popListP2
		}),
		responsePage3: new DataModel({
			total: 90,
			list: popListP3
		})
	},
	{
		url: '/mock-api/home/data/new',
		type: 'get',
		responsePage1: new DataModel({
			total: 60,
			list: newListP1
		}),
		responsePage2: new DataModel({
			total: 60,
			list: newListP2
		})
	},
	{
		url: '/mock-api/home/data/sell',
		type: 'get',
		responsePage1: new DataModel({
			total: 60,
			list: sellListP1
		}),
		responsePage2: new DataModel({
			total: 60,
			list: sellListP2
		})
	}
]
