# epet_app
> 模拟e宠商城

##day01
   `
       路由搭建，静态头部和轮播
   `
    
##day02
    
        main的各部分组件
    
##day03


    在使用Navbar的时候，和tab-container一起使用，
    为了使tab区在左侧使用了伸缩盒模型，flex-direction: column使主次颠倒竖向排列


##day04
    
    
##day05
  
    1、 当使用验证码时，应该 注意跨域发请求的问题，在config==>index.js中配置
        proxyTable: {
           '/sendcode': {
             target: 'http://localhost:3000',
             changeOrigin: true,
           },
           '/login': {
             target: 'http://localhost:3000',
             changeOrigin: true,
           }
         },
    2、当用横向滚动式注意初始化和监视main的变化（watch对象和mounted函数）
     
  


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
