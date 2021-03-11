import axios from './axios'
import md5 from 'md5'

/**
 * 获取授权参数
 */
export const getAuthorizationNeed = () => (
  axios.post('/api/authorization_need')
    .then(res => res.data)
    .catch(err => err)
)
