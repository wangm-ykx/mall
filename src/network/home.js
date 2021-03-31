import {coderTReq, mockReq} from "@/network/request";

export function getHomeMultidata() {
  return coderTReq({
    url: '/home/multidata'
  })
}

export function getHomeGoods(type, page) {
  return mockReq({
    url: '/home/data/' + type,
    data: {
      page
    }
  })
}
