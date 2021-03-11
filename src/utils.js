const storage = {getItem: function() {}, setItem: function() {}, removeItem: function() {}}

export const sessionStorage = window.sessionStorage || storage
// 安卓版微信可能因为内存不足的原因，把localStorage放到缓存里而不能持久保存，http://www.cnblogs.com/mmmjiang13/p/4141557.html
export const localStorage = {
  getItem: function(name) {
    return window.localStorage && window.localStorage.getItem(name)
  },
  setItem: function(name, value) {
    window.localStorage && window.localStorage.setItem(name, value)
  },
  removeItem: function(name) {
    window.localStorage && window.localStorage.removeItem(name)
  },
  clear: function() {
    window.localStorage && window.localStorage.clear()
  }
}

export const getAccessToken = () => ({
  name: window.btoa('access_token'),
  value: localStorage.getItem(window.btoa('access_token')),
  expiresName: window.btoa('expires_at'),
  expiresAt: localStorage.getItem(window.btoa('expires_at'))
})

export const setAccessToken = (value, expiresIn) => {
  localStorage.setItem(getAccessToken().name, 'Bearer ' + value)
  localStorage.setItem(getAccessToken().expiresName, Date.now() + expiresIn * 1000)
}

export const removeAccessToken = () => {
  localStorage.removeItem(getAccessToken().name)
  localStorage.removeItem(getAccessToken().expiresName)
  localStorage.removeItem('user')
}

// 序列化参数，创建 URL 编码文本字符串。
export const serialize = (params, baseUrl = '') => {
  let query = ''
  Object.keys(params).forEach(entry => {
    if (params[entry] !== null && params[entry] !== undefined && params[entry] !== '') {
      query += `${!query ? '' : '&'}${entry}=${params[entry]}`
    }
  })

  return baseUrl + (/\?/.test(baseUrl) ? '&' : '?') + query
}

export const setFullScreen = (isFull) => {
  document.body.className = isFull ? 'full-screen' : ''
}

export const addClass = (...params) => (
  params.filter(item =>
    (Array.isArray(item) && item[0] && typeof item[1] === 'string' && (item[1] || '').trim() !== '') ||
    (typeof item === 'string' && (item || '').trim() !== '')
  )
    .map(item => (
      Array.isArray(item) ? (item[0] ? item[1] : item[2] || '') : (item || '').trim()
    ))
    .join(' ')
)
