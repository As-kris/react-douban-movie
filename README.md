## 介绍

 🎬 基于 React 的 PC 端豆瓣电影 SPA 版

 🛠 会保持维护，喜欢可以 star，也可自行 fork 修改

📦 在线 demo 无法访问全部功能，本地 clone 下来可体验全部功能

**🌈 在线 [DEMO](https://thawing-crag-89764.herokuapp.com/)** (heroku 在国外，访问速度较慢，另外长时间不连接会处于休眠状态，遇到这种情况刷新页面即可)

![preview](./doc/preview.gif)

**目前实现了：**

- [x] 主页
- [x] 电影页
- [x] 影人页
- [x] 短评页
- [x] 长评页
- [x] 排行榜
- [x] 影讯&购票 
- [x] 搜索页
- [ ] 剧照页


- [ ] 影人照片页

**TODO:** 

- [ ] heroku页面无法自动捕获 url
- [ ] heroku无法获取 comments 及 reviews 的数据 (404)


## 技术栈

react + redux + redux-thunk + react-router + antd + scss 

## 项目运行

1. **安装依赖包**

   `npm i`

2. **本地运行 react**

   `npm start`

3. **进入 `./node-proxy` 文件夹，开启 node API 代理服务**

   ` node index.js `

## API

项目中的 API [来源](https://github.com/jokermonn/-Api/blob/master/DoubanMovie.md)

## License

MIT