import {reqMain,  reqCategory,  reqBrands, RESULT_OK} from '../api'
import {
  RECEIVE_MAIN,
  RECEIVE_BRANDS,
  RECEIVE_CATEGORY,
  ADD_USER
} from './mutation-types'

export default {

  // 获取主页信息
  getMain({commit},cb) {
    // 发送ajax请求, 获取seller数据
    reqMain().then(response => {
      const result = response.data
      if(result.code===RESULT_OK) {
        const main = result.data
        // 提交mutaion请求
        commit(RECEIVE_MAIN, {main})
        cb && cb()
      }
    })
  },

  // 获取分类列表信息
  getCategory({commit}, cb) {
    // 发送ajax请求, 获取ratings数据
    reqCategory().then(response => {
      const result = response.data
      if(result.code===RESULT_OK) {
        const category = result.data
        // 提交mutaion请求
        commit(RECEIVE_CATEGORY, {category})

        cb && cb()
      }
    })
  },

  // 获取品牌列表信息
  getBrands({commit}, cb) {
    // 发送ajax请求, 获取goods数据
    reqBrands().then(response => {
      const result = response.data
      if(result.code===RESULT_OK) {
        const brands = result.data
        // 提交mutaion请求
        commit(RECEIVE_BRANDS, {brands})
        // 如果传递了回调函数, 调用回调函数通知调用者
        cb && cb()
      }
    })
  },
  addUser({commit}, user){
    commit(ADD_USER,{user})
    console.log('提交user');
  }
}
