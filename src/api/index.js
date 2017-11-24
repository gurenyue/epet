import axios from 'axios'

export const RESULT_OK = 0

export function reqMain() { // 返回是promise对象
  return axios.get('/api/main')
}

export function reqCategory() {
  return axios.get('/api/category')
}

export function reqBrands() {
  return axios.get('/api/brands')
}
