import axios from 'axios'
const baseUrl = '/api/v2/music'
//设置拦截请求
// axios.interceptors.request.use(
//   config => {
//     return config
//   },
//   error => {
//     return Promise.error(error)
//   }
// )
// //响应拦截
// axios.interceptors.response.use(
//   response => {
//     if (response.errno === 0) {
//       return Promise.resolve(response)
//     } else {
//       return Promise.reject(response)
//     }
//   },
//   errno => {
//     if (errno.response.errno) {
//       return Promise.reject(errno.response)
//     }
//   }
// )

/**
 * method请求为POST
 * data格式为FROM params格式
 */
function postMethod(url, data, headers) {
  headers['Content-Type'] = 'application/json; charset=UTF-8'
  return new Promise((resolve, reject) => {
    axios
      .request({
        url: baseUrl + url,
        method: 'post',
        data,
        headers
      })
      .then(res => {
        if (res.data.errno === 0) {
          resolve(res)
        } else {
          resolve(res)
        }
      })
      .catch(err => {
        reject(err)
      })
  })
}
/**
 * method请求为GET
 * data格式为FROM params格式
 */
function getMthod(url, params, headers) {
  // headers['Content-Type'] = 'application/json; charset=UTF-8'
  return new Promise((resolve, reject) => {
    axios
      .request({
        url: baseUrl + url,
        method: 'get',
        params: { ...params },
        headers
      })
      .then(res => {
        if (res.data.errno === 0) {
          resolve(res)
        } else {
          reject(res)
        }
      })
      .catch(err => {
        reject(err)
      })
  })
}

export default {
  postMethod,
  getMthod
}
