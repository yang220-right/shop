import axios from 'axios'
export function request(config) {
  // config 是个对象 传入请求的参数  例如 {url:'xxxx',params:{name:xxx}}
  const instance = axios.create({
    baseURL: 'http://127.0.0.1:8888/api/private/v1/',
    timeout: 5000
  })
  instance.interceptors.request.use(config => {
    return config
  })
  instance.interceptors.response.use(res => {
    return res.data
  })
  return instance(config)
}