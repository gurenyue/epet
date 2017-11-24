/*
 使用mockjs来模拟数据接口
 */
import Mock from 'mockjs'
import data from './mockData.json'

// 映射几个接口
Mock.mock('/api/main', {
  code: 0,
  data: data.main
})
Mock.mock('/api/category', {
  code: 0,
  data: data.category
})
Mock.mock('/api/brands', {
  code: 0,
  data: data.brands
})

// 向外暴露什么?   不需要, 只需要让当前文件被执行一次即可

