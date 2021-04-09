/*详情页*/
const DataModel = require('./dataModel')
const Mock = require('mockjs')
const Random = Mock.Random

module.exports = [
  {
    url: '/mock-api/goods/detail',
    type: 'post',
    responseOdd: new DataModel({
      // 轮播图list
      topImages: [
        Random.image('375x195', Random.color(), '#FFFFFF', 'detail odd'),
        Random.image('375x195', Random.color(), '#FFFFFF', 'detail odd'),
        Random.image('375x195', Random.color(), '#FFFFFF', 'detail odd')
      ],
      // 详情图片
      detailImages: [
        Random.image('375x200', Random.color(), '#FFFFFF', 'detail odd item'),
        Random.image('375x200', Random.color(), '#FFFFFF', 'detail odd item'),
        Random.image('375x200', Random.color(), '#FFFFFF', 'detail odd item'),
        Random.image('375x200', Random.color(), '#FFFFFF', 'detail odd item'),
        Random.image('375x200', Random.color(), '#FFFFFF', 'detail odd item'),
        Random.image('375x200', Random.color(), '#FFFFFF', 'detail odd item')
      ],
      // 商品信息
      itemInfo: {
        // 商品名称
        title: Random.ctitle(40,60),
        // 价格
        price: Random.integer(80, 190),
        // 销量
        soldNum: Random.integer(1949, 2021),
        // 收藏
        collectNum: Random.integer(1001, 1948),
        // 发货信息
        deliver: Random.city()
      },
      // 服务
      services: [
        {
          icon: true,
          name: '7天无理由退货'
        },
        {
          icon: true,
          name: '全国包邮'
        },
        {
          icon: true,
          name: '72小时发货'
        }
      ],
      // 商品参数
      itemParams: Mock.mock({
        "list|9-12": [
          {
            key: Random.cword(2,4),
            value: Random.ctitle(6,10)
          }
        ]
      }).list,
      // 店铺信息
      shopInfo: {
        // logo
        logo: 'http://img30.360buyimg.com/popshop/jfs/t1/155184/8/427/5351/5f688a03Ec52f6a53/cc1fbc6b6389952f.jpg',
        // 店铺名称
        name: Random.ctitle(6,8),
        // 总销量
        totalSoldNum: Random.integer(10800, 106000),
        // 宝贝数量
        babyNum: Random.integer(300, 800),
        // 描述相符
        descLevel: Random.float(4.0, 5.0, 2, 2),
        // 价格合理
        priceLevel: Random.float(1.1, 5.0, 2, 2),
        // 质量满意
        qualityLevel: Random.float(1.1, 5.0, 2, 2)
      },
      commentInfo: Mock.mock({
        "list|8-10": [
          {
            userName: Random.ctitle(4,8),
            comment: Random.cparagraph(),
            publishDate: Random.date('yyyy-MM-dd hh:mm:ss')
          }
        ]
      }).list
    }),
    responseEven: new DataModel({
      // 轮播图list
      topImages: [
        Random.image('375x195', Random.color(), '#FFFFFF', 'detail even'),
        Random.image('375x195', Random.color(), '#FFFFFF', 'detail even'),
        Random.image('375x195', Random.color(), '#FFFFFF', 'detail even'),
        Random.image('375x195', Random.color(), '#FFFFFF', 'detail even')
      ],
      // 详情图片
      detailImages: [
        Random.image('375x200', Random.color(), '#FFFFFF', 'detail even item'),
        Random.image('375x200', Random.color(), '#FFFFFF', 'detail even item'),
        Random.image('375x200', Random.color(), '#FFFFFF', 'detail even item'),
        Random.image('375x200', Random.color(), '#FFFFFF', 'detail even item'),
        Random.image('375x200', Random.color(), '#FFFFFF', 'detail even item')
      ],
      // 商品信息
      itemInfo: {
        // 商品名称
        title: Random.ctitle(40,60),
        // 价格
        price: Random.integer(80, 190),
        // 销量
        soldNum: Random.integer(1949, 2021),
        // 收藏
        collectNum: Random.integer(1001, 1948),
        // 发货信息
        deliver: Random.city()
      },
      // 服务
      services: [
        {
          icon: true,
          name: '7天无理由退货'
        },
        {
          icon: true,
          name: '全国包邮'
        },
        {
          icon: true,
          name: '72小时发货'
        }
      ],
      // 商品参数
      itemParams: Mock.mock({
        "list|9-12": [
          {
            key: Random.cword(2,4),
            value: Random.ctitle(6,10)
          }
        ]
      }).list,
      // 店铺信息
      shopInfo: {
        // logo
        logo: 'http://img30.360buyimg.com/popshop/jfs/t1/155184/8/427/5351/5f688a03Ec52f6a53/cc1fbc6b6389952f.jpg',
        // 店铺名称
        name: Random.ctitle(6,8),
        // 总销量
        totalSoldNum: Random.integer(10800, 106000),
        // 宝贝数量
        babyNum: Random.integer(300, 800),
        // 描述相符
        descLevel: Random.float(1.1, 5.0, 2, 2),
        // 价格合理
        priceLevel: Random.float(1.1, 5.0, 2, 2),
        // 质量满意
        qualityLevel: Random.float(4.1, 5.0, 2, 2)
      },
      // 评论信息
      commentInfo: Mock.mock({
        "list|10-12": [
          {
            userName: Random.ctitle(4,8),
            comment: Random.cparagraph(),
            publishDate: Random.datetime('yyyy-MM-dd hh:mm:ss')
          }
        ]
      }).list
    })
  },
  {
    url: '/mock-api/goods/recommend',
    type: 'post',
    response: new DataModel({
      list: Mock.mock({
        "list|10": [
          {
            desc: Random.ctitle(40,60),
            img: Random.image('180x150', Random.color(), '#FFFFFF', 'detail recommend')
          }
        ]
      }).list
    })
  }
]
