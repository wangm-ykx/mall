import axios from 'axios'

export function coderTReq(config) {
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  // 请求拦截器
  instance.interceptors.request.use(
    config => {
      return config
    },
    err => {
      console.log(err, 'coderTReq req err');
      Promise.reject(err)
    }
  )

  // 响应拦截器
  instance.interceptors.response.use(
    response => {
      return response.data
    },
    err => {
      console.log(err, 'coderTReq res err');
      Promise.reject(err)
    }
  )

  return instance(config)
}

export function mockReq(config) {
  const instance = axios.create({
    baseURL: 'http://localhost:5000', //代理或在服务端mock-server处理允许跨域
    timeout: 5000
  })

  // 请求拦截
  instance.interceptors.request.use(
    config => {
      config.url = '/mock-api' + config.url
      return config
    },
    err => {
      console.log(err, 'mockReq req err');
      Promise.reject(err)
    }
  )

  // 响应拦截
  instance.interceptors.response.use(
    res => {
      return res.data
    },
    err => {
      console.log(err, 'mockReq res err');
      Promise.reject(err)
    }
  )

  return instance(config)
}
