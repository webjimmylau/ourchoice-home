import Vue from 'vue'
import axios from 'axios'
import { getAccessToken } from './utils'

const basePath = '/' // process.env.VUE_APP_API + '/point/api/client/'
const headers = {
  'Content-Type': 'application/json'
}

const CancelToken = axios.CancelToken
const source = CancelToken.source()

const instance = axios.create({
  baseURL: basePath,
  timeout: 30000,
  headers,
  validateStatus: function () {
    return true
  }
})

instance.interceptors.request.use(config => {
  const { url, headers } = config
  const token = getAccessToken()

  if (token && token.value && config.url !== '/api/token') {
    headers['Authorization'] = token.value
  }

  config.url = /\?/.test(url) ? `${url}${/(&|\?)$/.test(url) ? '' : '&'}_t=${Date.now()}` : `${url}?_t=${Date.now()}`

  return config
}, error => Promise.reject(error))

instance.interceptors.response.use(response => {
  if (response.status === 401) {

  } else {

  }

  return response
}, error => Promise.reject(error))

export default instance
