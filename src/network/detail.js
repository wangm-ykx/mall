import { mockReq } from "@/network/request";

export function getDetail(id) {
  return mockReq({
    url: '/goods/detail',
    method: 'post',
    params: {
      id
    }
  })
}
