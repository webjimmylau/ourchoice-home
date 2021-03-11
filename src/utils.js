// sessionStorage
const storage = {
  getItem() {},
  setItem() {},
  removeItem() {}
}

export const sessionStorage = window.sessionStorage || storage

// localStorage
export const localStorage = {
  getItem(name) {
    return window.localStorage && window.localStorage.getItem(name)
  },
  setItem(name, value) {
    window.localStorage && window.localStorage.setItem(name, value)
  },
  removeItem(name) {
    window.localStorage && window.localStorage.removeItem(name)
  },
  clear() {
    window.localStorage && window.localStorage.clear()
  }
}

// access_token
export const getAccessToken = () => ({
  name: window.btoa('access_token'),
  value: localStorage.getItem(window.btoa('access_token')),
  expiresName: window.btoa('expires_at'),
  expiresValue: localStorage.getItem(window.btoa('expires_at'))
})

export const setAccessToken = (value, expiresIn) => {
  console.log(value, expiresIn)
  localStorage.setItem(getAccessToken().name, 'Bearer ' + value)
  localStorage.setItem(getAccessToken().expiresName, Date.now() + expiresIn * 1000)
}

export const removeAccessToken = () => {
  localStorage.removeItem(getAccessToken().name)
  localStorage.removeItem(getAccessToken().expiresName)
}

// 序列化参数
// params goodsId=1001
// base https://www.baidu.com?keywords=卫浴&categoryId=8008
export const serialize = (params, baseUrl = '') => {
  console.log(params, baseUrl)
  let query = ''
  Object.keys(params).forEach((entry) => {
    console.log(entry, params[entry])
    if (params[entry] !== null && params[entry] !== undefined && params[entry] !== '') {
      query += `${query ? '&' : ''}${entry}=${params[entry]}`
    }
  })
  return `${baseUrl}${/\?/.test(baseUrl) ? '&' : '?'}${query}`
}

const utils = {
  install(Vue, name = "$utils") {
    Object.defineProperty(Vue.prototype, name, {
      value: {
        sessionStorage,
        localStorage,
        getAccessToken,
        setAccessToken,
        removeAccessToken,
        serialize
      }
    })
  }
}

export default utils
