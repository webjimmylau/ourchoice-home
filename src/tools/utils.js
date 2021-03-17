const data = {
  addClass(...params) {
    const arr = []
    for (var i in params) {
      const pi = params[i]
      if (typeof pi === 'string') {
        // 字符串 取值
        arr.push(pi)
      } else if (Array.isArray(pi)) {
        // 数组 取值
        pi.forEach((o) => {
          arr.push(o)
        })
      } else if (typeof pi === 'object') {
        // 对象 取键
        for (var u in pi) {
          if (pi[u]) arr.push(u)
        }
      }
    }
    return arr.join(' ')
  }
}

const utils = {
  install(Vue, name = '$utils') {
    Object.defineProperty(Vue.prototype, name, {
      value: data
    })
  }
}

module.exports = utils
