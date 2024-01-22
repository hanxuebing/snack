// import Vue from 'vue'
import axios from 'axios'
import { getToken } from "./cache/cookies"
import NotificationAdapter from './NotificationAdapter'
/** 退出登录并强制刷新页面（会重定向到登录页） */
function logout () {
  // useUserStoreHook().logout()
  // location.reload()
}

const token = getToken()

const defaultConfig = {
  headers: {
    Authorization: token ? `Bearer ${token}` : undefined,
    "Content-Type": "application/json"
  },
  timeout: 5000,
  baseURL: import.meta.env.VITE_BASE_API,
  data: {}
}
// create an axios instance
const service = axios.create(defaultConfig)

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    return config
  },
  error => {
    // do something with request error
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    // apiData 是 api 返回的数据
    const apiData = response.data
    // 二进制数据则直接返回
    const responseType = response.request?.responseType
    if (responseType === "blob" || responseType === "arraybuffer") return apiData
    // 这个 code 是和后端约定的业务 code
    const code = apiData.code
    // 如果没有 code, 代表这不是项目后端开发的 api
    if (code === undefined) {
      // TODO 实现适配器
      NotificationAdapter.error("非本系统的接口")
      return Promise.reject(new Error("非本系统的接口"))
    }
    switch (code) {
      case 0:
        // 本系统采用 code === 0 来表示没有业务错误
        return apiData
      case 401:
        // Token 过期时
        return logout()
      default:
        // 不是正确的 code
        // TODO 实现适配器
        NotificationAdapter.error(apiData.message || "Error")
        return Promise.reject(new Error("Error"))
    }
  },
  error => {
    // status 是 HTTP 状态码
    const status = error.response.status
    switch (status) {
      case 400:
        error.message = "请求错误"
        break
      case 401:
        // Token 过期时
        logout()
        break
      case 403:
        error.message = "拒绝访问"
        break
      case 404:
        error.message = "请求地址出错"
        break
      case 408:
        error.message = "请求超时"
        break
      case 500:
        error.message = "服务器内部错误"
        break
      case 501:
        error.message = "服务未实现"
        break
      case 502:
        error.message = "网关错误"
        break
      case 503:
        error.message = "服务不可用"
        break
      case 504:
        error.message = "网关超时"
        break
      case 505:
        error.message = "HTTP 版本不受支持"
        break
      default:
        break
    }
    // TODO 实现适配器
    NotificationAdapter.error(error.message)
    return Promise.reject(error)
  }
)

export default service
