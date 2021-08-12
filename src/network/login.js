import {request} from './request'
export function Login(username, password) {
  return request({
    url: '/login',
    methods: 'POST',
    params: {
      username, password
    }
  })
}