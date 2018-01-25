## 介绍

 📽 基于React的PC端豆瓣电影SPA版

 🛠 会持续更新，喜欢可以star⭐️，也可自行fork修改

😆 水平有限，欢迎指出错误及提出优化建议

**🌈 在线[DEMO](https://thawing-crag-89764.herokuapp.com/)** (heroku在国外，访问速度较慢，另外长时间不连接会处于休眠状态，遇到这种情况刷新页面即可)

![preview](./doc/preview.gif)

**目前实现了：**

- [x] 主页
- [x] 电影页
- [x] 影人页
- [x] 短评页
- [x] 长评页
- [x] 排行榜
- [x] 影讯&购票 
- [ ] 剧照页


- [ ] 影人照片页

**TODO:** 

- [ ] 文档补全
- [ ] heroku页面无法自动捕获url
- [ ] heroku无法获取comments及reviews的数据(404)



## 技术栈

react + redux + redux-thunk + react-router + antd + scss 

## 项目运行

1. **安装依赖包**

   `npm i`

2. **本地运行react**

   `npm start`

3. **进入`./node-proxy`文件夹，开启 node API 代理服务**

   ` node index.js `

## API

项目中的API来自[这里](https://github.com/jokermonn/-Api/blob/master/DoubanMovie.md)

## License

MIT