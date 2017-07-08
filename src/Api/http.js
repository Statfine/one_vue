import axios from 'axios'
import qs from 'qs'

// axios 配置
axios.defaults.timeout = 5000
axios.defaults.headers.post['Accept'] = 'application/json'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.baseURL = 'http://v3.wufazhuce.com:8000/api'

// POST传参序列化
axios.interceptors.request.use((config) => {
  if (config.method === 'post') {
    config.data = qs.stringify(config.data)
  }
  return config
}, (error) => {
  alert('错误的传参')
  return Promise.reject(error)
})

// 返回状态判断
axios.interceptors.response.use((res) => {
  if (res.status === 200) {
    return res.data
  }
  return alert('数据异常')
}, (error) => {
  alert('网络异常')
  return Promise.reject(error)
})

export function fetch (url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, params)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
