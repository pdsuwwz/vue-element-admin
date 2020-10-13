import axios from 'axios'
import { Message } from 'element-ui'

import { getCookieToken } from '@/utils/cookie'
import { camelizeKeys, decamelizeKeys } from '@/utils/camelCase'

// code Message
const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。'
}

// 创建axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // api 的 base_url
  timeout: 15000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
  config => {
    config.data = decamelizeKeys(config.data)
    config.params = decamelizeKeys(config.params)
    if (getCookieToken()) {
      config.headers.Authorization = `Bearer ${getCookieToken()}` // 让每个请求携带自定义 token 请根据实际情况自行修改
    }
    return config
  },
  error => {
    Promise.reject(error)
  }
)

// respone拦截器
service.interceptors.response.use(
  response => {
    const data = response.data
    return camelizeKeys(data)
  },
  error => {
    if (error.response) {
      Message({
        message: codeMessage[error.response.status] || error.response.data.message,
        type: 'error',
        duration: 3 * 1000,
        showClose: true
      })
    } else {
      Message({
        message: error.message,
        type: 'error',
        duration: 5 * 1000,
        showClose: true
      })
      return Promise.reject(error)
    }
  }
)

export function sleep (time = 0) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({})
    }, time)
  })
}

export default service
