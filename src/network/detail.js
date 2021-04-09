import { mockReq } from "@/network/request";

// 详情
export function getDetail(id) {
  return mockReq({
    url: '/goods/detail',
    method: 'post',
    params: {
      id
    }
  })
}

// 详情-推荐
export function getRecommend() {
  return mockReq({
    url: '/goods/recommend',
    method: 'post'
  })
}
